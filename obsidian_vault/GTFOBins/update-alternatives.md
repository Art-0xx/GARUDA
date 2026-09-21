---
type: gtfobin
name: update-alternatives
platform: Unix
functions: [file-write]
tags: [gtfobin, unix, lotl]
---

# update-alternatives

## file-write

```bash
echo DATA >/path/to/temp-file
update-alternatives --force --install /path/to/output-file x /path/to/temp-file 0
```
_Write in `/path/to/output-file` a symlink to `/path/to/temp-file`._
**Contexts:** sudo, suid
