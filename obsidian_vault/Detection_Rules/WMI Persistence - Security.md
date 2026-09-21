---
type: detection_rule
title: "WMI Persistence - Security"
rule_id: f033f3f3-fd24-4995-97d8-a3bb17550a88
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# WMI Persistence - Security

## Description
Detects suspicious WMI event filter and command line event consumer based on WMI and Security Logs.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4662
  ObjectName|contains: subscription
  ObjectType: WMI Namespace
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Unknown (data set is too small; further testing needed)

## References
- https://twitter.com/mattifestation/status/899646620148539397
- https://www.eideon.com/2018-03-02-THL03-WMIBackdoors/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Gleb Sukhodolskiy, Timur Zinniatullin oscd.community
- **Date:** 2017-08-22
- **Rule ID:** `f033f3f3-fd24-4995-97d8-a3bb17550a88`
- **Source file:** `windows/builtin/security/win_security_wmi_persistence.yml`
