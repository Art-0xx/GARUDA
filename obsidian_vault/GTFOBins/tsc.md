---
type: gtfobin
name: tsc
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# tsc

## file-read

```bash
tsc /path/to/input-file.ts
```
_Content is leaked as error messages. The file extension must be one of the supported ones, e.g., `.ts`, `.tsx`, etc._
**Contexts:** sudo, unprivileged

## file-write

```bash
tsc /path/to/input-file.ts --outFile /path/to/output-file
```
_Content is leaked as error messages and written to file. The file extension must be one of the supported ones, e.g., `.ts`, `.tsx`, etc._
**Contexts:** sudo, unprivileged
