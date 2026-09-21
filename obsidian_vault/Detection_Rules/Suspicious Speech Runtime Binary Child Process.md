---
type: detection_rule
title: "Suspicious Speech Runtime Binary Child Process"
rule_id: 78f10490-f2f4-4d19-a75b-4e0683bf3b8d
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.003, attack.t1218]
---

# Suspicious Speech Runtime Binary Child Process

## Description
Detects suspicious Speech Runtime Binary Execution by monitoring its child processes.
Child processes spawned by SpeechRuntime.exe could indicate an attempt for lateral movement via COM & DCOM hijacking.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentImage|endswith: \SpeechRuntime.exe
```

## MITRE ATT&CK
- T1021.003
- T1218

## False Positives
- Unlikely.

## References
- https://github.com/rtecCyberSec/SpeechRuntimeMove

## Metadata
- **Author:** andrewdanis
- **Date:** 2025-10-23
- **Rule ID:** `78f10490-f2f4-4d19-a75b-4e0683bf3b8d`
- **Source file:** `windows/process_creation/proc_creation_win_speechruntime_child_process.yml`
