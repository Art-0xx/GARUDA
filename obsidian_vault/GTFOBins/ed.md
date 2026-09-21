---
type: gtfobin
name: ed
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# ed

## file-read

```bash
ed /path/to/input-file
,p
q
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
ed /path/to/output-file
a
DATA
.
w
q
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
ed
!/bin/sh
q
```
**Contexts:** sudo, suid, unprivileged
