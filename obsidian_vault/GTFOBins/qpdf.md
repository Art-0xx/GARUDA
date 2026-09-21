---
type: gtfobin
name: qpdf
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# qpdf

## file-read

```bash
qpdf --empty --add-attachment /path/to/input-file --key=x -- /path/to/output-file
qpdf --show-attachment=x /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
