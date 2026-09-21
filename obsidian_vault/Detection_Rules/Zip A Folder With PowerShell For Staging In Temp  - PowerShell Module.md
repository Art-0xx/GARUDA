---
type: detection_rule
title: "Zip A Folder With PowerShell For Staging In Temp  - PowerShell Module"
rule_id: daf7eb81-35fd-410d-9d7a-657837e602bb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1074.001]
---

# Zip A Folder With PowerShell For Staging In Temp  - PowerShell Module

## Description
Detects PowerShell scripts that make use of the "Compress-Archive" Cmdlet in order to compress folders and files where the output is stored in a potentially suspicious location that is used often by malware for exfiltration.
An adversary might compress data (e.g., sensitive documents) that is collected prior to exfiltration in order to make it portable and minimize the amount of data sent over the network.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ContextInfo|contains|all:
  - Compress-Archive -Path*-DestinationPath $env:TEMP
  - Compress-Archive -Path*-DestinationPath*\AppData\Local\Temp\
  - Compress-Archive -Path*-DestinationPath*:\Windows\Temp\
```

## MITRE ATT&CK
- T1074.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1074.001/T1074.001.md
- https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-347a

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2021-07-20
- **Rule ID:** `daf7eb81-35fd-410d-9d7a-657837e602bb`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_zip_compress.yml`
