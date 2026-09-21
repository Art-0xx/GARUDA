---
type: gtfobin
name: lualatex
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# lualatex

## inherit

```bash
lualatex -shell-escape '\directlua{...}\end'
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged
