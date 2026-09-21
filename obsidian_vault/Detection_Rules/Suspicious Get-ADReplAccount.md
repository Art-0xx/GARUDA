---
type: detection_rule
title: "Suspicious Get-ADReplAccount"
rule_id: 060c3ef1-fd0a-4091-bf46-e7d625f60b73
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.006]
---

# Suspicious Get-ADReplAccount

## Description
The DSInternals PowerShell Module exposes several internal features of Active Directory and Azure Active Directory.
These include FIDO2 and NGC key auditing, offline ntds.dit file manipulation, password auditing, DC recovery from IFM backups and password hash calculation.

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
  ScriptBlockText|contains|all:
  - Get-ADReplAccount
  - '-All '
  - '-Server '
```

## MITRE ATT&CK
- T1003.006

## False Positives
- Legitimate PowerShell scripts

## References
- https://www.powershellgallery.com/packages/DSInternals
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003.006/T1003.006.md#atomic-test-2---run-dsinternals-get-adreplaccount

## Metadata
- **Author:** frack113
- **Date:** 2022-02-06
- **Rule ID:** `060c3ef1-fd0a-4091-bf46-e7d625f60b73`
- **Source file:** `windows/powershell/powershell_script/posh_ps_get_adreplaccount.yml`
