---
type: detection_rule
title: "OneNote.EXE Execution of Malicious Embedded Scripts"
rule_id: 84b1706c-932a-44c4-ae28-892b28a25b94
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.001]
---

# OneNote.EXE Execution of Malicious Embedded Scripts

## Description
Detects the execution of malicious OneNote documents that contain embedded scripts.
When a user clicks on a OneNote attachment and then on the malicious link inside the ".one" file, it exports and executes the malicious embedded script from specific directories.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - \exported\
  - \onenoteofflinecache_files\
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  ParentImage|endswith: \onenote.exe
```

## MITRE ATT&CK
- T1218.001

## False Positives
- Unlikely

## References
- https://bazaar.abuse.ch/browse/tag/one/

## Metadata
- **Author:** @kostastsale
- **Date:** 2023-02-02
- **Rule ID:** `84b1706c-932a-44c4-ae28-892b28a25b94`
- **Source file:** `windows/process_creation/proc_creation_win_office_onenote_embedded_script_execution.yml`
