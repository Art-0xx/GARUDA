---
type: detection_rule
title: "New BgInfo.EXE Custom DB Path Registry Configuration"
rule_id: 53330955-dc52-487f-a3a2-da24dcff99b5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# New BgInfo.EXE Custom DB Path Registry Configuration

## Description
Detects setting of a new registry database value related to BgInfo configuration. Attackers can for example set this value to save the results of the commands executed by BgInfo in order to exfiltrate information.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \Software\Winternals\BGInfo\Database
```

## MITRE ATT&CK
- T1112

## False Positives
- Legitimate use of external DB to save the results

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-16
- **Rule ID:** `53330955-dc52-487f-a3a2-da24dcff99b5`
- **Source file:** `windows/registry/registry_set/registry_set_bginfo_custom_db.yml`
