---
type: detection_rule
title: "Potential Register_App.Vbs LOLScript Abuse"
rule_id: 28c8f68b-098d-45af-8d43-8089f3e35403
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potential Register_App.Vbs LOLScript Abuse

## Description
Detects potential abuse of the "register_app.vbs" script that is part of the Windows SDK. The script offers the capability to register new VSS/VDS Provider as a COM+ application. Attackers can use this to install malicious DLLs for persistence and execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains: '.vbs -register '
selection_img:
- Image|endswith:
  - \cscript.exe
  - \wscript.exe
- OriginalFileName:
  - cscript.exe
  - wscript.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Other VB scripts that leverage the same starting command line flags

## References
- https://twitter.com/sblmsrsn/status/1456613494783160325?s=20
- https://github.com/microsoft/Windows-classic-samples/blob/7cbd99ac1d2b4a0beffbaba29ea63d024ceff700/Samples/Win7Samples/winbase/vss/vsssampleprovider/register_app.vbs

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-11-05
- **Rule ID:** `28c8f68b-098d-45af-8d43-8089f3e35403`
- **Source file:** `windows/process_creation/proc_creation_win_lolscript_register_app.yml`
