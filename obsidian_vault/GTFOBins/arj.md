---
type: gtfobin
name: arj
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# arj

## file-read

```bash
arj a /path/to/output-file /path/to/input-file
arj p /path/to/output-file
```
_The `.arj` suffix will be added to `output-file`._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >output-file
arj a x output-file
arj e x /path/to/output-dir/
```
_The `.arj` suffix will be added to `x`._
**Contexts:** sudo, suid, unprivileged
