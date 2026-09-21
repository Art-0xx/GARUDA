---
type: detection_rule
title: "Use of TTDInject.exe"
rule_id: b27077d6-23e6-45d2-81a0-e2b356eea5fd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127]
---

# Use of TTDInject.exe

## Description
Detects the executiob of TTDInject.exe, which is used by Windows 10 v1809 and newer to debug time travel (underlying call of tttracer.exe)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: ttdinject.exe
- OriginalFileName: TTDInject.EXE
```

## MITRE ATT&CK
- T1127

## False Positives
- Legitimate use

## References
- https://lolbas-project.github.io/lolbas/Binaries/Ttdinject/

## Metadata
- **Author:** frack113
- **Date:** 2022-05-16
- **Rule ID:** `b27077d6-23e6-45d2-81a0-e2b356eea5fd`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_ttdinject.yml`
