---
type: detection_rule
title: "WinRAR Creating Files in Startup Locations"
rule_id: 74a2b37d-fea4-41e0-9ac7-c9fbcf1f60cc
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# WinRAR Creating Files in Startup Locations

## Description
Detects WinRAR creating files in Windows startup locations, which may indicate an attempt to establish persistence by adding malicious files to the Startup folder.
This kind of behaviour has been associated with exploitation of WinRAR path traversal vulnerability CVE-2025-6218 or CVE-2025-8088.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \WinRAR.exe
  - \Rar.exe
  TargetFilename|contains: \Start Menu\Programs\Startup\
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Unknown

## References
- https://github.com/mulwareX/CVE-2025-6218-POC
- https://x.com/0x534c/status/1944694507787710685
- https://www.welivesecurity.com/en/eset-research/update-winrar-tools-now-romcom-and-others-exploiting-zero-day-vulnerability/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-16
- **Rule ID:** `74a2b37d-fea4-41e0-9ac7-c9fbcf1f60cc`
- **Source file:** `windows/file/file_event/file_event_win_winrar_file_creation_in_startup_folder.yml`
