---
type: detection_rule
title: "Suspicious LDAP-Attributes Used"
rule_id: d00a9a72-2c09-4459-ad03-5e0a23351e36
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1001.003]
---

# Suspicious LDAP-Attributes Used

## Description
Detects the usage of particular AttributeLDAPDisplayNames, which are known for data exchange via LDAP by the tool LDAPFragger and are additionally not commonly used in companies.

## Log Source
```yaml
definition: The "Audit Directory Service Changes" logging policy must be configured
  in order to receive events. Audit events are generated only for objects with configured
  system access control lists (SACLs). Audit events are generated only for objects
  with configured system access control lists (SACLs) and only when accessed in a
  manner that matches their SACL settings. This policy covers the following events
  ids - 5136, 5137, 5138, 5139, 5141. Note that the default policy does not cover
  User objects. For that a custom AuditRule need to be setup (See https://github.com/OTRF/Set-AuditRule)
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  AttributeLDAPDisplayName:
  - primaryInternationalISDNNumber
  - otherFacsimileTelephoneNumber
  - primaryTelexNumber
  AttributeValue|contains: '*'
  EventID: 5136
```

## MITRE ATT&CK
- T1001.003

## False Positives
- Companies, who may use these default LDAP-Attributes for personal information

## References
- https://medium.com/@ivecodoe/detecting-ldapfragger-a-newly-released-cobalt-strike-beacon-using-ldap-for-c2-communication-c274a7f00961
- https://blog.fox-it.com/2020/03/19/ldapfragger-command-and-control-over-ldap-attributes/
- https://github.com/fox-it/LDAPFragger

## Metadata
- **Author:** xknow @xknow_infosec
- **Date:** 2019-03-24
- **Rule ID:** `d00a9a72-2c09-4459-ad03-5e0a23351e36`
- **Source file:** `windows/builtin/security/win_security_susp_ldap_dataexchange.yml`
