---
type: detection_rule
title: "Potential AS-REP Roasting via Kerberos TGT Requests"
rule_id: 3e2f1b2c-4d5e-11ee-be56-0242ac120002
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
---

# Potential AS-REP Roasting via Kerberos TGT Requests

## Description
Detects suspicious Kerberos TGT requests with pre-authentication disabled (Pre-Authentication Type = 0) and Ticket Encryption Type (0x17) i.e, RC4-HMAC.
This may indicate an AS-REP Roasting attack, where attackers request AS-REP messages for accounts without pre-authentication and attempt to crack the encrypted ticket offline to recover user passwords.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4768
  PreAuthType: 0
  ServiceName: krbtgt
  TicketEncryptionType: '0x17'
```

## False Positives
- Legacy systems or applications that legitimately use RC4 encryption
- Misconfigured accounts with pre-authentication disabled

## References
- https://medium.com/system-weakness/detecting-as-rep-roasting-attacks-b5b3965f9714
- https://www.picussecurity.com/resource/blog/as-rep-roasting-attack-explained-mitre-attack-t1558.004

## Metadata
- **Author:** ANosir
- **Date:** 2025-05-22
- **Rule ID:** `3e2f1b2c-4d5e-11ee-be56-0242ac120002`
- **Source file:** `windows/builtin/security/win_security_kerberos_asrep_roasting.yml`
