---
type: detection_rule
title: "Cmd.EXE Missing Space Characters Execution Anomaly"
rule_id: a16980c2-0c56-4de0-9a79-17971979efdd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Cmd.EXE Missing Space Characters Execution Anomaly

## Description
Detects Windows command lines that miss a space before or after the /c flag when running a command using the cmd.exe.
This could be a sign of obfuscation of a fat finger problem (typo by the developer).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection* and not 1 of filter_*
filter_fp:
- CommandLine|contains: AppData\Local\Programs\Microsoft VS Code\resources\app\node_modules
- CommandLine|endswith: cmd.exe/c .
- CommandLine: cmd.exe /c
- CommandLine: cmd /c
filter_generic:
  CommandLine|contains:
  - 'cmd.exe /c '
  - 'cmd /c '
  - 'cmd.exe /k '
  - 'cmd /k '
  - 'cmd.exe /r '
  - 'cmd /r '
selection1:
  CommandLine|contains:
  - cmd.exe/c
  - \cmd/c
  - '"cmd/c'
  - cmd.exe/k
  - \cmd/k
  - '"cmd/k'
  - cmd.exe/r
  - \cmd/r
  - '"cmd/r'
selection2:
  CommandLine|contains:
  - /cwhoami
  - /cpowershell
  - /cschtasks
  - /cbitsadmin
  - /ccertutil
  - /kwhoami
  - /kpowershell
  - /kschtasks
  - /kbitsadmin
  - /kcertutil
selection3:
  CommandLine|contains:
  - cmd.exe /c
  - cmd /c
  - cmd.exe /k
  - cmd /k
  - cmd.exe /r
  - cmd /r
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate use of cmd.exe with no arguments e.g. via system("") in C to enable ANSI escape codes

## References
- https://twitter.com/cyb3rops/status/1562072617552678912
- https://ss64.com/nt/cmd.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-23
- **Rule ID:** `a16980c2-0c56-4de0-9a79-17971979efdd`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_no_space_execution.yml`
