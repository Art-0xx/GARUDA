---
type: detection_rule
title: "Email Exifiltration Via Powershell"
rule_id: 312d0384-401c-4b8b-abdf-685ffba9a332
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Email Exifiltration Via Powershell

## Description
Detects email exfiltration via powershell cmdlets

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - Add-PSSnapin
  - Get-Recipient
  - -ExpandProperty
  - EmailAddresses
  - SmtpAddress
  - -hidetableheaders
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2022/09/07/profiling-dev-0270-phosphorus-ransomware-operations/
- https://github.com/Azure/Azure-Sentinel/blob/7e6aa438e254d468feec061618a7877aa528ee9f/Hunting%20Queries/Microsoft%20365%20Defender/Ransomware/DEV-0270/Email%20data%20exfiltration%20via%20PowerShell.yaml

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems),  Azure-Sentinel (idea)
- **Date:** 2022-09-09
- **Rule ID:** `312d0384-401c-4b8b-abdf-685ffba9a332`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_email_exfil.yml`
