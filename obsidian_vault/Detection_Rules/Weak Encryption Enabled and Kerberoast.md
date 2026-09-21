---
type: detection_rule
title: "Weak Encryption Enabled and Kerberoast"
rule_id: f6de9536-0441-4b3f-a646-f4e00f300ffd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Weak Encryption Enabled and Kerberoast

## Description
Detects scenario where weak encryption is enabled for a user profile which could be used for hash/password cracking.

## Log Source
```yaml
definition: 'Requirements: Audit Policy : Account Management > Audit User Account
  Management, Group Policy : Computer Configuration\Windows Settings\Security Settings\Advanced
  Audit Policy Configuration\Audit Policies\Account Management\Audit User Account
  Management'
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and ((newuac_des and not olduac_des) or (newuac_preauth and not
  olduac_preauth) or (newuac_encrypted and not olduac_encrypted))
newuac_des:
  NewUacValue|endswith:
  - 8???
  - 9???
  - A???
  - B???
  - C???
  - D???
  - E???
  - F???
newuac_encrypted:
  NewUacValue|endswith:
  - 8??
  - 9??
  - A??
  - B??
  - C??
  - D??
  - E??
  - F??
newuac_preauth:
  NewUacValue|endswith:
  - 1????
  - 3????
  - 5????
  - 7????
  - 9????
  - B????
  - D????
  - F????
olduac_des:
  OldUacValue|endswith:
  - 8???
  - 9???
  - A???
  - B???
  - C???
  - D???
  - E???
  - F???
olduac_encrypted:
  OldUacValue|endswith:
  - 8??
  - 9??
  - A??
  - B??
  - C??
  - D??
  - E??
  - F??
olduac_preauth:
  OldUacValue|endswith:
  - 1????
  - 3????
  - 5????
  - 7????
  - 9????
  - B????
  - D????
  - F????
selection:
  EventID: 4738
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://adsecurity.org/?p=2053
- https://blog.harmj0y.net/redteaming/another-word-on-delegation/

## Metadata
- **Author:** @neu5ron
- **Date:** 2017-07-30
- **Rule ID:** `f6de9536-0441-4b3f-a646-f4e00f300ffd`
- **Source file:** `windows/builtin/security/win_security_alert_enable_weak_encryption.yml`
