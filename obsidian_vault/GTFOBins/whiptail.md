---
type: gtfobin
name: whiptail
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# whiptail

## file-read

```bash
whiptail --textbox --scrolltext /path/to/input-file 0 0
```
_The file is shown in an interactive TUI dialog made for displaying text, arrows can be used to scroll long content._
**Contexts:** sudo, suid, unprivileged
