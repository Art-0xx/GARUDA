---
type: detection_rule
title: "Registry Enumeration via WMI Stdregprov"
rule_id: a0e417e2-2fa1-40da-b6d2-e094cd5e1191
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1012]
---

# Registry Enumeration via WMI Stdregprov

## Description
Detects the usage of wmic.exe to enumerate or read Windows registry via the WMI StdRegProv class read methods (EnumKey, EnumValues, GetStringValue, etc.).
While registry reads are common, attackers may use this technique to perform reconnaissance and discover sensitive configuration values, credentials, or installed software.
The use of WMI as an alternative to standard tools like reg.exe can indicate an attempt to evade detection focused on traditional registry query commands.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - CheckAccess
  - EnumKey
  - EnumValues
  - GetBinaryValue
  - GetDWORDValue
  - GetExpandedStringValue
  - GetMultiStringValue
  - GetQWORDValue
  - GetSecurityDescriptor
  - GetStringValue
  CommandLine|contains|all:
  - stdregprov
  - call
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047
- T1012

## False Positives
- Legitimate administrative activity

## References
- https://trustedsec.com/blog/command-line-underdog-wmic-in-action
- https://trustedsec.com/blog/wmi-for-script-kiddies
- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/regprov/stdregprov

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-30
- **Rule ID:** `a0e417e2-2fa1-40da-b6d2-e094cd5e1191`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_stdregprov_reg_enumeration.yml`
