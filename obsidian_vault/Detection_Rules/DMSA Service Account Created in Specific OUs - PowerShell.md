---
type: detection_rule
title: "DMSA Service Account Created in Specific OUs - PowerShell"
rule_id: 02122374-b74e-495c-b285-9e4da973f3d6
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078.002, attack.t1098]
---

# DMSA Service Account Created in Specific OUs - PowerShell

## Description
Detects the creation of a dMSA service account using the New-ADServiceAccount cmdlet in certain OUs.
The fact that the cmdlet is used to create a dMSASvc account in a specific OU is highly suspicious.
It is a pattern trying to exploit the BadSuccessor privilege escalation vulnerability in Windows Server 2025.
On top of that, if the user that is creating the dMSASvc account is not a legitimate administrator or does not have the necessary permissions,
it is a strong signal of an attempted or successful abuse of the BaDSuccessor vulnerability for privilege escalation within the Windows Server 2025 Active Directory environment.

## Log Source
```yaml
category: ps_script
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - New-ADServiceAccount
  - -CreateDelegatedServiceAccount
  - -path
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
- **Rule ID:** `02122374-b74e-495c-b285-9e4da973f3d6`
- **Source file:** `windows/powershell/powershell_script/posh_ps_create_new_dmsasvc_account.yml`
