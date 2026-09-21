---
type: detection_rule
title: "HackTool - Dumpert Process Dumper Execution"
rule_id: 2704ab9e-afe2-4854-a3b1-0c0706d03578
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - Dumpert Process Dumper Execution

## Description
Detects the use of Dumpert process dumper, which dumps the lsass.exe process memory

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Hashes|contains: MD5=09D278F9DE118EF09163C6140255C690
- CommandLine|contains: Dumpert.dll
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Very unlikely

## References
- https://github.com/outflanknl/Dumpert
- https://unit42.paloaltonetworks.com/actors-still-exploiting-sharepoint-vulnerability/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-02-04
- **Rule ID:** `2704ab9e-afe2-4854-a3b1-0c0706d03578`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_dumpert.yml`
