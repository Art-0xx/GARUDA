---
type: gtfobin
name: od
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# od

## file-read

```bash
od -An -c -w999 /path/to/input-file
```
_Three spaces are added before each character in the read file (wrapped at the specified value, i.e., `999`), and non-printable chars are printed as backslash escape sequences._
**Contexts:** sudo, suid, unprivileged
