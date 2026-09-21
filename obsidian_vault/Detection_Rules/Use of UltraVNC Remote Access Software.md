---
type: detection_rule
title: "Use of UltraVNC Remote Access Software"
rule_id: 145322e4-0fd3-486b-81ca-9addc75736d8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Use of UltraVNC Remote Access Software

## Description
An adversary may use legitimate desktop support and remote access software,to establish an interactive command and control channel to target systems within networks

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Description: VNCViewer
- Product: UltraVNC VNCViewer
- Company: UltraVNC
- OriginalFileName: VNCViewer.exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/9e5b12c4912c07562aec7500447b11fa3e17e254/atomics/T1219/T1219.md

## Metadata
- **Author:** frack113
- **Date:** 2022-10-02
- **Rule ID:** `145322e4-0fd3-486b-81ca-9addc75736d8`
- **Source file:** `windows/process_creation/proc_creation_win_ultravnc.yml`
