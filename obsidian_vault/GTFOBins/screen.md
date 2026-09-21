---
type: gtfobin
name: screen
platform: Unix
functions: [file-write, shell]
tags: [gtfobin, unix, lotl]
---

# screen

## file-write

```bash
screen -L -Logfile /path/to/output-file echo DATA
```
_Data is appended to the file and `\n` is converted to `\r\n`._
**Contexts:** sudo, unprivileged

```bash
screen -L /path/to/output-file echo DATA
```
_Data is appended to the file and `\n` is converted to `\r\n`._
**Contexts:** sudo, unprivileged

## shell

```bash
screen
```
**Contexts:** sudo, unprivileged
