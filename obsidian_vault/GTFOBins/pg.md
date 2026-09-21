---
type: gtfobin
name: pg
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# pg

## file-read

```bash
pg /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
pg /etc/hosts
!/bin/sh
```
**Contexts:** sudo, suid, unprivileged
