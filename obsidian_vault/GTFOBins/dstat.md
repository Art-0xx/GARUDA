---
type: gtfobin
name: dstat
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# dstat

## inherit

```bash
dstat --xxx
```
_`dstat` allows you to run arbitrary Python scripts loaded as "external plugins" if they are located in one of the directories, stated in the `dstat` man page under "FILES":

- `~/.dstat/`
- `(path of binary)/plugins/`
- `/usr/share/dstat/`
- `/usr/local/share/dstat/`

Pick the one that you can write into. The plugin named `xxx` file name must be defined in the `dstat_xxx.py` file._
**Contexts:** sudo, unprivileged
