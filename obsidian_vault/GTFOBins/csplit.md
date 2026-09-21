---
type: gtfobin
name: csplit
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# csplit

## file-read

```bash
csplit /path/to/input-file 1
cat xx01
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
csplit -z -b '%doutput-file' /path/to/temp-file 1
```
_Writes the data to `xx0output-file` in the current working directory. If needed, a different prefix can be specified with `-f` (instead of `xx`)._
**Contexts:** sudo, suid, unprivileged
