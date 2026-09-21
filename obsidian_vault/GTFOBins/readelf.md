---
type: gtfobin
name: readelf
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# readelf

## file-read

```bash
readelf -a @/path/to/input-file
```
_Each line is corrupted by a prefix string and wrapped inside single quotes. Also consider that lines are actually parsed as `readelf` options thus some file contents may lead to unexpected results._
**Contexts:** sudo, suid, unprivileged
