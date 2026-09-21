---
type: detection_rule
title: "Use Icacls to Hide File to Everyone"
rule_id: 4ae81040-fc1c-4249-bfa3-938d260214d9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.001]
---

# Use Icacls to Hide File to Everyone

## Description
Detect use of icacls to deny access for everyone in Users folder sometimes used to hide malicious files

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains|all:
  - /deny
  - '*S-1-1-0:'
selection_icacls:
- OriginalFileName: iCACLS.EXE
- Image|endswith: \icacls.exe
```

## MITRE ATT&CK
- T1564.001

## False Positives
- Unknown

## References
- https://app.any.run/tasks/1df999e6-1cb8-45e3-8b61-499d1b7d5a9b/

## Metadata
- **Author:** frack113
- **Date:** 2022-07-18
- **Rule ID:** `4ae81040-fc1c-4249-bfa3-938d260214d9`
- **Source file:** `windows/process_creation/proc_creation_win_icacls_deny.yml`
