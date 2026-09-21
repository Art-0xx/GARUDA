---
type: detection_rule
title: "Binary Padding - Linux"
rule_id: c52a914f-3d8b-4b2a-bb75-b3991e75f8ba
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1027.001]
---

# Binary Padding - Linux

## Description
Adversaries may use binary padding to add junk data and change the on-disk representation of malware.
This rule detect using dd and truncate to add a junk data to file.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection_execve and (keywords_truncate or (keywords_dd and not keywords_filter))
keywords_dd:
  '|all':
  - dd
  - if=
keywords_filter:
- of=
keywords_truncate:
  '|all':
  - truncate
  - -s
selection_execve:
  type: EXECVE
```

## MITRE ATT&CK
- T1027.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1027.001/T1027.001.md

## Metadata
- **Author:** Igor Fits, oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `c52a914f-3d8b-4b2a-bb75-b3991e75f8ba`
- **Source file:** `linux/auditd/execve/lnx_auditd_binary_padding.yml`
