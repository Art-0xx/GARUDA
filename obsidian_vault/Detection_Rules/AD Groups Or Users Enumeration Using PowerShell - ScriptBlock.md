---
type: detection_rule
title: "AD Groups Or Users Enumeration Using PowerShell - ScriptBlock"
rule_id: 88f0884b-331d-403d-a3a1-b668cf035603
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# AD Groups Or Users Enumeration Using PowerShell - ScriptBlock

## Description
Adversaries may attempt to find domain-level groups and permission settings.
The knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group.
Adversaries may use this information to determine which users have elevated permissions, such as domain administrators.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of test_*
test_2:
  ScriptBlockText|contains: get-ADPrincipalGroupMembership
test_7:
  ScriptBlockText|contains|all:
  - get-aduser
  - '-f '
  - '-pr '
  - DoesNotRequirePreAuth
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.002/T1069.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-15
- **Rule ID:** `88f0884b-331d-403d-a3a1-b668cf035603`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_ad_group_reco.yml`
