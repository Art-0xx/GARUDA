---
type: detection_rule
title: "Potential Discovery Activity Using Find - MacOS"
rule_id: 85de3a19-b675-4a51-bfc6-b11a5186c971
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1083]
---

# Potential Discovery Activity Using Find - MacOS

## Description
Detects usage of "find" binary in a suspicious manner to perform discovery

## Log Source
```yaml
category: process_creation
product: macos
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
- **Rule ID:** `85de3a19-b675-4a51-bfc6-b11a5186c971`
- **Source file:** `macos/process_creation/proc_creation_macos_susp_find_execution.yml`
