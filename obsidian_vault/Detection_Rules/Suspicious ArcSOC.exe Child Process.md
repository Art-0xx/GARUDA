---
type: detection_rule
title: "Suspicious ArcSOC.exe Child Process"
rule_id: 8e95e73e-ba02-4a87-b4d7-0929b8053038
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1203]
---

# Suspicious ArcSOC.exe Child Process

## Description
Detects script interpreters, command-line tools, and similar suspicious child processes of ArcSOC.exe.
ArcSOC.exe is the process name which hosts ArcGIS Server REST services. If an attacker compromises an ArcGIS
Server system and uploads a malicious Server Object Extension (SOE), they can send crafted requests to the corresponding
service endpoint and remotely execute code from the ArcSOC.exe process.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_cmd:
  CommandLine: cmd.exe /c "ver"
  Image|endswith: \cmd.exe
selection:
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wmic.exe
  - \wscript.exe
  ParentImage|endswith: \ArcSOC.exe
```

## MITRE ATT&CK
- T1059
- T1203

## False Positives
- Unknown

## References
- https://reliaquest.com/blog/threat-spotlight-inside-flax-typhoons-arcgis-compromise/
- https://enterprise.arcgis.com/en/server/12.0/administer/windows/inside-an-arcgis-server-site.htm

## Metadata
- **Author:** Micah Babinski
- **Date:** 2025-11-25
- **Rule ID:** `8e95e73e-ba02-4a87-b4d7-0929b8053038`
- **Source file:** `windows/process_creation/proc_creation_win_arcsoc_susp_child_process.yml`
