---
type: gtfobin
name: wc
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# wc

## file-read

```bash
wc --files0-from /path/to/input-file
```
_The file content is parsed as a sequence of `\x00` separated paths. On error the file content appears in a message._
**Contexts:** sudo, suid, unprivileged
