---
type: detection_rule
title: "Suspicious Windows ANONYMOUS LOGON Local Account Created"
rule_id: 1bbf25b9-8038-4154-a50b-118f2a32be27
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1136.001, attack.t1136.002]
---

# Suspicious Windows ANONYMOUS LOGON Local Account Created

## Description
Detects the creation of suspicious accounts similar to ANONYMOUS LOGON, such as using additional spaces. Created as an covering detection for exclusion of Logon Type 3 from ANONYMOUS LOGON accounts.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4720
  SamAccountName|contains|all:
  - ANONYMOUS
  - LOGON
```

## MITRE ATT&CK
- T1136.001
- T1136.002

## False Positives
- Unknown

## References
- https://twitter.com/SBousseaden/status/1189469425482829824

## Metadata
- **Author:** James Pemberton / @4A616D6573
- **Date:** 2019-10-31
- **Rule ID:** `1bbf25b9-8038-4154-a50b-118f2a32be27`
- **Source file:** `windows/builtin/security/win_security_susp_local_anon_logon_created.yml`
