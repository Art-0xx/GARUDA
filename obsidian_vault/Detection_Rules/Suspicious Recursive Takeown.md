---
type: detection_rule
title: "Suspicious Recursive Takeown"
rule_id: 554601fb-9b71-4bcc-abf4-21a611be4fde
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1222.001]
---

# Suspicious Recursive Takeown

## Description
Adversaries can interact with the DACLs using built-in Windows commands takeown which can grant adversaries higher permissions on specific files and folders

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - '/f '
  - /r
  Image|endswith: \takeown.exe
```

## MITRE ATT&CK
- T1222.001

## False Positives
- Scripts created by developers and admins
- Administrative activity

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/takeown
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1222.001/T1222.001.md#atomic-test-1---take-ownership-using-takeown-utility

## Metadata
- **Author:** frack113
- **Date:** 2022-01-30
- **Rule ID:** `554601fb-9b71-4bcc-abf4-21a611be4fde`
- **Source file:** `windows/process_creation/proc_creation_win_takeown_recursive_own.yml`
