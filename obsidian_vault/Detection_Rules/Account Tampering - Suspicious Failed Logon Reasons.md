---
type: detection_rule
title: "Account Tampering - Suspicious Failed Logon Reasons"
rule_id: 9eb99343-d336-4020-a3cd-67f3819e68ee
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078]
---

# Account Tampering - Suspicious Failed Logon Reasons

## Description
This method uses uncommon error codes on failed logons to determine suspicious activity and tampering with accounts that have been disabled or somehow restricted.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: all of selection_* and not filter
filter:
  SubjectUserSid: S-1-0-0
selection_eid:
  EventID:
  - 4625
  - 4776
selection_status:
- Status:
  - '0xC0000072'
  - '0xC000006F'
  - '0xC0000070'
  - '0xC0000413'
  - '0xC000018C'
  - '0xC000015B'
- SubStatus:
  - '0xC0000072'
  - '0xC000006F'
  - '0xC0000070'
  - '0xC0000413'
  - '0xC000018C'
  - '0xC000015B'
```

## MITRE ATT&CK
- T1078

## False Positives
- User using a disabled account

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4625
- https://twitter.com/SBousseaden/status/1101431884540710913

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-02-19
- **Rule ID:** `9eb99343-d336-4020-a3cd-67f3819e68ee`
- **Source file:** `windows/builtin/security/win_security_susp_failed_logon_reasons.yml`
