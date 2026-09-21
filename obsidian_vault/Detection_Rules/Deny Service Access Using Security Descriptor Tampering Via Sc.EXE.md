---
type: detection_rule
title: "Deny Service Access Using Security Descriptor Tampering Via Sc.EXE"
rule_id: 99cf1e02-00fb-4c0d-8375-563f978dfd37
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Deny Service Access Using Security Descriptor Tampering Via Sc.EXE

## Description
Detects suspicious DACL modifications to deny access to a service that affects critical trustees. This can be used to hide services or make them unstoppable.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_sc:
- Image|endswith: \sc.exe
- OriginalFileName: sc.exe
selection_sdset:
  CommandLine|contains|all:
  - sdset
  - D;
selection_trustee:
  CommandLine|contains:
  - ;IU
  - ;SU
  - ;BA
  - ;SY
  - ;WD
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- https://www.sans.org/blog/red-team-tactics-hiding-windows-services/
- https://itconnect.uw.edu/tools-services-support/it-systems-infrastructure/msinf/other-help/understanding-sddl-syntax/
- https://learn.microsoft.com/en-us/windows/win32/secauthz/sid-strings

## Metadata
- **Author:** Jonhnathan Ribeiro, oscd.community
- **Date:** 2020-10-16
- **Rule ID:** `99cf1e02-00fb-4c0d-8375-563f978dfd37`
- **Source file:** `windows/process_creation/proc_creation_win_sc_sdset_deny_service_access.yml`
