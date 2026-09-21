---
type: detection_rule
title: "Suspicious Key Manager Access"
rule_id: a4694263-59a8-4608-a3a0-6f8d3a51664c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555.004]
---

# Suspicious Key Manager Access

## Description
Detects the invocation of the Stored User Names and Passwords dialogue (Key Manager)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - keymgr
  - KRShowKeyMgr
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1555.004

## False Positives
- Administrative activity

## References
- https://twitter.com/NinjaParanoid/status/1516442028963659777

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-04-21
- **Rule ID:** `a4694263-59a8-4608-a3a0-6f8d3a51664c`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_keymgr.yml`
