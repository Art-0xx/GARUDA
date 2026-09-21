---
type: detection_rule
title: "Suspicious DNS Query Indicating Kerberos Coercion via DNS Object SPN Spoofing"
rule_id: e7a21b5f-d8c4-4ae5-b8d9-93c5d3f28e1c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557.001, attack.t1187]
---

# Suspicious DNS Query Indicating Kerberos Coercion via DNS Object SPN Spoofing

## Description
Detects DNS queries containing patterns associated with Kerberos coercion attacks via DNS object spoofing.
The pattern "1UWhRCAAAAA..BAAAA" is a base64-encoded signature that corresponds to a marshaled CREDENTIAL_TARGET_INFORMATION structure.
Attackers can use this technique to coerce authentication from victim systems to attacker-controlled hosts.
It is one of the strong indicators of a Kerberos coercion attack, where adversaries manipulate DNS records
to spoof Service Principal Names (SPNs) and redirect authentication requests like CVE-2025-33073.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  QueryName|contains|all:
  - UWhRCA
  - BAAAA
```

## MITRE ATT&CK
- T1557.001
- T1187

## False Positives
- Unknown

## References
- https://www.synacktiv.com/publications/ntlm-reflection-is-dead-long-live-ntlm-reflection-an-in-depth-analysis-of-cve-2025
- https://googleprojectzero.blogspot.com/2021/10/using-kerberos-for-authentication-relay.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-06-20
- **Rule ID:** `e7a21b5f-d8c4-4ae5-b8d9-93c5d3f28e1c`
- **Source file:** `windows/dns_query/dns_query_win_kerberos_coercion_via_dns_object_spoofing.yml`
