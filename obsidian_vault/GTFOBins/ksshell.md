---
type: gtfobin
name: ksshell
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# ksshell

## file-read

```bash
ksshell -i /path/to/input-file
```
_Each line is corrupted by a prefix string. Also consider that lines are actually parsed as `kickstart` scripts thus some file contents may lead to unexpected results._
**Contexts:** sudo, suid, unprivileged
