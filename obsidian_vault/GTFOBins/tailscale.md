---
type: gtfobin
name: tailscale
platform: Unix
functions: [upload]
tags: [gtfobin, unix, lotl]
---

# tailscale

## upload

```bash
tailscale serve --http=12345 /path/to/input-file
```
_The URL is reachable by any host of the same Tailnet._
**Contexts:** sudo
