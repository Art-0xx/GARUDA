---
type: detection_rule
title: "Successful Overpass the Hash Attempt"
rule_id: 192a0330-c20b-4356-90b6-7b7049ae0b87
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1550.002]
---

# Successful Overpass the Hash Attempt

## Description
Detects successful logon with logon type 9 (NewCredentials) which matches the Overpass the Hash behavior of e.g Mimikatz's sekurlsa::pth module.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  AuthenticationPackageName: Negotiate
  EventID: 4624
  LogonProcessName: seclogo
  LogonType: 9
```

## MITRE ATT&CK
- T1550.002

## False Positives
- Runas command-line tool using /netonly parameter

## References
- https://web.archive.org/web/20220419045003/https://cyberwardog.blogspot.com/2017/04/chronicles-of-threat-hunter-hunting-for.html

## Metadata
- **Author:** Roberto Rodriguez (source), Dominik Schaudel (rule)
- **Date:** 2018-02-12
- **Rule ID:** `192a0330-c20b-4356-90b6-7b7049ae0b87`
- **Source file:** `windows/builtin/security/account_management/win_security_overpass_the_hash.yml`
