---
type: gtfobin
name: expect
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# expect

## file-read

```bash
expect /path/to/input-file
```
_The file is read and parsed as an `expect` command file, the content of the first invalid line is returned in an error message._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
expect -c 'spawn /bin/sh;interact'
```
**Contexts:** sudo, suid, unprivileged
