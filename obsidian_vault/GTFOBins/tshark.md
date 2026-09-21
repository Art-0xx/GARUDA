---
type: gtfobin
name: tshark
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# tshark

## inherit

```bash
echo '...' >/path/to/temp-file
tshark -Xlua_script:/path/to/temp-file
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, unprivileged
