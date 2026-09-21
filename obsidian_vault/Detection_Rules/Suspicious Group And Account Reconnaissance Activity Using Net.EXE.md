---
type: detection_rule
title: "Suspicious Group And Account Reconnaissance Activity Using Net.EXE"
rule_id: d95de845-b83c-4a9a-8a6a-4fc802ebf6c0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087.001, attack.t1087.002]
---

# Suspicious Group And Account Reconnaissance Activity Using Net.EXE

## Description
Detects suspicious reconnaissance command line activity on Windows systems using Net.EXE
Check if the user that executed the commands is suspicious (e.g. service accounts, LOCAL_SYSTEM)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and ((all of selection_group_* and not filter_group_add)
  or all of selection_accounts_*)
filter_group_add:
  CommandLine|contains: ' /add'
selection_accounts_flags:
  CommandLine|contains: ' /do'
selection_accounts_root:
  CommandLine|contains: ' accounts '
selection_group_flags:
  CommandLine|contains:
  - domain admins
  - ' administrator'
  - ' administrateur'
  - enterprise admins
  - Exchange Trusted Subsystem
  - Remote Desktop Users
  - "Utilisateurs du Bureau \xE0 distance"
  - Usuarios de escritorio remoto
  - ' /do'
selection_group_root:
  CommandLine|contains:
  - ' group '
  - ' localgroup '
selection_img:
- Image|endswith:
  - \net.exe
  - \net1.exe
- OriginalFileName:
  - net.exe
  - net1.exe
```

## MITRE ATT&CK
- T1087.001
- T1087.002

## False Positives
- Inventory tool runs
- Administrative activity

## References
- https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/
- https://thedfirreport.com/2020/10/18/ryuk-in-5-hours/
- https://research.nccgroup.com/2022/08/19/back-in-black-unlocking-a-lockbit-3-0-ransomware-attack/

## Metadata
- **Author:** Florian Roth (Nextron Systems), omkar72, @svch0st, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-01-16
- **Rule ID:** `d95de845-b83c-4a9a-8a6a-4fc802ebf6c0`
- **Source file:** `windows/process_creation/proc_creation_win_net_groups_and_accounts_recon.yml`
