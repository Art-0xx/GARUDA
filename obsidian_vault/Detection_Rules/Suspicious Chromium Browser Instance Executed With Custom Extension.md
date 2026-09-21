---
type: detection_rule
title: "Suspicious Chromium Browser Instance Executed With Custom Extension"
rule_id: 27ba3207-dd30-4812-abbf-5d20c57d474e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1176.001]
---

# Suspicious Chromium Browser Instance Executed With Custom Extension

## Description
Detects a suspicious process spawning a Chromium based browser process with the 'load-extension' flag to start an instance with a custom extension

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: --load-extension=
  Image|endswith:
  - \brave.exe
  - \chrome.exe
  - \msedge.exe
  - \opera.exe
  - \vivaldi.exe
  ParentImage|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
```

## MITRE ATT&CK
- T1176.001

## False Positives
- Unknown

## References
- https://redcanary.com/blog/chromeloader/
- https://emkc.org/s/RJjuLa
- https://www.mandiant.com/resources/blog/lnk-between-browsers

## Metadata
- **Author:** Aedan Russell, frack113, X__Junior (Nextron Systems)
- **Date:** 2022-06-19
- **Rule ID:** `27ba3207-dd30-4812-abbf-5d20c57d474e`
- **Source file:** `windows/process_creation/proc_creation_win_browsers_chromium_susp_load_extension.yml`
