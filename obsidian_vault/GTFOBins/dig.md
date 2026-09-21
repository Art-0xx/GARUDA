---
type: gtfobin
name: dig
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# dig

## file-read

```bash
dig -f /path/to/input-file
```
_Each input line is treated as a lookup query for the `dig` command and the output is corrupted with the result or errors of the operation._
**Contexts:** sudo, suid, unprivileged
