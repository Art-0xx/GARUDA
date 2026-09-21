---
type: detection_rule
title: "PowerShell Download and Execution Cradles"
rule_id: 85b0b087-eddf-4a2b-b033-d771fa2b9775
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# PowerShell Download and Execution Cradles

## Description
Detects PowerShell download and execution cradles.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_download:
  CommandLine|contains:
  - .DownloadString(
  - .DownloadFile(
  - 'Invoke-WebRequest '
  - 'iwr '
  - 'Invoke-RestMethod '
  - 'irm '
selection_iex:
  CommandLine|contains:
  - ;iex $
  - '| IEX'
  - '|IEX '
  - I`E`X
  - I`EX
  - IE`X
  - 'iex '
  - IEX (
  - IEX(
  - Invoke-Expression
```

## MITRE ATT&CK
- T1059

## False Positives
- Some PowerShell installers were seen using similar combinations. Apply filters accordingly

## References
- https://github.com/VirtualAlllocEx/Payload-Download-Cradles/blob/88e8eca34464a547c90d9140d70e9866dcbc6a12/Download-Cradles.cmd
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-24
- **Rule ID:** `85b0b087-eddf-4a2b-b033-d771fa2b9775`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_download_iex.yml`
