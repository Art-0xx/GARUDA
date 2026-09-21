---
type: detection_rule
title: "Zip A Folder With PowerShell For Staging In Temp - PowerShell"
rule_id: 71ff406e-b633-4989-96ec-bc49d825a412
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1074.001]
---

# Zip A Folder With PowerShell For Staging In Temp - PowerShell

## Description
Detects PowerShell scripts that make use of the "Compress-Archive" Cmdlet in order to compress folders and files where the output is stored in a potentially suspicious location that is used often by malware for exfiltration.
An adversary might compress data (e.g., sensitive documents) that is collected prior to exfiltration in order to make it portable and minimize the amount of data sent over the network.

## Log Source
```yaml
product: windows
service: powershell-classic
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains:
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
- **Rule ID:** `71ff406e-b633-4989-96ec-bc49d825a412`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_susp_zip_compress.yml`
