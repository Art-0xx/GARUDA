---
type: detection_rule
title: "Suspicious PowerShell Download - PoshModule"
rule_id: de41232e-12e8-49fa-86bc-c05c7e722df9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Download - PoshModule

## Description
Detects suspicious PowerShell download command

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_function:
  ContextInfo|contains:
  - .DownloadFile(
  - .DownloadString(
selection_webclient_:
  ContextInfo|contains: System.Net.WebClient
```

## MITRE ATT&CK
- T1059.001

## False Positives
- PowerShell scripts that download content from the Internet

## References
- https://learn.microsoft.com/en-us/dotnet/api/system.net.webclient.downloadfile?view=net-8.0
- https://learn.microsoft.com/en-us/dotnet/api/system.net.webclient.downloadstring?view=net-8.0

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-05
- **Rule ID:** `de41232e-12e8-49fa-86bc-c05c7e722df9`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_download.yml`
