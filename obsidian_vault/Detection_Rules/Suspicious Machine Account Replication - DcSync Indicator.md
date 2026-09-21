---
type: detection_rule
title: "Suspicious Machine Account Replication - DcSync Indicator"
rule_id: 611eab06-a145-4dfa-a295-3ccc5c20f59a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.006]
---

# Suspicious Machine Account Replication - DcSync Indicator

## Description
Detects suspicious Active Directory Replication Service (ADRS) requests originating from
a machine account (SubjectUserName ending in '$') rather than a legitimate Domain Controller.

Under normal operation, only Domain Controllers initiate replication requests carrying the
DS-Replication-Get-Changes-All right. If a threat actor obtains valid machine account
credentials — for example by abusing certificate-based authentication (PKINIT) to
impersonate a DC after exploiting a CA vulnerability such as CVE-2026-54121 (Certighost),
where a temporary machine account is created to request a DC certificate and then used to
perform DCSync — they can dump all domain credential material including the krbtgt hash.

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
condition: selection and not 1 of filter_main_*
filter_main_subject_usersid:
  SubjectUserSid|startswith: S-1-5-18
selection:
  EventID: 4662
  Properties|contains:
  - 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2
  - 1131f6aa-9c07-11d1-f79f-00c04fc2dcd2
  - 9923a32a-3607-11d2-b9be-0000f87a36b2
  - 89e95b76-444d-4c62-991a-0facbeda640c
  SubjectUserName|endswith: $
```

## MITRE ATT&CK
- T1003.006

## False Positives
- Valid DC Sync that is not covered by the filters; please report

## References
- https://twitter.com/gentilkiwi/status/1003236624925413376
- https://gist.github.com/gentilkiwi/dcc132457408cf11ad2061340dcb53c2
- https://blog.blacklanternsecurity.com/p/detecting-dcsync?s=r
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4662
- https://github.com/aniqfakhrul/CVE-2026-54121

## Metadata
- **Author:** Benjamin Delpy, Florian Roth (Nextron Systems), Scott Dermett, Sorina Ionescu
- **Date:** 2018-06-03
- **Rule ID:** `611eab06-a145-4dfa-a295-3ccc5c20f59a`
- **Source file:** `windows/builtin/security/win_security_ad_replication_machine_account.yml`
