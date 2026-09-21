---
type: detection_rule
title: "New or Renamed User Account with '$' Character"
rule_id: cfeed607-6aa4-4bbd-9627-b637deb723c8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# New or Renamed User Account with '$' Character

## Description
Detects the creation of a user with the "$" character. This can be used by attackers to hide a user or trick detection systems that lack the parsing mechanisms.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_main_*
filter_main_homegroup:
  EventID: 4720
  TargetUserName: HomeGroupUser$
selection_create:
  EventID: 4720
  SamAccountName|contains: $
selection_rename:
  EventID: 4781
  NewTargetUserName|contains: $
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://twitter.com/SBousseaden/status/1387743867663958021

## Metadata
- **Author:** Ilyas Ochkov, oscd.community
- **Date:** 2019-10-25
- **Rule ID:** `cfeed607-6aa4-4bbd-9627-b637deb723c8`
- **Source file:** `windows/builtin/security/win_security_new_or_renamed_user_account_with_dollar_sign.yml`
