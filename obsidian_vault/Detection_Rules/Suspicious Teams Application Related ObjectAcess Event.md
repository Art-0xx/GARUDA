---
type: detection_rule
title: "Suspicious Teams Application Related ObjectAcess Event"
rule_id: 25cde13e-8e20-4c29-b949-4e795b76f16f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1528]
---

# Suspicious Teams Application Related ObjectAcess Event

## Description
Detects an access to authentication tokens and accounts of Microsoft Teams desktop application.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ProcessName|contains: \Microsoft\Teams\current\Teams.exe
selection:
  EventID: 4663
  ObjectName|contains:
  - \Microsoft\Teams\Cookies
  - \Microsoft\Teams\Local Storage\leveldb
```

## MITRE ATT&CK
- T1528

## False Positives
- Unknown

## References
- https://www.bleepingcomputer.com/news/security/microsoft-teams-stores-auth-tokens-as-cleartext-in-windows-linux-macs/
- https://www.vectra.ai/blogpost/undermining-microsoft-teams-security-by-mining-tokens

## Metadata
- **Author:** @SerkinValery
- **Date:** 2022-09-16
- **Rule ID:** `25cde13e-8e20-4c29-b949-4e795b76f16f`
- **Source file:** `windows/builtin/security/win_security_teams_suspicious_objectaccess.yml`
