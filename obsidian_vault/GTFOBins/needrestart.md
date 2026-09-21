---
type: gtfobin
name: needrestart
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# needrestart

## inherit

```bash
echo '...' >/path/to/temp-file
needrestart -c /path/to/temp-file
```
_This allows to run Perl code (`...`)._
**Contexts:** sudo, unprivileged
