---
type: gtfobin
name: shuf
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# shuf

## file-read

```bash
shuf -z /path/to/input-file
```
_The read file content is corrupted by randomizing the order of NUL terminated strings._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
shuf -e DATA -o /path/to/output-file
```
_The written file content is corrupted by adding a newline._
**Contexts:** sudo, suid, unprivileged
