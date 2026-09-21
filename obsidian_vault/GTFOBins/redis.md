---
type: gtfobin
name: redis
platform: Unix
functions: [file-write]
tags: [gtfobin, unix, lotl]
---

# redis

## file-write

```bash
redis-cli -h 127.0.0.1
config set dir /path/to/output-dir/
config set dbfilename output-file
set x "DATA"
save
```
_Write files on the server running Redis at the specified location. Written data will appear amongst the database dump.

Keep in mind that it's actually the server to perform the file write._
**Contexts:** sudo, suid, unprivileged
