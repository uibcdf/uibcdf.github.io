import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const isDir = async (target) => {
  try {
    return (await fs.stat(target)).isDirectory();
  } catch {
    return false;
  }
};

const ensureDir = async (target) => {
  await fs.mkdir(target, { recursive: true });
};

const copyIfExists = async (from, to) => {
  try {
    await fs.copyFile(from, to);
    return true;
  } catch {
    return false;
  }
};

const syncResearchLineImages = async () => {
  const sourceRoot = path.join(root, 'src/content/research-lines');
  const targetRoot = path.join(root, 'public/research-lines');
  await fs.rm(targetRoot, { recursive: true, force: true });
  await ensureDir(targetRoot);

  if (!(await isDir(sourceRoot))) return 0;

  const entries = await fs.readdir(sourceRoot, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    const sourceImage = path.join(sourceRoot, name, 'image.png');
    const targetDir = path.join(targetRoot, name);
    const targetImage = path.join(targetDir, 'image.png');
    await ensureDir(targetDir);
    if (await copyIfExists(sourceImage, targetImage)) copied += 1;
  }

  return copied;
};

const syncSoftwareThumbnails = async () => {
  const sourceRoot = path.join(root, 'src/content/software-tools');
  const targetRoot = path.join(root, 'public/software-tools');
  await fs.rm(targetRoot, { recursive: true, force: true });
  await ensureDir(targetRoot);

  if (!(await isDir(sourceRoot))) return 0;

  const groups = await fs.readdir(sourceRoot, { withFileTypes: true });
  let copied = 0;

  for (const group of groups) {
    if (!group.isDirectory()) continue;
    const groupSource = path.join(sourceRoot, group.name);
    const groupTarget = path.join(targetRoot, group.name);
    await ensureDir(groupTarget);

    const items = await fs.readdir(groupSource, { withFileTypes: true });
    for (const item of items) {
      if (!item.isDirectory()) continue;
      const sourceThumb = path.join(groupSource, item.name, 'thumbnail.png');
      const targetDir = path.join(groupTarget, item.name);
      const targetThumb = path.join(targetDir, 'thumbnail.png');
      await ensureDir(targetDir);
      if (await copyIfExists(sourceThumb, targetThumb)) copied += 1;
    }
  }

  return copied;
};

const main = async () => {
  const copiedResearch = await syncResearchLineImages();
  const copiedSoftware = await syncSoftwareThumbnails();
  console.log(
    `[sync-content-assets] copied ${copiedResearch} research images and ${copiedSoftware} software thumbnails`,
  );
};

await main();
