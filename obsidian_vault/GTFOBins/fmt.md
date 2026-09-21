---
type: gtfobin
name: fmt
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# fmt

## file-read

```bash
fmt -pNON_EXISTING_PREFIX /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

```bash
fmt -999 /path/to/input-file
```
_This corrupts the output by wrapping very long lines at the given width (`999`)._
**Contexts:** sudo, suid, unprivileged
