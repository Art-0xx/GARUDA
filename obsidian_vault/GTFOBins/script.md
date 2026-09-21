---
type: gtfobin
name: script
platform: Unix
functions: [file-write, shell]
tags: [gtfobin, unix, lotl]
---

# script

## file-write

```bash
script -q -c '# DATA' /path/to/output-file
```
_The content appears among the log prints._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
script -q /dev/null
```
**Contexts:** sudo, suid, unprivileged
