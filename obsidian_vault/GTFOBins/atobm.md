---
type: gtfobin
name: atobm
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# atobm

## file-read

```bash
atobm /path/to/input-file
```
_Outputs only the first line of the file to standard error without the `-` and `#` characters, this can be customized with the `-c` option, by default is `-c -#`. Content can be retrieved with `awk -F "'" '{printf "%s", $2}'`._
**Contexts:** sudo, suid, unprivileged
