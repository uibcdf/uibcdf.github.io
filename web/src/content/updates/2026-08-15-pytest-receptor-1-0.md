---
title: "pytest-receptor 1.0 released"
date: 2026-08-15
tags: [software, news]
summary: "pytest-receptor 1.0 is out on PyPI and our conda channel. It is a pytest reporter built for coding agents: compact output that never fabricates a verdict and groups failures by root cause. It auto-discovers on install and changes nothing about normal pytest unless you opt in."
draft: false
featured: true
---
We are happy to announce **pytest-receptor 1.0**, now available on both PyPI and the `uibcdf` conda channel.

When a coding agent runs a test suite, plain pytest output costs it hundreds or thousands of tokens — and, worse, it can lead the agent to "guess" results that never happened. pytest-receptor is a pytest reporter built for exactly that setting:

- **Compact output** that dramatically reduces token usage.
- It **never fabricates a verdict**: if something is unknown, it says so.
- It **groups failures by root cause**, not by symptom.
- **Zero configuration**: it is auto-discovered on install and changes nothing about normal pytest unless you opt in.

It supports Python 3.11–3.13 and pytest 8 or later, and every combination is exercised in CI.

Install it with:

```bash
conda install -c uibcdf pytest-receptor
```

or:

```bash
pip install pytest-receptor
```

Documentation: <https://www.uibcdf.org/pytest-receptor/> · Source (MIT): <https://github.com/uibcdf/pytest-receptor>
