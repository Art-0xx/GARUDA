---
type: detection_rule
title: "Suspicious Access to Sensitive File Extensions"
rule_id: 91c945bc-2ad1-4799-a591-4d00198a1215
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1039]
---

# Suspicious Access to Sensitive File Extensions

## Description
Detects known sensitive file extensions accessed on a network share

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 5145
  RelativeTargetName|endswith:
  - .bak
  - .dmp
  - .edb
  - .kirbi
  - .msg
  - .nsf
  - .nst
  - .oab
  - .ost
  - .pst
  - .rdp
```

## MITRE ATT&CK
- T1039

## False Positives
- Help Desk operator doing backup or re-imaging end user machine or backup software
- Users working with these data types or exchanging message files

## References
- Internal Research

## Metadata
- **Author:** Samir Bousseaden
- **Date:** 2019-04-03
- **Rule ID:** `91c945bc-2ad1-4799-a591-4d00198a1215`
- **Source file:** `windows/builtin/security/win_security_susp_raccess_sensitive_fext.yml`
