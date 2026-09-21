---
type: detection_rule
title: "Suspicious PowerShell Download - Powershell Script"
rule_id: 403c2cc0-7f6b-4925-9423-bfa573bed7eb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Download - Powershell Script

## Description
Detects suspicious PowerShell download command

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: webclient and download
download:
  ScriptBlockText|contains:
  - .DownloadFile(
  - .DownloadFileAsync(
  - .DownloadString(
  - .DownloadStringAsync(
webclient:
  ScriptBlockText|contains: System.Net.WebClient
```

## MITRE ATT&CK
- T1059.001

## False Positives
- PowerShell scripts that download content from the Internet

## References
- https://learn.microsoft.com/en-us/dotnet/api/system.net.webclient.downloadstring?view=net-8.0
- https://learn.microsoft.com/en-us/dotnet/api/system.net.webclient.downloadfile?view=net-8.0

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-05
- **Rule ID:** `403c2cc0-7f6b-4925-9423-bfa573bed7eb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_download.yml`
