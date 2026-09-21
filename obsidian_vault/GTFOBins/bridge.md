---
type: gtfobin
name: bridge
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# bridge

## file-read

```bash
bridge -b /path/to/input-file
```
_Outputs the first line of the file (until the first whitespace) inside an error message to stdandard error._
**Contexts:** sudo, suid, unprivileged
