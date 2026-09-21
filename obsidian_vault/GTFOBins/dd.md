---
type: gtfobin
name: dd
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# dd

## file-read

```bash
dd if=/path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | dd of=/path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
