---
type: gtfobin
name: mosquitto
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# mosquitto

## file-read

```bash
mosquitto -c /path/to/input-file
```
_The file is actually parsed and the first wrong line (ending with a newline or a null character) is returned in an error message._
**Contexts:** sudo, suid, unprivileged
