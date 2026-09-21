---
type: detection_rule
title: "Addition of SID History to Active Directory Object"
rule_id: 2632954e-db1c-49cb-9936-67d1ef1d17d2
platform: windows
level: medium
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.005]
---

# Addition of SID History to Active Directory Object

## Description
An attacker can use the SID history attribute to gain additional privileges.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection1 or (selection2 and not selection3 and not filter_null)
filter_null:
  SidHistory: null
selection1:
  EventID:
  - 4765
  - 4766
selection2:
  EventID: 4738
selection3:
  SidHistory:
  - '-'
  - '%%1793'
```

## MITRE ATT&CK
- T1134.005

## False Positives
- Migration of an account into a new domain

## References
- https://adsecurity.org/?p=1772

## Metadata
- **Author:** Thomas Patzke, @atc_project (improvements)
- **Date:** 2017-02-19
- **Rule ID:** `2632954e-db1c-49cb-9936-67d1ef1d17d2`
- **Source file:** `windows/builtin/security/win_security_susp_add_sid_history.yml`
