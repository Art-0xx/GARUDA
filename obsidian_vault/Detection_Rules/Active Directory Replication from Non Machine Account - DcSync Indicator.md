---
type: detection_rule
title: "Active Directory Replication from Non Machine Account - DcSync Indicator"
rule_id: 17d619c1-e020-4347-957e-1d1207455c93
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.006]
---

# Active Directory Replication from Non Machine Account - DcSync Indicator

## Description
Detects potential abuse of Active Directory Replication Service (ADRS) from a non machine account to request credentials.

## Log Source
```yaml
definition: "Requirements: A SACL must be configured on the domain NC root object\
  \ (e.g. DC=domain,DC=com)\nto generate Event 4662. Add via ADSI Edit: navigate to\
  \ the domain NC root \u2192 Properties \u2192\nSecurity \u2192 Advanced \u2192 Auditing\
  \ \u2192 add an ACE for Everyone, Type: Success, Applies to:\nThis object only,\
  \ rights: DS-Replication-Get-Changes and DS-Replication-Get-Changes-All.\nThe OS\
  \ audit subcategory must also be enabled:\nauditpol /set /subcategory:\"Directory\
  \ Service Access\" /success:enable\n"
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_machine_accounts:
  SubjectUserName|endswith: $
filter_optional_subject_domain:
  SubjectDomainName: Window Manager
filter_optional_subject_usersid:
  SubjectUserName|startswith:
  - NT AUT
  - MSOL_
selection:
  EventID: 4662
  Properties|contains:
  - 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2
  - 1131f6aa-9c07-11d1-f79f-00c04fc2dcd2
  - 9923a32a-3607-11d2-b9be-0000f87a36b2
  - 89e95b76-444d-4c62-991a-0facbeda640c
```

## MITRE ATT&CK
- T1003.006

## False Positives
- Unknown

## References
- https://threathunterplaybook.com/hunts/windows/180815-ADObjectAccessReplication/notebook.html
- https://threathunterplaybook.com/library/windows/active_directory_replication.html
- https://threathunterplaybook.com/hunts/windows/190101-ADModDirectoryReplication/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-07-26
- **Rule ID:** `17d619c1-e020-4347-957e-1d1207455c93`
- **Source file:** `windows/builtin/security/win_security_ad_replication_non_machine_account.yml`
