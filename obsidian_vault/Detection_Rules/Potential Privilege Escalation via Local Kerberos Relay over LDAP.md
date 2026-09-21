---
type: detection_rule
title: "Potential Privilege Escalation via Local Kerberos Relay over LDAP"
rule_id: 749c9f5e-b353-4b90-a9c1-05243357ca4b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548]
---

# Potential Privilege Escalation via Local Kerberos Relay over LDAP

## Description
Detects a suspicious local successful logon event where the Logon Package is Kerberos, the remote address is set to localhost, and the target user SID is the built-in local Administrator account.
This may indicate an attempt to leverage a Kerberos relay attack variant that can be used to elevate privilege locally from a domain joined limited user to local System privileges.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_ip_null:
  IpPort: '0'
selection:
  AuthenticationPackageName: Kerberos
  EventID: 4624
  IpAddress: 127.0.0.1
  LogonType: 3
  TargetUserSid|endswith: '-500'
  TargetUserSid|startswith: S-1-5-21-
```

## MITRE ATT&CK
- T1548

## False Positives
- Unknown

## References
- https://twitter.com/sbousseaden/status/1518976397364056071?s=12&t=qKO5eKHvWhAP19a50FTZ7g
- https://github.com/elastic/detection-rules/blob/5fe7833312031a4787e07893e27e4ea7a7665745/rules/_deprecated/privilege_escalation_krbrelayup_suspicious_logon.toml#L38

## Metadata
- **Author:** Elastic, @SBousseaden
- **Date:** 2022-04-27
- **Rule ID:** `749c9f5e-b353-4b90-a9c1-05243357ca4b`
- **Source file:** `windows/builtin/security/account_management/win_security_susp_privesc_kerberos_relay_over_ldap.yml`
