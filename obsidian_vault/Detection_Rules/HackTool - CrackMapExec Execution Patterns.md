---
type: detection_rule
title: "HackTool - CrackMapExec Execution Patterns"
rule_id: 058f4380-962d-40a5-afce-50207d36d7e2
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1053, attack.t1059.003, attack.t1059.001]
---

# HackTool - CrackMapExec Execution Patterns

## Description
Detects various execution patterns of the CrackMapExec pentesting framework

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - cmd.exe /Q /c * 1> \\\\*\\*\\* 2>&1
  - cmd.exe /C * > \\\\*\\*\\* 2>&1
  - cmd.exe /C * > *\\Temp\\* 2>&1
  - powershell.exe -exec bypass -noni -nop -w 1 -C "
  - 'powershell.exe -noni -nop -w 1 -enc '
```

## MITRE ATT&CK
- T1047
- T1053
- T1059.003
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/byt3bl33d3r/CrackMapExec

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2020-05-22
- **Rule ID:** `058f4380-962d-40a5-afce-50207d36d7e2`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_crackmapexec_execution_patterns.yml`
