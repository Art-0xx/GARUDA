---
type: gtfobin
name: tac
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# tac

## file-read

```bash
tac -s 'RANDOM' /path/to/input-file
```
_Make sure that `RANDOM` does not appear into the file to read otherwise the content of the file is corrupted by reversing the order of `RANDOM`-separated chunks._
**Contexts:** sudo, suid, unprivileged
