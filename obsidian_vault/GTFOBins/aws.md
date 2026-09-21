---
type: gtfobin
name: aws
platform: Unix
functions: [file-read, inherit]
tags: [gtfobin, unix, lotl]
---

# aws

## file-read

```bash
aws ec2 describe-instances --filter file:///path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
aws help
```
**Contexts:** sudo, unprivileged
