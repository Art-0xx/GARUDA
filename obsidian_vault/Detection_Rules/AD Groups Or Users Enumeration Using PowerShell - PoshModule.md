---
type: detection_rule
title: "AD Groups Or Users Enumeration Using PowerShell - PoshModule"
rule_id: 815bfc17-7fc6-4908-a55e-2f37b98cedb4
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# AD Groups Or Users Enumeration Using PowerShell - PoshModule

## Description
Adversaries may attempt to find domain-level groups and permission settings.
The knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group.
Adversaries may use this information to determine which users have elevated permissions, such as domain administrators.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_ad_principal:
- Payload|contains: get-ADPrincipalGroupMembership
- ContextInfo|contains: get-ADPrincipalGroupMembership
selection_get_aduser:
- Payload|contains|all:
  - get-aduser
  - '-f '
  - '-pr '
  - DoesNotRequirePreAuth
- ContextInfo|contains|all:
  - get-aduser
  - '-f '
  - '-pr '
  - DoesNotRequirePreAuth
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Administrator script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.002/T1069.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-15
- **Rule ID:** `815bfc17-7fc6-4908-a55e-2f37b98cedb4`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_ad_group_reco.yml`
