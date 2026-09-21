---
type: detection_rule
title: "Suspicious Usage of For Loop with Recursive Directory Search in CMD"
rule_id: 2782fbd8-b662-4eb5-9962-5bfbfb671e7b
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.003, attack.t1027.010]
---

# Suspicious Usage of For Loop with Recursive Directory Search in CMD

## Description
Detects suspicious usage of the cmd.exe 'for /f' loop combined with the 'tokens=' parameter and a recursive directory listing.
This pattern may indicate an attempt to discover and execute system binaries dynamically, for example powershell, a technique sometimes used by attackers to evade detection.
This behavior has been observed in various malicious lnk files.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_tokens:
  CommandLine|contains|all:
  - for /f
  - tokens=
  - in (
  - dir
selection_tokens_parent:
  ParentCommandLine|contains|all:
  - for /f
  - tokens=
  - in (
  - dir
```

## MITRE ATT&CK
- T1059.003
- T1027.010

## False Positives
- Unknown

## References
- https://www.virustotal.com/gui/file/29837d0d3202758063185828c8f8d9e0b7b42b365c8941cc926d2d7c7bae2fb3

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2025-11-12
- **Rule ID:** `2782fbd8-b662-4eb5-9962-5bfbfb671e7b`
- **Source file:** `windows/process_creation/proc_creation_win_susp_cmd_for_loop_execution_with_recursive_directory_search.yml`
