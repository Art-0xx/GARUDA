---
type: gtfobin
name: diff
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# diff

## file-read

```bash
diff --line-format=%L /dev/null /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

```bash
diff --recursive /path/to/empty-dir /path/to/input-dir/
```
_This lists the content of a directory. `/path/to/empty-dir` can be any directory, but for convenience it is better to use an empty directory to avoid noise output._
**Contexts:** sudo, suid, unprivileged
