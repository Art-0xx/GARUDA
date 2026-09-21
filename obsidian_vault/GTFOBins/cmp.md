---
type: gtfobin
name: cmp
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# cmp

## file-read

```bash
cmp /path/to/input-file /dev/zero -b -l
```
_Dump the bytes of the input file that are different from the NUL byte in a tabular format._
**Contexts:** sudo, suid, unprivileged
