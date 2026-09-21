---
type: detection_rule
title: "UAC Bypass Using IDiagnostic Profile"
rule_id: 4cbef972-f347-4170-b62a-8253f6168e6d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using IDiagnostic Profile

## Description
Detects the "IDiagnosticProfileUAC" UAC bypass technique

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentCommandLine|contains: ' /Processid:{12C21EA7-2EB8-4B55-9249-AC243DA8C666}'
  ParentImage|endswith: \DllHost.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/Wh04m1001/IDiagnosticProfileUAC

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-03
- **Rule ID:** `4cbef972-f347-4170-b62a-8253f6168e6d`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_idiagnostic_profile.yml`
