---
type: detection_rule
title: "Suspicious Screensaver Binary File Creation"
rule_id: 97aa2e88-555c-450d-85a6-229bcd87efb8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.002]
---

# Suspicious Screensaver Binary File Creation

## Description
Adversaries may establish persistence by executing malicious content triggered by user inactivity.
Screensavers are programs that execute after a configurable time of user inactivity and consist of Portable Executable (PE) files with a .scr file extension

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_generic:
  Image|endswith:
  - \Kindle.exe
  - \Bin\ccSvcHst.exe
filter_tiworker:
  Image|endswith: \TiWorker.exe
  TargetFilename|endswith: \uwfservicingscr.scr
selection:
  TargetFilename|endswith: .scr
```

## MITRE ATT&CK
- T1546.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.002/T1546.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-29
- **Rule ID:** `97aa2e88-555c-450d-85a6-229bcd87efb8`
- **Source file:** `windows/file/file_event/file_event_win_creation_scr_binary_file.yml`
