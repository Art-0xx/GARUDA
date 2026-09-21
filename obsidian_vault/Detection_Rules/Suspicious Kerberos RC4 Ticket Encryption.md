---
type: detection_rule
title: "Suspicious Kerberos RC4 Ticket Encryption"
rule_id: 496a0e47-0a33-4dca-b009-9e6ca3591f39
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558.003]
---

# Suspicious Kerberos RC4 Ticket Encryption

## Description
Detects service ticket requests using RC4 encryption type

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not reduction
reduction:
  ServiceName|endswith: $
selection:
  EventID: 4769
  TicketEncryptionType: '0x17'
  TicketOptions: '0x40810000'
```

## MITRE ATT&CK
- T1558.003

## False Positives
- Service accounts used on legacy systems (e.g. NetApp)
- Windows Domains with DFL 2003 and legacy systems

## References
- https://adsecurity.org/?p=3458
- https://www.trimarcsecurity.com/single-post/TrimarcResearch/Detecting-Kerberoasting-Activity

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-02-06
- **Rule ID:** `496a0e47-0a33-4dca-b009-9e6ca3591f39`
- **Source file:** `windows/builtin/security/win_security_susp_rc4_kerberos.yml`
