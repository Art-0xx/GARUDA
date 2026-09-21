---
type: gtfobin
name: ntpdate
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# ntpdate

## file-read

```bash
ntpdate -a x -k /path/to/input-file -d localhost
```
_The file is actually parsed and lines are leaked through error messages._
**Contexts:** sudo, suid, unprivileged
