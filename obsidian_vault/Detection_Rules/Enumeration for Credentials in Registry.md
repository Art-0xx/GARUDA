---
type: detection_rule
title: "Enumeration for Credentials in Registry"
rule_id: e0b0c2ab-3d52-46d9-8cb7-049dc775fbd1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.002]
---

# Enumeration for Credentials in Registry

## Description
Adversaries may search the Registry on compromised systems for insecurely stored credentials.
The Windows Registry stores configuration information that can be used by the system or other programs.
Adversaries may query the Registry looking for credentials and passwords that have been stored for use by other programs or services

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: reg and hive
hive:
- CommandLine|contains|all:
  - '/f '
  - HKLM
- CommandLine|contains|all:
  - '/f '
  - HKCU
- CommandLine|contains: HKCU\Software\SimonTatham\PuTTY\Sessions
reg:
  CommandLine|contains|all:
  - ' query '
  - '/t '
  - REG_SZ
  - /s
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1552.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.002/T1552.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-20
- **Rule ID:** `e0b0c2ab-3d52-46d9-8cb7-049dc775fbd1`
- **Source file:** `windows/process_creation/proc_creation_win_reg_enumeration_for_credentials_in_registry.yml`
