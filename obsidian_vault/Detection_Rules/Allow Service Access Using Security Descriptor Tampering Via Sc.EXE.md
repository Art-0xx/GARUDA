---
type: detection_rule
title: "Allow Service Access Using Security Descriptor Tampering Via Sc.EXE"
rule_id: 6c8fbee5-dee8-49bc-851d-c3142d02aa47
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Allow Service Access Using Security Descriptor Tampering Via Sc.EXE

## Description
Detects suspicious DACL modifications to allow access to a service from a suspicious trustee. This can be used to override access restrictions set by previous ACLs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_hexnode:
  ParentImage: C:\Hexnode\Hexnode Agent\Current\HexnodeAgent.exe
selection_sc:
- Image|endswith: \sc.exe
- OriginalFileName: sc.exe
selection_sdset:
  CommandLine|contains|all:
  - sdset
  - A;
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
- https://twitter.com/0gtweet/status/1628720819537936386
- https://itconnect.uw.edu/tools-services-support/it-systems-infrastructure/msinf/other-help/understanding-sddl-syntax/
- https://learn.microsoft.com/en-us/windows/win32/secauthz/sid-strings

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-28
- **Rule ID:** `6c8fbee5-dee8-49bc-851d-c3142d02aa47`
- **Source file:** `windows/process_creation/proc_creation_win_sc_sdset_allow_service_changes.yml`
