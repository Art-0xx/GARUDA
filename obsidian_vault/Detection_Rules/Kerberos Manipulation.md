---
type: detection_rule
title: "Kerberos Manipulation"
rule_id: f7644214-0eb0-4ace-9455-331ec4c09253
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1212]
---

# Kerberos Manipulation

## Description
Detects failed Kerberos TGT issue operation. This can be a sign of manipulations of TGT messages by an attacker.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID:
  - 675
  - 4768
  - 4769
  - 4771
  Status:
  - '0x9'
  - '0xA'
  - '0xB'
  - '0xF'
  - '0x10'
  - '0x11'
  - '0x13'
  - '0x14'
  - '0x1A'
  - '0x1F'
  - '0x21'
  - '0x22'
  - '0x23'
  - '0x24'
  - '0x26'
  - '0x27'
  - '0x28'
  - '0x29'
  - '0x2C'
  - '0x2D'
  - '0x2E'
  - '0x2F'
  - '0x31'
  - '0x32'
  - '0x3E'
  - '0x3F'
  - '0x40'
  - '0x41'
  - '0x43'
  - '0x44'
```

## MITRE ATT&CK
- T1212

## False Positives
- Faulty legacy applications

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4771

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-02-10
- **Rule ID:** `f7644214-0eb0-4ace-9455-331ec4c09253`
- **Source file:** `windows/builtin/security/win_security_susp_kerberos_manipulation.yml`
