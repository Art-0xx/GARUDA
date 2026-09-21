---
type: detection_rule
title: "Rundll32 Execution With Uncommon DLL Extension"
rule_id: c3a99af4-35a9-4668-879e-c09aeb4f2bdf
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Rundll32 Execution With Uncommon DLL Extension

## Description
Detects the execution of rundll32 with a command line that doesn't contain a common extension

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_empty:
  CommandLine: ''
filter_main_known_extension:
- CommandLine|contains:
  - '.cpl '
  - .cpl,
  - .cpl"
  - .cpl'
  - '.dll '
  - .dll,
  - .dll"
  - .dll'
  - '.inf '
  - .inf,
  - .inf"
  - .inf'
- CommandLine|endswith:
  - .cpl
  - .dll
  - '.inf'
filter_main_localserver:
  CommandLine|contains: ' -localserver '
filter_main_null:
  CommandLine: null
filter_main_zzzzInvokeManagedCustomActionOutOfProc:
  CommandLine|contains|all:
  - :\Windows\Installer\
  - .tmp
  - zzzzInvokeManagedCustomActionOutOfProc
  ParentImage|endswith: \msiexec.exe
filter_optional_EdgeUpdate:
  ParentCommandLine|contains|all:
  - :\Users\
  - \AppData\Local\Microsoft\EdgeUpdate\Install\{
  - \EDGEMITMP_
  - .tmp\setup.exe
  - --install-archive=
  - --previous-version=
  - --msedgewebview --verbose-logging --do-not-launch-msedge --user-level
selection:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://twitter.com/mrd0x/status/1481630810495139841?s=12

## Metadata
- **Author:** Tim Shelton, Florian Roth (Nextron Systems), Yassine Oukessou
- **Date:** 2022-01-13
- **Rule ID:** `c3a99af4-35a9-4668-879e-c09aeb4f2bdf`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_uncommon_dll_extension.yml`
