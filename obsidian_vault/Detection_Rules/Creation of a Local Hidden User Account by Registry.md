---
type: detection_rule
title: "Creation of a Local Hidden User Account by Registry"
rule_id: 460479f3-80b7-42da-9c43-2cc1d54dbccd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1136.001]
---

# Creation of a Local Hidden User Account by Registry

## Description
Sysmon registry detection of a local hidden user account.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \lsass.exe
  TargetObject|contains: \SAM\SAM\Domains\Account\Users\Names\
  TargetObject|endswith: $\(Default)
```

## MITRE ATT&CK
- T1136.001

## False Positives
- Unknown

## References
- https://twitter.com/SBousseaden/status/1387530414185664538

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-05-03
- **Rule ID:** `460479f3-80b7-42da-9c43-2cc1d54dbccd`
- **Source file:** `windows/registry/registry_event/registry_event_add_local_hidden_user.yml`
