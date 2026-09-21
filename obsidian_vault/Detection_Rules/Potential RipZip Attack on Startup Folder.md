---
type: detection_rule
title: "Potential RipZip Attack on Startup Folder"
rule_id: a6976974-ea6f-4e97-818e-ea08625c52cb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547]
---

# Potential RipZip Attack on Startup Folder

## Description
Detects a phishing attack which expands a ZIP file containing a malicious shortcut.
If the victim expands the ZIP file via the explorer process, then the explorer process expands the malicious ZIP file and drops a malicious shortcut redirected to a backdoor into the Startup folder.
Additionally, the file name of the malicious shortcut in Startup folder contains {0AFACED1-E828-11D1-9187-B532F1E9575D} meaning the folder shortcut operation.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \explorer.exe
  TargetFilename|contains|all:
  - \Microsoft\Windows\Start Menu\Programs\Startup
  - .lnk.{0AFACED1-E828-11D1-9187-B532F1E9575D}
```

## MITRE ATT&CK
- T1547

## False Positives
- Unknown

## References
- https://twitter.com/jonasLyk/status/1549338335243534336?t=CrmPocBGLbDyE4p6zTX1cg&s=19

## Metadata
- **Author:** Greg (rule)
- **Date:** 2022-07-21
- **Rule ID:** `a6976974-ea6f-4e97-818e-ea08625c52cb`
- **Source file:** `windows/file/file_event/file_event_win_ripzip_attack.yml`
