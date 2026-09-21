---
type: detection_rule
title: "Symlink Etc Passwd"
rule_id: c67fc22a-0be5-4b4f-aad5-2b32c4b69523
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1204.001]
---

# Symlink Etc Passwd

## Description
Detects suspicious command lines that look as if they would create symbolic links to /etc/passwd

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- ln -s -f /etc/passwd
- ln -s /etc/passwd
```

## MITRE ATT&CK
- T1204.001

## False Positives
- Unknown

## References
- https://www.qualys.com/2021/05/04/21nails/21nails.txt

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-04-05
- **Rule ID:** `c67fc22a-0be5-4b4f-aad5-2b32c4b69523`
- **Source file:** `linux/builtin/lnx_symlink_etc_passwd.yml`
