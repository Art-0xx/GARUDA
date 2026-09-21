---
type: detection_rule
title: "Windows Shell/Scripting Processes Spawning Suspicious Programs"
rule_id: 3a6586ad-127a-4d3b-a677-1e6eacdf8fde
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005, attack.t1059.001, attack.t1218]
---

# Windows Shell/Scripting Processes Spawning Suspicious Programs

## Description
Detects suspicious child processes of a Windows shell and scripting processes such as wscript, rundll32, powershell, mshta...etc.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_amazon:
  ParentCommandLine|contains:
  - \Program Files\Amazon\WorkSpacesConfig\Scripts\setup-scheduledtask.ps1
  - \Program Files\Amazon\WorkSpacesConfig\Scripts\set-selfhealing.ps1
  - \Program Files\Amazon\WorkSpacesConfig\Scripts\check-workspacehealth.ps1
  - \nessus_
filter_ccmcache:
  CurrentDirectory|contains: \ccmcache\
filter_nessus:
  CommandLine|contains: \nessus_
filter_sccm_install:
  CommandLine|contains|all:
  - C:\MEM_Configmgr_
  - \SMSSETUP\BIN\
  - \autorun.hta
  - '{1E460BD7-F1C3-4B2E-88BF-4E770A288AF5}'
  Image|endswith: \mshta.exe
  ParentCommandLine|contains|all:
  - C:\MEM_Configmgr_
  - \splash.hta
  - '{1E460BD7-F1C3-4B2E-88BF-4E770A288AF5}'
  ParentImage|endswith: \mshta.exe
selection:
  Image|endswith:
  - \schtasks.exe
  - \nslookup.exe
  - \certutil.exe
  - \bitsadmin.exe
  - \mshta.exe
  ParentImage|endswith:
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \rundll32.exe
  - \cscript.exe
  - \wscript.exe
  - \wmiprvse.exe
  - \regsvr32.exe
```

## MITRE ATT&CK
- T1059.005
- T1059.001
- T1218

## False Positives
- Administrative scripts
- Microsoft SCCM

## References
- https://mgreen27.github.io/posts/2018/04/02/DownloadCradle.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Tim Shelton
- **Date:** 2018-04-06
- **Rule ID:** `3a6586ad-127a-4d3b-a677-1e6eacdf8fde`
- **Source file:** `windows/process_creation/proc_creation_win_susp_shell_spawn_susp_program.yml`
