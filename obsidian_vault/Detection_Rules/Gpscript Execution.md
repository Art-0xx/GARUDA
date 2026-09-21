---
type: detection_rule
title: "Gpscript Execution"
rule_id: 1e59c230-6670-45bf-83b0-98903780607e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Gpscript Execution

## Description
Detects the execution of the LOLBIN gpscript, which executes logon or startup scripts configured in Group Policy

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_svchost:
  ParentCommandLine: C:\windows\system32\svchost.exe -k netsvcs -p -s gpsvc
selection_cli:
  CommandLine|contains:
  - ' /logon'
  - ' /startup'
selection_img:
- Image|endswith: \gpscript.exe
- OriginalFileName: GPSCRIPT.EXE
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate uses of logon scripts distributed via group policy

## References
- https://oddvar.moe/2018/04/27/gpscript-exe-another-lolbin-to-the-list/
- https://lolbas-project.github.io/lolbas/Binaries/Gpscript/

## Metadata
- **Author:** frack113
- **Date:** 2022-05-16
- **Rule ID:** `1e59c230-6670-45bf-83b0-98903780607e`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_gpscript.yml`
