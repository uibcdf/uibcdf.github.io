#!/usr/bin/env bash
set -euo pipefail

# Generate publication-papers thumbnail.png from first page of a PDF.
# Spec target: 1000x1414 PNG (A4-like ratio), as defined in
# web/src/content/publication-papers/SPEC.txt.

usage() {
  cat <<'EOF'
Usage:
  web/scripts/make-publication-thumbnail.sh <input.pdf> [output.png]

Examples:
  web/scripts/make-publication-thumbnail.sh paper.pdf
  web/scripts/make-publication-thumbnail.sh paper.pdf web/src/content/publication-papers/2026/03/thumbnail.png

Notes:
  - If output is omitted, creates thumbnail.png next to the input PDF.
  - Requires: pdftoppm (Poppler)
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if [[ $# -lt 1 || $# -gt 2 ]]; then
  usage >&2
  exit 1
fi

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "Error: pdftoppm not found. Install Poppler utilities." >&2
  exit 1
fi

input_pdf="$1"
if [[ ! -f "$input_pdf" ]]; then
  echo "Error: input PDF not found: $input_pdf" >&2
  exit 1
fi

output_png="${2:-$(dirname "$input_pdf")/thumbnail.png}"
mkdir -p "$(dirname "$output_png")"

tmpdir="$(mktemp -d)"
cleanup() {
  rm -rf "$tmpdir"
}
trap cleanup EXIT

# Extract first page and scale exactly to publication thumbnail spec.
pdftoppm \
  -f 1 -l 1 \
  -singlefile \
  -png \
  -scale-to-x 1000 \
  -scale-to-y 1414 \
  "$input_pdf" \
  "$tmpdir/thumbnail"

mv -f "$tmpdir/thumbnail.png" "$output_png"
echo "Created: $output_png"
