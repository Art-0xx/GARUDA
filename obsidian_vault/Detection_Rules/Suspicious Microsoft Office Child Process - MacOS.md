---
type: detection_rule
title: "Suspicious Microsoft Office Child Process - MacOS"
rule_id: 69483748-1525-4a6c-95ca-90dc8d431b68
platform: macos
level: high
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059.002, attack.t1137.002, attack.t1204.002]
---

# Suspicious Microsoft Office Child Process - MacOS

## Description
Detects suspicious child processes spawning from microsoft office suite applications such as word or excel. This could indicates malicious macro execution

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - /bash
  - /curl
  - /dash
  - /fish
  - /osacompile
  - /osascript
  - /sh
  - /zsh
  - /python
  - /python3
  - /wget
  ParentImage|contains:
  - Microsoft Word
  - Microsoft Excel
  - Microsoft PowerPoint
  - Microsoft OneNote
```

## MITRE ATT&CK
- T1059.002
- T1137.002
- T1204.002

## False Positives
- Unknown

## References
- https://redcanary.com/blog/applescript/
- https://objective-see.org/blog/blog_0x4B.html

## Metadata
- **Author:** Sohan G (D4rkCiph3r)
- **Date:** 2023-01-31
- **Rule ID:** `69483748-1525-4a6c-95ca-90dc8d431b68`
- **Source file:** `macos/process_creation/proc_creation_macos_office_susp_child_processes.yml`
