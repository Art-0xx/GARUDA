---
type: gtfobin
name: gimp
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# gimp

## inherit

```bash
gimp -idf --batch-interpreter=python-fu-eval -b '...'
```
_This allows to run Python code (`...`). It hangs afterwards and can be terminated by pressing `Ctrl-C`._
**Contexts:** sudo, unprivileged
