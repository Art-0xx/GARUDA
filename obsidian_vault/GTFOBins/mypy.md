---
type: gtfobin
name: mypy
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# mypy

## file-read

```bash
mypy /path/to/input-file
```
_Partial content is leaked as error messages._
**Contexts:** sudo, unprivileged

## file-write

```bash
mypy /path/to/input-file --junit-xml /path/to/output-file
```
_Partial content is leaked as error messages inside some XML tags._
**Contexts:** sudo, unprivileged
