---
type: detection_rule
title: "Kerberos Network Traffic RC4 Ticket Encryption"
rule_id: 503fe26e-b5f2-4944-a126-eab405cc06e5
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1558.003]
---

# Kerberos Network Traffic RC4 Ticket Encryption

## Description
Detects kerberos TGS request using RC4 encryption which may be indicative of kerberoasting

## Log Source
```yaml
product: zeek
service: kerberos
```

## Detection Logic
```yaml
computer_acct:
  service|startswith: $
condition: selection and not computer_acct
selection:
  cipher: rc4-hmac
  request_type: TGS
```

## MITRE ATT&CK
- T1558.003

## False Positives
- Normal enterprise SPN requests activity

## References
- https://adsecurity.org/?p=3458

## Metadata
- **Author:** sigma
- **Date:** 2020-02-12
- **Rule ID:** `503fe26e-b5f2-4944-a126-eab405cc06e5`
- **Source file:** `network/zeek/zeek_susp_kerberos_rc4.yml`
