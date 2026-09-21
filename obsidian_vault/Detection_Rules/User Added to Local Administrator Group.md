---
type: detection_rule
title: "User Added to Local Administrator Group"
rule_id: c265cf08-3f99-46c1-8d59-328247057d57
platform: windows
level: medium
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078, attack.t1098]
---

# User Added to Local Administrator Group

## Description
Detects the addition of a new member to the local administrator group, which could be legitimate activity or a sign of privilege escalation activity

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_main_computer_accounts:
  SubjectUserName|endswith: $
selection_eid:
  EventID: 4732
selection_group:
- TargetUserName|startswith: Administr
- TargetSid: S-1-5-32-544
```

## MITRE ATT&CK
- T1078
- T1098

## False Positives
- Legitimate administrative activity

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4732
- https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-identifiers

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-14
- **Rule ID:** `c265cf08-3f99-46c1-8d59-328247057d57`
- **Source file:** `windows/builtin/security/win_security_user_added_to_local_administrators.yml`
