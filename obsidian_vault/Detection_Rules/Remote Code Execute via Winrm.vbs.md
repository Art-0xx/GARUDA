---
type: detection_rule
title: "Remote Code Execute via Winrm.vbs"
rule_id: 9df0dd3a-1a5c-47e3-a2bc-30ed177646a0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1216]
---

# Remote Code Execute via Winrm.vbs

## Description
Detects an attempt to execute code or create service on remote host via winrm.vbs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains|all:
  - winrm
  - invoke Create wmicimv2/Win32_
  - -r:http
selection_img:
- Image|endswith: \cscript.exe
- OriginalFileName: cscript.exe
```

## MITRE ATT&CK
- T1216

## False Positives
- Unknown

## References
- https://twitter.com/bohops/status/994405551751815170
- https://redcanary.com/blog/lateral-movement-winrm-wmi/
- https://lolbas-project.github.io/lolbas/Scripts/Winrm/

## Metadata
- **Author:** Julia Fomina, oscd.community
- **Date:** 2020-10-07
- **Rule ID:** `9df0dd3a-1a5c-47e3-a2bc-30ed177646a0`
- **Source file:** `windows/process_creation/proc_creation_win_winrm_execution_via_scripting_api_winrm_vbs.yml`
