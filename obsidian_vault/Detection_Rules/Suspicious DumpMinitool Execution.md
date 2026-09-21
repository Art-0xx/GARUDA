---
type: detection_rule
title: "Suspicious DumpMinitool Execution"
rule_id: eb1c4225-1c23-4241-8dd4-051389fde4ce
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1003.001]
---

# Suspicious DumpMinitool Execution

## Description
Detects suspicious ways to use the "DumpMinitool.exe" binary

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
cmd_has_flags:
  CommandLine|contains:
  - ' Full'
  - ' Mini'
  - ' WithHeap'
condition: selection and ( ( not filter_folder ) or susp_flags or ( cmd_has_flags
  and not filter_cmd_misses_flags ) )
filter_cmd_misses_flags:
  CommandLine|contains: --dumpType
filter_folder:
  Image|contains:
  - \Microsoft Visual Studio\
  - \Extensions\
selection:
- Image|endswith:
  - \DumpMinitool.exe
  - \DumpMinitool.x86.exe
  - \DumpMinitool.arm64.exe
- OriginalFileName:
  - DumpMinitool.exe
  - DumpMinitool.x86.exe
  - DumpMinitool.arm64.exe
susp_flags:
  CommandLine|contains: .txt
```

## MITRE ATT&CK
- T1036
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/mrd0x/status/1511415432888131586
- https://twitter.com/mrd0x/status/1511489821247684615
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/DumpMinitool/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-04-06
- **Rule ID:** `eb1c4225-1c23-4241-8dd4-051389fde4ce`
- **Source file:** `windows/process_creation/proc_creation_win_dumpminitool_susp_execution.yml`
