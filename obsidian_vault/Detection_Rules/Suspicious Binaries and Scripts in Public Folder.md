---
type: detection_rule
title: "Suspicious Binaries and Scripts in Public Folder"
rule_id: b447f7de-1e53-4cbf-bfb4-f1f6d0b04e4e
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204]
---

# Suspicious Binaries and Scripts in Public Folder

## Description
Detects the creation of a file with a suspicious extension in the public folder, which could indicate potential malicious activity.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: :\Users\Public\
  TargetFilename|endswith:
  - .bat
  - .dll
  - .exe
  - .hta
  - .js
  - .ps1
  - .vbe
  - .vbs
```

## MITRE ATT&CK
- T1204

## False Positives
- Administrators deploying legitimate binaries to public folders.

## References
- https://intel.thedfirreport.com/events/view/30032
- https://intel.thedfirreport.com/eventReports/view/70
- https://thedfirreport.com/2025/01/27/cobalt-strike-and-a-pair-of-socks-lead-to-lockbit-ransomware/

## Metadata
- **Author:** The DFIR Report
- **Date:** 2025-01-23
- **Rule ID:** `b447f7de-1e53-4cbf-bfb4-f1f6d0b04e4e`
- **Source file:** `windows/file/file_event/file_event_win_susp_public_folder_extension.yml`
