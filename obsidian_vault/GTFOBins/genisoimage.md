---
type: gtfobin
name: genisoimage
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# genisoimage

## file-read

```bash
genisoimage -q -o - /path/to/input-file
```
_The output is placed inside the ISO9660 file system binary format, it can be mounted or extracted with tools like `7z`._
**Contexts:** sudo, suid, unprivileged

```bash
genisoimage -sort /path/to/input-file
```
_The file is parsed, and some of its content is disclosed by the error messages._
**Contexts:** sudo, suid, unprivileged
