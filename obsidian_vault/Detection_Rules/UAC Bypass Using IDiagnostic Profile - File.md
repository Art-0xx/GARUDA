---
type: detection_rule
title: "UAC Bypass Using IDiagnostic Profile - File"
rule_id: 48ea844d-19b1-4642-944e-fe39c2cc1fec
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using IDiagnostic Profile - File

## Description
Detects the creation of a file by "dllhost.exe" in System32 directory part of "IDiagnosticProfileUAC" UAC bypass technique

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \DllHost.exe
  TargetFilename|endswith: .dll
  TargetFilename|startswith: C:\Windows\System32\
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
- **Rule ID:** `48ea844d-19b1-4642-944e-fe39c2cc1fec`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_idiagnostic_profile.yml`
