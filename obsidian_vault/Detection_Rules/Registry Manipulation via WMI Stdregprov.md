---
type: detection_rule
title: "Registry Manipulation via WMI Stdregprov"
rule_id: c453ab7a-1f5c-4716-a3b4-dea8135fb43a
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1112]
---

# Registry Manipulation via WMI Stdregprov

## Description
Detects the usage of wmic.exe to modify Windows registry via the WMI StdRegProv class write methods (CreateKey, DeleteKey, SetStringValue, etc.).
This behaviour could be potentially suspicious because it uses an alternative method to modify registry keys instead of legitimate registry tools like reg.exe or regedit.exe.
Attackers specifically choose this technique to evade detection and bypass security monitoring focused on traditional registry modification commands.

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
  - CreateKey
  - DeleteKey
  - DeleteValue
  - SetBinaryValue
  - SetDWORDValue
  - SetExpandedStringValue
  - SetMultiStringValue
  - SetQWORDValue
  - SetSecurityDescriptor
  - SetStringValue
  CommandLine|contains|all:
  - stdregprov
  - call
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047
- T1112

## False Positives
- Legitimate administrative activity

## References
- https://www.bitdefender.com/en-us/blog/businessinsights/shrinklocker-decryptor-from-friend-to-foe-and-back-again
- https://trustedsec.com/blog/command-line-underdog-wmic-in-action
- https://trustedsec.com/blog/wmi-for-script-kiddies
- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/regprov/stdregprov

## Metadata
- **Author:** Daniel Koifman (KoifSec)
- **Date:** 2025-07-30
- **Rule ID:** `c453ab7a-1f5c-4716-a3b4-dea8135fb43a`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_stdregprov_reg_modification.yml`
