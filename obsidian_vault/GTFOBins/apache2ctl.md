---
type: gtfobin
name: apache2ctl
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# apache2ctl

## file-read

```bash
apache2ctl -c 'Include /path/to/input-file'
```
_The first line only is likely leaked as an error message._
**Contexts:** sudo, unprivileged
