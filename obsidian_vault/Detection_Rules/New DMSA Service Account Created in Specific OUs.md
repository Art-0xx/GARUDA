---
type: detection_rule
title: "New DMSA Service Account Created in Specific OUs"
rule_id: 0ea8db81-2ff6-4525-9448-33bbe7effc13
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078.002, attack.t1098]
---

# New DMSA Service Account Created in Specific OUs

## Description
Detects the creation of a dMSASvc account using the New-ADServiceAccount cmdlet in certain OUs.
The fact that the Cmdlet is used to create a dMSASvc account in a specific OU is highly suspicious.
It is a pattern trying to exploit the BadSuccessor privilege escalation vulnerability in Windows Server 2025.
On top of that, if the user that is creating the dMSASvc account is not a legitimate administrator or does not have the necessary permissions,
it is a strong signal of an attempted or successful abuse of the BaDSuccessor vulnerability for privilege escalation within the Windows Server 2025 Active Directory environment.

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
  - New-ADServiceAccount
  - -CreateDelegatedServiceAccount
  - -path
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \powershell_ise.exe
- OriginalFileName:
  - powershell.exe
  - pwsh.dll
  - powershell_ise.exe
```

## MITRE ATT&CK
- T1078.002
- T1098

## False Positives
- Unknown

## References
- https://www.akamai.com/blog/security-research/abusing-bad-successor-for-privilege-escalation-in-active-directory

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-05-24
- **Rule ID:** `0ea8db81-2ff6-4525-9448-33bbe7effc13`
- **Source file:** `windows/process_creation/proc_creation_win_create_new_dmsasvc_account.yml`
