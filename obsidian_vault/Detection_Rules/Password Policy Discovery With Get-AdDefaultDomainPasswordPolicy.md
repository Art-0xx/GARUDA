---
type: detection_rule
title: "Password Policy Discovery With Get-AdDefaultDomainPasswordPolicy"
rule_id: bbb9495b-58fc-4016-b9df-9a3a1b67ca82
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1201]
---

# Password Policy Discovery With Get-AdDefaultDomainPasswordPolicy

## Description
Detetcts PowerShell activity in which Get-Addefaultdomainpasswordpolicy is used to get the default password policy for an Active Directory domain.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains: Get-AdDefaultDomainPasswordPolicy
```

## MITRE ATT&CK
- T1201

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1201/T1201.md#atomic-test-9---enumerate-active-directory-password-policy-with-get-addefaultdomainpasswordpolicy
- https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-addefaultdomainpasswordpolicy?view=windowsserver2022-ps

## Metadata
- **Author:** frack113
- **Date:** 2022-03-17
- **Rule ID:** `bbb9495b-58fc-4016-b9df-9a3a1b67ca82`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_get_addefaultdomainpasswordpolicy.yml`
