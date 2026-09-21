---
type: detection_rule
title: "Folder Compress To Potentially Suspicious Output Via Compress-Archive Cmdlet"
rule_id: 85a8e5ba-bd03-4bfb-bbfa-a4409a8f8b98
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1074.001]
---

# Folder Compress To Potentially Suspicious Output Via Compress-Archive Cmdlet

## Description
Detects PowerShell scripts that make use of the "Compress-Archive" Cmdlet in order to compress folders and files where the output is stored in a potentially suspicious location that is used often by malware for exfiltration.
An adversary might compress data (e.g., sensitive documents) that is collected prior to exfiltration in order to make it portable and minimize the amount of data sent over the network.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
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
- **Rule ID:** `85a8e5ba-bd03-4bfb-bbfa-a4409a8f8b98`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_zip_compress.yml`
