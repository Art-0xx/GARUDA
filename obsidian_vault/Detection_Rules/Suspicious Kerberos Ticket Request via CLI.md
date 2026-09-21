---
type: detection_rule
title: "Suspicious Kerberos Ticket Request via CLI"
rule_id: caa9a802-8bd8-4b9e-a5cd-4d6221670219
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558.003]
---

# Suspicious Kerberos Ticket Request via CLI

## Description
Detects suspicious Kerberos ticket requests via command line using System.IdentityModel.Tokens.KerberosRequestorSecurityToken class.
Threat actors may use command line interfaces to request Kerberos tickets for service accounts in order to
perform offline password cracking attacks commonly known as Kerberoasting or other Kerberos ticket abuse
techniques like silver ticket attacks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - System.IdentityModel.Tokens.KerberosRequestorSecurityToken
  - .GetRequest()
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - powershell.exe
  - pwsh.dll
```

## MITRE ATT&CK
- T1558.003

## False Positives
- Legitimate command line usage by administrators or security tools.

## References
- https://www.huntress.com/blog/gootloader-threat-detection-woff2-obfuscation
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1558.003/T1558.003.md#atomic-test-4---request-a-single-ticket-via-powershell
- https://learn.microsoft.com/en-us/dotnet/api/system.identitymodel.tokens.kerberosrequestorsecuritytoken?view=netframework-4.8.1

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-18
- **Rule ID:** `caa9a802-8bd8-4b9e-a5cd-4d6221670219`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_kerberos_kerberos_ticket_request_via_cli.yml`
