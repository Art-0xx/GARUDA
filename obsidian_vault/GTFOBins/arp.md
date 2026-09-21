---
type: gtfobin
name: arp
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# arp

## file-read

```bash
arp -v -f /path/to/input-file
```
_Lines are likely leaked as error messages._
**Contexts:** sudo, suid, unprivileged
