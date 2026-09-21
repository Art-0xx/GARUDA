---
type: detection_rule
title: "Lsass Full Dump Request Via DumpType Registry Settings"
rule_id: 33efc23c-6ea2-4503-8cfe-bdf82ce8f719
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Lsass Full Dump Request Via DumpType Registry Settings

## Description
Detects the setting of the "DumpType" registry value to "2" which stands for a "Full Dump". Technique such as LSASS Shtinkering requires this value to be "2" in order to dump LSASS.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000002)
  TargetObject|contains:
  - \SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\DumpType
  - \SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\lsass.exe\DumpType
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Legitimate application that needs to do a full dump of their process

## References
- https://github.com/deepinstinct/Lsass-Shtinkering
- https://learn.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps
- https://media.defcon.org/DEF%20CON%2030/DEF%20CON%2030%20presentations/Asaf%20Gilboa%20-%20LSASS%20Shtinkering%20Abusing%20Windows%20Error%20Reporting%20to%20Dump%20LSASS.pdf

## Metadata
- **Author:** @pbssubhash
- **Date:** 2022-12-08
- **Rule ID:** `33efc23c-6ea2-4503-8cfe-bdf82ce8f719`
- **Source file:** `windows/registry/registry_set/registry_set_lsass_usermode_dumping.yml`
