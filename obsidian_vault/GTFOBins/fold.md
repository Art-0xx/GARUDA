---
type: gtfobin
name: fold
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# fold

## file-read

```bash
fold -w999 /path/to/input-file
```
_This corrupts the output by wrapping very long lines at the given width (`999`)._
**Contexts:** sudo, suid, unprivileged
