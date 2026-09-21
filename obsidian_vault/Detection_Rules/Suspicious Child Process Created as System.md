---
type: detection_rule
title: "Suspicious Child Process Created as System"
rule_id: 590a5f4c-6c8c-4f10-8307-89afe9453a9d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.002]
---

# Suspicious Child Process Created as System

## Description
Detection of child processes spawned with SYSTEM privileges by parents with LOCAL SERVICE or NETWORK SERVICE accounts

## Log Source
```yaml
category: process_creation
definition: 'Requirements: ParentUser field needs sysmon >= 13.30'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_rundll32:
  CommandLine|contains: DavSetCookie
  Image|endswith: \rundll32.exe
selection:
  IntegrityLevel:
  - System
  - S-1-16-16384
  ParentUser|contains:
  - AUTHORI
  - AUTORI
  ParentUser|endswith:
  - \NETWORK SERVICE
  - \LOCAL SERVICE
  User|contains:
  - AUTHORI
  - AUTORI
  User|endswith:
  - \SYSTEM
  - "\\Syst\xE8me"
  - "\\\u0421\u0418\u0421\u0422\u0415\u041C\u0410"
```

## MITRE ATT&CK
- T1134.002

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-privilege-escalation-in-windows-environment
- https://foxglovesecurity.com/2016/09/26/rotten-potato-privilege-escalation-from-service-accounts-to-system/
- https://github.com/antonioCoco/RogueWinRM
- https://twitter.com/Cyb3rWard0g/status/1453123054243024897

## Metadata
- **Author:** Teymur Kheirkhabarov, Roberto Rodriguez (@Cyb3rWard0g), Open Threat Research (OTR)
- **Date:** 2019-10-26
- **Rule ID:** `590a5f4c-6c8c-4f10-8307-89afe9453a9d`
- **Source file:** `windows/process_creation/proc_creation_win_susp_child_process_as_system_.yml`
