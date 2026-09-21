---
type: detection_rule
title: "New BITS Job Created Via PowerShell"
rule_id: fe3a2d49-f255-4d10-935c-bda7391108eb
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# New BITS Job Created Via PowerShell

## Description
Detects the creation of a new bits job by PowerShell

## Log Source
```yaml
product: windows
service: bits-client
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3
  processPath|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1197

## False Positives
- Administrator PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1197/T1197.md

## Metadata
- **Author:** frack113
- **Date:** 2022-03-01
- **Rule ID:** `fe3a2d49-f255-4d10-935c-bda7391108eb`
- **Source file:** `windows/builtin/bits_client/win_bits_client_new_job_via_powershell.yml`
