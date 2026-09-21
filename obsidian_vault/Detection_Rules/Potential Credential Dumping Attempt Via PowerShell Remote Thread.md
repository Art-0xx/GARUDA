---
type: detection_rule
title: "Potential Credential Dumping Attempt Via PowerShell Remote Thread"
rule_id: fb656378-f909-47c1-8747-278bf09f4f4f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Potential Credential Dumping Attempt Via PowerShell Remote Thread

## Description
Detects remote thread creation by PowerShell processes into "lsass.exe"

## Log Source
```yaml
category: create_remote_thread
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  SourceImage|endswith:
  - \powershell.exe
  - \pwsh.exe
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse

## Metadata
- **Author:** oscd.community, Natalia Shornikova
- **Date:** 2020-10-06
- **Rule ID:** `fb656378-f909-47c1-8747-278bf09f4f4f`
- **Source file:** `windows/create_remote_thread/create_remote_thread_win_powershell_lsass.yml`
