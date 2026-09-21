---
type: gtfobin
name: facter
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# facter

## inherit

```bash
FACTERLIB=/path/to/dir/ facter
```
_The first `.rb` file in the `/path/to/dir/` directory will be executed._
**Contexts:** sudo, unprivileged

```bash
facter --custom-dir=/path/to/dir/ x
```
_The first `.rb` file in the `/path/to/dir/` directory will be executed._
**Contexts:** sudo, unprivileged
