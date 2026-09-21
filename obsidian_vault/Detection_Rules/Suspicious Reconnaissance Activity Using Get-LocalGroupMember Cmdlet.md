---
type: detection_rule
title: "Suspicious Reconnaissance Activity Using Get-LocalGroupMember Cmdlet"
rule_id: c8a180d6-47a3-4345-a609-53f9c3d834fc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087.001]
---

# Suspicious Reconnaissance Activity Using Get-LocalGroupMember Cmdlet

## Description
Detects suspicious reconnaissance command line activity on Windows systems using the PowerShell Get-LocalGroupMember Cmdlet

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  CommandLine|contains: 'Get-LocalGroupMember '
selection_group:
  CommandLine|contains:
  - domain admins
  - ' administrator'
  - ' administrateur'
  - enterprise admins
  - Exchange Trusted Subsystem
  - Remote Desktop Users
  - "Utilisateurs du Bureau \xE0 distance"
  - Usuarios de escritorio remoto
```

## MITRE ATT&CK
- T1087.001

## False Positives
- Administrative activity

## References
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-10
- **Rule ID:** `c8a180d6-47a3-4345-a609-53f9c3d834fc`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_get_localgroup_member_recon.yml`
