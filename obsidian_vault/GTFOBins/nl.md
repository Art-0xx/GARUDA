---
type: gtfobin
name: nl
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# nl

## file-read

```bash
nl -bn -w1 -s '' /path/to/input-file
```
_The read file content is corrupted by a leading space added to each line._
**Contexts:** sudo, suid, unprivileged
