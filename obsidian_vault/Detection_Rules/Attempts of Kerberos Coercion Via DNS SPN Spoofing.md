---
type: detection_rule
title: "Attempts of Kerberos Coercion Via DNS SPN Spoofing"
rule_id: 0ed99dda-6a35-11ef-8c99-0242ac120002
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557.001, attack.t1187]
---

# Attempts of Kerberos Coercion Via DNS SPN Spoofing

## Description
Detects the presence of "UWhRC....AAYBAAAA" pattern in command line.
The pattern "1UWhRCAAAAA..BAAAA" is a base64-encoded signature that corresponds to a marshaled CREDENTIAL_TARGET_INFORMATION structure.
Attackers can use this technique to coerce authentication from victim systems to attacker-controlled hosts.
It is one of the strong indicators of a Kerberos coercion attack, where adversaries manipulate DNS records
to spoof Service Principal Names (SPNs) and redirect authentication requests like in CVE-2025-33073.
If you see this pattern in the command line, it is likely an attempt to add spoofed Service Principal Names (SPNs) to DNS records,
or checking for the presence of such records through the `nslookup` command.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
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
- **Rule ID:** `0ed99dda-6a35-11ef-8c99-0242ac120002`
- **Source file:** `windows/process_creation/proc_creation_win_kerberos_coercion_via_dns_spn_spoofing.yml`
