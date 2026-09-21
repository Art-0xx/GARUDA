---
type: detection_rule
title: "DllUnregisterServer Function Call Via Msiexec.EXE"
rule_id: 84f52741-8834-4a8c-a413-2eb2269aa6c8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007]
---

# DllUnregisterServer Function Call Via Msiexec.EXE

## Description
Detects MsiExec loading a DLL and calling its DllUnregisterServer function

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_dll:
  CommandLine|contains: .dll
selection_flag:
  CommandLine|contains|windash: ' -z '
selection_img:
- Image|endswith: \msiexec.exe
- OriginalFileName: \msiexec.exe
```

## MITRE ATT&CK
- T1218.007

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218.007/T1218.007.md
- https://lolbas-project.github.io/lolbas/Binaries/Msiexec/
- https://twitter.com/_st0pp3r_/status/1583914515996897281

## Metadata
- **Author:** frack113
- **Date:** 2022-04-24
- **Rule ID:** `84f52741-8834-4a8c-a413-2eb2269aa6c8`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_dll.yml`
