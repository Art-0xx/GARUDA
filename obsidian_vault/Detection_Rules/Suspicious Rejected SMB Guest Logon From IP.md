---
type: detection_rule
title: "Suspicious Rejected SMB Guest Logon From IP"
rule_id: 71886b70-d7b4-4dbf-acce-87d2ca135262
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1110.001]
---

# Suspicious Rejected SMB Guest Logon From IP

## Description
Detect Attempt PrintNightmare (CVE-2021-1675) Remote code execution in Windows Spooler Service

## Log Source
```yaml
product: windows
service: smbclient-security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 31017
  ServerName|startswith: \1
  UserName: ''
```

## MITRE ATT&CK
- T1110.001

## False Positives
- Account fallback reasons (after failed login with specific account)

## References
- https://twitter.com/KevTheHermit/status/1410203844064301056
- https://web.archive.org/web/20210629055600/https://github.com/hhlxf/PrintNightmare/
- https://web.archive.org/web/20210701042336/https://github.com/afwu/PrintNightmare

## Metadata
- **Author:** Florian Roth (Nextron Systems), KevTheHermit, fuzzyf10w
- **Date:** 2021-06-30
- **Rule ID:** `71886b70-d7b4-4dbf-acce-87d2ca135262`
- **Source file:** `windows/builtin/smbclient/security/win_smbclient_security_susp_failed_guest_logon.yml`
