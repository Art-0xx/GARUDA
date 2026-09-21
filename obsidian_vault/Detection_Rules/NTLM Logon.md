---
type: detection_rule
title: "NTLM Logon"
rule_id: 98c3bcf1-56f2-49dc-9d8d-c66cf190238b
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1550.002]
---

# NTLM Logon

## Description
Detects logons using NTLM, which could be caused by a legacy source or attackers

## Log Source
```yaml
definition: Requires events from Microsoft-Windows-NTLM/Operational
product: windows
service: ntlm
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 8002
```

## MITRE ATT&CK
- T1550.002

## False Positives
- Legacy hosts

## References
- https://twitter.com/JohnLaTwC/status/1004895028995477505

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-06-08
- **Rule ID:** `98c3bcf1-56f2-49dc-9d8d-c66cf190238b`
- **Source file:** `windows/builtin/ntlm/win_susp_ntlm_auth.yml`
