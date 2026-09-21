---
type: gtfobin
name: aspell
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# aspell

## file-read

```bash
aspell -c /path/to/input-file
```
_The textual file is displayed in an interactive TUI showing only the parts that contain mispelled words._
**Contexts:** sudo, suid, unprivileged

```bash
aspell --conf /path/to/input-file
```
_The first word is likely displayed as error messaged, and converted to lowercase._
**Contexts:** sudo, suid, unprivileged
