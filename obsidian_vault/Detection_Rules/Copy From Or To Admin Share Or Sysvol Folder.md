---
type: detection_rule
title: "Copy From Or To Admin Share Or Sysvol Folder"
rule_id: 855bc8b5-2ae8-402e-a9ed-b889e6df1900
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1039, attack.t1048, attack.t1021.002]
---

# Copy From Or To Admin Share Or Sysvol Folder

## Description
Detects a copy command or a copy utility execution to or from an Admin share or remote

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_target and (selection_other_tools or all of selection_cmd_* or
  all of selection_pwsh_*)
selection_cmd_cli:
  CommandLine|contains: copy
selection_cmd_img:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
selection_other_tools:
- Image|endswith:
  - \robocopy.exe
  - \xcopy.exe
- OriginalFileName:
  - robocopy.exe
  - XCOPY.EXE
selection_pwsh_cli:
  CommandLine|contains:
  - copy-item
  - 'copy '
  - 'cpi '
  - ' cp '
  - 'move '
  - ' move-item'
  - ' mi '
  - ' mv '
selection_pwsh_img:
- Image|contains:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - powershell_ise.exe
  - PowerShell.EXE
  - pwsh.dll
selection_target:
  CommandLine|contains:
  - \\\\*\\*$
  - \Sysvol\
```

## MITRE ATT&CK
- T1039
- T1048
- T1021.002

## False Positives
- Administrative scripts

## References
- https://twitter.com/SBousseaden/status/1211636381086339073
- https://drive.google.com/file/d/1lKya3_mLnR3UQuCoiYruO3qgu052_iS_/view
- https://www.elastic.co/guide/en/security/current/remote-file-copy-to-a-hidden-share.html
- https://www.microsoft.com/en-us/security/blog/2022/10/18/defenders-beware-a-case-for-post-ransomware-investigations/

## Metadata
- **Author:** Florian Roth (Nextron Systems), oscd.community, Teymur Kheirkhabarov @HeirhabarovT, Zach Stanford @svch0st, Nasreddine Bencherchali
- **Date:** 2019-12-30
- **Rule ID:** `855bc8b5-2ae8-402e-a9ed-b889e6df1900`
- **Source file:** `windows/process_creation/proc_creation_win_susp_copy_lateral_movement.yml`
