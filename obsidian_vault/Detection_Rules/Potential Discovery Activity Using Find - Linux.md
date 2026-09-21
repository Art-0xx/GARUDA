---
type: detection_rule
title: "Potential Discovery Activity Using Find - Linux"
rule_id: 8344c0e5-5783-47cc-9cf9-a0f7fd03e6cf
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083]
---

# Potential Discovery Activity Using Find - Linux

## Description
Detects usage of "find" binary in a suspicious manner to perform discovery

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - -perm -4000
  - -perm -2000
  - -perm 0777
  - -perm -222
  - -perm -o w
  - -perm -o x
  - -perm -u=s
  - -perm -g=s
  Image|endswith: /find
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://github.com/SaiSathvik1/Linux-Privilege-Escalation-Notes

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-28
- **Rule ID:** `8344c0e5-5783-47cc-9cf9-a0f7fd03e6cf`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_find_execution.yml`
