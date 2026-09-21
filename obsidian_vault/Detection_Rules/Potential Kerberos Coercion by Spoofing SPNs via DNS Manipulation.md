---
type: detection_rule
title: "Potential Kerberos Coercion by Spoofing SPNs via DNS Manipulation"
rule_id: b07e58cf-cacc-4135-8473-ccb2eba63dd2
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557.003]
---

# Potential Kerberos Coercion by Spoofing SPNs via DNS Manipulation

## Description
Detects modifications to DNS records in Active Directory where the Distinguished Name (DN) contains a base64-encoded blob
matching the pattern "1UWhRCAAAAA...BAAAA". This pattern corresponds to a marshaled CREDENTIAL_TARGET_INFORMATION structure,
commonly used in Kerberos coercion attacks. Adversaries may exploit this to coerce victim systems into authenticating to
attacker-controlled hosts by spoofing SPNs via DNS. It is one of the strong indicators of a Kerberos coercion attack,.
where adversaries manipulate DNS records to spoof Service Principal Names (SPNs) and redirect authentication requests like CVE-2025-33073.
Please investigate the user account that made the changes, as it is likely a low-privileged account that has been compromised.

## Log Source
```yaml
definition: 'By default these events are not logged by default for MicrosoftDNS objects
  in Active Directory.

  To enable detection, configure an AuditRule on the DNS object container with the
  "CreateChild" permission for the "Everyone" principal.

  This can be accomplished using tools such as Set-AuditRule (see https://github.com/OTRF/Set-AuditRule).

  '
product: windows
service: security
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_directory_service_access:
  AdditionalInfo|contains|all:
  - UWhRCA
  - BAAAA
  - CN=MicrosoftDNS
  EventID: 4662
selection_directory_service_changes:
  EventID:
  - 5136
  - 5137
  ObjectClass: dnsNode
  ObjectDN|contains|all:
  - UWhRCA
  - BAAAA
  - CN=MicrosoftDNS
```

## MITRE ATT&CK
- T1557.003

## False Positives
- Unknown

## References
- https://googleprojectzero.blogspot.com/2021/10/using-kerberos-for-authentication-relay.html
- https://www.synacktiv.com/publications/ntlm-reflection-is-dead-long-live-ntlm-reflection-an-in-depth-analysis-of-cve-2025

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-06-20
- **Rule ID:** `b07e58cf-cacc-4135-8473-ccb2eba63dd2`
- **Source file:** `windows/builtin/security/win_security_kerberos_coercion_via_dns_object.yml`
