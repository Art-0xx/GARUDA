---
type: gtfobin
name: dmesg
platform: Unix
functions: [file-read, inherit]
tags: [gtfobin, unix, lotl]
---

# dmesg

## file-read

```bash
dmesg -rF /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
dmesg -H
```
**Contexts:** sudo, suid, unprivileged
