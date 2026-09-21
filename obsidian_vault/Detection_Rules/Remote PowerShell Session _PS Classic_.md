---
type: detection_rule
title: "Remote PowerShell Session (PS Classic)"
rule_id: 60167e5c-84b2-4c95-a7ac-86281f27c445
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1021.006]
---

# Remote PowerShell Session (PS Classic)

## Description
Detects remote PowerShell sessions

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains|all:
  - HostName=ServerRemoteHost
  - wsmprovhost.exe
```

## MITRE ATT&CK
- T1059.001
- T1021.006

## False Positives
- Legitimate use remote PowerShell sessions

## References
- https://threathunterplaybook.com/hunts/windows/190511-RemotePwshExecution/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-08-10
- **Rule ID:** `60167e5c-84b2-4c95-a7ac-86281f27c445`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_remote_powershell_session.yml`
