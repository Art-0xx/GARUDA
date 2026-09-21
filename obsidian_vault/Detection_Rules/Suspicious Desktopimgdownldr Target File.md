---
type: detection_rule
title: "Suspicious Desktopimgdownldr Target File"
rule_id: fc4f4817-0c53-4683-a4ee-b17a64bc1039
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Desktopimgdownldr Target File

## Description
Detects a suspicious Microsoft desktopimgdownldr file creation that stores a file to a suspicious location or contains a file with a suspicious extension

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter1 and not filter2
filter1:
  TargetFilename|contains: C:\Windows\
filter2:
  TargetFilename|contains:
  - .jpg
  - .jpeg
  - .png
selection:
  Image|endswith: \svchost.exe
  TargetFilename|contains: \Personalization\LockScreenImage\
```

## MITRE ATT&CK
- T1105

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://labs.sentinelone.com/living-off-windows-land-a-new-native-file-downldr/
- https://twitter.com/SBousseaden/status/1278977301745741825

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-07-03
- **Rule ID:** `fc4f4817-0c53-4683-a4ee-b17a64bc1039`
- **Source file:** `windows/file/file_event/file_event_win_susp_desktopimgdownldr_file.yml`
