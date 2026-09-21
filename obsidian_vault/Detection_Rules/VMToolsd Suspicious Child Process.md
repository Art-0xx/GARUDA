---
type: detection_rule
title: "VMToolsd Suspicious Child Process"
rule_id: 5687f942-867b-4578-ade7-1e341c46e99a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# VMToolsd Suspicious Child Process

## Description
Detects suspicious child process creations of VMware Tools process which may indicate persistence setup

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection* and not 1 of filter_main_*
filter_main_empty:
  CommandLine: ''
  Image|endswith: \cmd.exe
filter_main_null:
  CommandLine: null
  Image|endswith: \cmd.exe
filter_main_vmwaretools_script:
  CommandLine|contains:
  - \VMware\VMware Tools\poweron-vm-default.bat
  - \VMware\VMware Tools\poweroff-vm-default.bat
  - \VMware\VMware Tools\resume-vm-default.bat
  - \VMware\VMware Tools\suspend-vm-default.bat
  Image|endswith: \cmd.exe
selection_img:
- Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- OriginalFileName:
  - Cmd.Exe
  - cscript.exe
  - MSHTA.EXE
  - PowerShell.EXE
  - pwsh.dll
  - REGSVR32.EXE
  - RUNDLL32.EXE
  - wscript.exe
selection_parent:
  ParentImage|endswith: \vmtoolsd.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Legitimate use by VM administrator

## References
- https://bohops.com/2021/10/08/analyzing-and-detecting-a-vmtools-persistence-technique/
- https://user-images.githubusercontent.com/61026070/136518004-b68cce7d-f9b8-4e9a-9b7b-53b1568a9a94.png
- https://github.com/vmware/open-vm-tools/blob/master/open-vm-tools/tools.conf

## Metadata
- **Author:** bohops, Bhabesh Raj
- **Date:** 2021-10-08
- **Rule ID:** `5687f942-867b-4578-ade7-1e341c46e99a`
- **Source file:** `windows/process_creation/proc_creation_win_vmware_vmtoolsd_susp_child_process.yml`
