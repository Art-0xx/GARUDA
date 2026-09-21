---
type: detection_rule
title: "UAC Bypass Using MSConfig Token Modification - File"
rule_id: 41bb431f-56d8-4691-bb56-ed34e390906f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using MSConfig Token Modification - File

## Description
Detects the pattern of UAC Bypass using a msconfig GUI hack (UACMe 55)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \AppData\Local\Temp\pkgmgr.exe
  TargetFilename|startswith: C:\Users\
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-30
- **Rule ID:** `41bb431f-56d8-4691-bb56-ed34e390906f`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_msconfig_gui.yml`
