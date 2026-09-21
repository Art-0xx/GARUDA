---
type: detection_rule
title: "Remote PowerShell Session (PS Module)"
rule_id: 96b9f619-aa91-478f-bacb-c3e50f8df575
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1021.006]
---

# Remote PowerShell Session (PS Module)

## Description
Detects remote PowerShell sessions

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_pwsh_archive:
  ContextInfo|contains: \Windows\system32\WindowsPowerShell\v1.0\Modules\Microsoft.PowerShell.Archive\Microsoft.PowerShell.Archive.psm1
selection:
  ContextInfo|contains|all:
  - ' = ServerRemoteHost '
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
- **Author:** Roberto Rodriguez @Cyb3rWard0g, Tim Shelton
- **Date:** 2019-08-10
- **Rule ID:** `96b9f619-aa91-478f-bacb-c3e50f8df575`
- **Source file:** `windows/powershell/powershell_module/posh_pm_remote_powershell_session.yml`
