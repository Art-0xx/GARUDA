---
type: gtfobin
name: ul
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# ul

## file-read

```bash
ul /path/to/input-file
```
_The read file content is corrupted by replacing occurrences of `$'\b_'` to terminal sequences and by converting tabs to spaces._
**Contexts:** sudo, suid, unprivileged
