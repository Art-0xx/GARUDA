---
type: detection_rule
title: "New Service Creation Using PowerShell"
rule_id: c02e96b7-c63a-4c47-bd83-4a9f74afcfb2
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# New Service Creation Using PowerShell

## Description
Detects the creation of a new service using powershell.

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
  - New-Service
  - -BinaryPathName
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Legitimate administrator or user creates a service for legitimate reasons.
- Software installation

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1543.003/T1543.003.md

## Metadata
- **Author:** Timur Zinniatullin, Daniil Yugoslavskiy, oscd.community
- **Date:** 2023-02-20
- **Rule ID:** `c02e96b7-c63a-4c47-bd83-4a9f74afcfb2`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_create_service.yml`
