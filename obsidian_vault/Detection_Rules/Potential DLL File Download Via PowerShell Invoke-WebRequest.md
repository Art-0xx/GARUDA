---
type: detection_rule
title: "Potential DLL File Download Via PowerShell Invoke-WebRequest"
rule_id: 0f0450f3-8b47-441e-a31b-15a91dc243e2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1105]
---

# Potential DLL File Download Via PowerShell Invoke-WebRequest

## Description
Detects potential DLL files being downloaded using the PowerShell Invoke-WebRequest or Invoke-RestMethod cmdlets.

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
  - 'Invoke-RestMethod '
  - 'Invoke-WebRequest '
  - 'IRM '
  - 'IWR '
  CommandLine|contains|all:
  - http
  - OutFile
  - .dll
```

## MITRE ATT&CK
- T1059.001
- T1105

## False Positives
- Unknown

## References
- https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution

## Metadata
- **Author:** Florian Roth (Nextron Systems), Hieu Tran
- **Date:** 2023-03-13
- **Rule ID:** `0f0450f3-8b47-441e-a31b-15a91dc243e2`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_download_dll.yml`
