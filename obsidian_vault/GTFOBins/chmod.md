---
type: gtfobin
name: chmod
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# chmod

## privilege-escalation

```bash
chmod 6777 /path/to/input-file
```
_This can be run with elevated privileges to change permissions (`6` denotes the SUID bits) and then read, write, or execute a file._
**Contexts:** sudo, suid
