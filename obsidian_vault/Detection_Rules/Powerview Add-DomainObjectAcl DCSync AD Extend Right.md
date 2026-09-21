---
type: detection_rule
title: "Powerview Add-DomainObjectAcl DCSync AD Extend Right"
rule_id: 2c99737c-585d-4431-b61a-c911d86ff32f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1098]
---

# Powerview Add-DomainObjectAcl DCSync AD Extend Right

## Description
Backdooring domain object to grant the rights associated with DCSync to a regular user or machine account using Powerview\Add-DomainObjectAcl DCSync Extended Right cmdlet, will allow to re-obtain the pwd hashes of any user/computer

## Log Source
```yaml
definition: 'Requirements: The "Audit Directory Service Changes" logging policy must
  be configured in order to receive events. Audit events are generated only for objects
  with configured system access control lists (SACLs). Audit events are generated
  only for objects with configured system access control lists (SACLs) and only when
  accessed in a manner that matches their SACL settings. This policy covers the following
  events ids - 5136, 5137, 5138, 5139, 5141. Note that the default policy does not
  cover User objects. For that a custom AuditRule need to be setup (See https://github.com/OTRF/Set-AuditRule)'
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_dns_object_class:
  ObjectClass:
  - dnsNode
  - dnsZoneScope
  - dnsZone
selection:
  AttributeLDAPDisplayName: ntSecurityDescriptor
  AttributeValue|contains:
  - 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2
  - 1131f6aa-9c07-11d1-f79f-00c04fc2dcd2
  - 89e95b76-444d-4c62-991a-0facbeda640c
  EventID: 5136
```

## MITRE ATT&CK
- T1098

## False Positives
- New Domain Controller computer account, check user SIDs within the value attribute of event 5136 and verify if it's a regular user or DC computer account.

## References
- https://twitter.com/menasec1/status/1111556090137903104
- https://www.specterops.io/assets/resources/an_ace_up_the_sleeve.pdf

## Metadata
- **Author:** Samir Bousseaden, Roberto Rodriguez @Cyb3rWard0g, oscd.community, Tim Shelton, Maxence Fossat
- **Date:** 2019-04-03
- **Rule ID:** `2c99737c-585d-4431-b61a-c911d86ff32f`
- **Source file:** `windows/builtin/security/win_security_account_backdoor_dcsync_rights.yml`
