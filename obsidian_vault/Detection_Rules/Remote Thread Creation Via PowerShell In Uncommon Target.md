---
type: detection_rule
title: "Remote Thread Creation Via PowerShell In Uncommon Target"
rule_id: 99b97608-3e21-4bfe-8217-2a127c396a0e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011, attack.t1059.001]
---

# Remote Thread Creation Via PowerShell In Uncommon Target

## Description
Detects the creation of a remote thread from a Powershell process in an uncommon target process

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
  TargetImage|endswith:
  - \rundll32.exe
  - \regsvr32.exe
```

## MITRE ATT&CK
- T1218.011
- T1059.001

## False Positives
- Unknown

## References
- https://www.fireeye.com/blog/threat-research/2018/06/bring-your-own-land-novel-red-teaming-technique.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-06-25
- **Rule ID:** `99b97608-3e21-4bfe-8217-2a127c396a0e`
- **Source file:** `windows/create_remote_thread/create_remote_thread_win_powershell_susp_targets.yml`
