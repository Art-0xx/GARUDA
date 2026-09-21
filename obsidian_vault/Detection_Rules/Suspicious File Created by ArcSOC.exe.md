---
type: detection_rule
title: "Suspicious File Created by ArcSOC.exe"
rule_id: e890acee-d488-420e-8f20-d9b19b3c3d43
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127, attack.t1105, attack.t1133]
---

# Suspicious File Created by ArcSOC.exe

## Description
Detects instances where the ArcGIS Server process ArcSOC.exe, which hosts REST services running on an ArcGIS
server, creates a file with suspicious file type, indicating that it may be an executable, script file,
or otherwise unusual.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \ArcSOC.exe
  TargetFilename|endswith:
  - .ahk
  - .aspx
  - .au3
  - .bat
  - .cmd
  - .dll
  - .exe
  - .hta
  - .js
  - .ps1
  - .py
  - .vbe
  - .vbs
  - .wsf
```

## MITRE ATT&CK
- T1127
- T1105
- T1133

## False Positives
- Unlikely

## References
- https://reliaquest.com/blog/threat-spotlight-inside-flax-typhoons-arcgis-compromise/
- https://enterprise.arcgis.com/en/server/12.0/administer/windows/inside-an-arcgis-server-site.htm

## Metadata
- **Author:** Micah Babinski
- **Date:** 2025-11-25
- **Rule ID:** `e890acee-d488-420e-8f20-d9b19b3c3d43`
- **Source file:** `windows/file/file_event/file_event_win_arcsoc_susp_file_created.yml`
