---
type: gtfobin
name: file
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# file

## file-read

```bash
file -f /path/to/input-file
```
_Each input line is treated as a filename for the `file` command and the output is corrupted by a suffix `:` followed by the result or the error of the operation._
**Contexts:** sudo, suid, unprivileged

```bash
file -m /path/to/input-file
```
_Each line is corrupted by a prefix string and wrapped inside quotes.

If a line in the target file begins with a `#`, it will not be printed as these lines are parsed as comments.

It can also be provided with a directory and will read each file in the directory._
**Contexts:** sudo, suid, unprivileged
