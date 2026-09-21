---
type: detection_rule
title: "Sdiagnhost Calling Suspicious Child Process"
rule_id: f3d39c45-de1a-4486-a687-ab126124f744
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1218]
---

# Sdiagnhost Calling Suspicious Child Process

## Description
Detects sdiagnhost.exe calling a suspicious child process (e.g. used in exploits for Follina / CVE-2022-30190)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_cmd_bits:
  CommandLine|contains: bits
  Image|endswith: \cmd.exe
filter_main_powershell_noprofile:
  CommandLine|endswith:
  - -noprofile -
  - -noprofile
  Image|endswith: \powershell.exe
selection:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \cmd.exe
  - \mshta.exe
  - \cscript.exe
  - \wscript.exe
  - \taskkill.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \calc.exe
  ParentImage|endswith: \sdiagnhost.exe
```

## MITRE ATT&CK
- T1036
- T1218

## False Positives
- Unknown

## References
- https://twitter.com/nao_sec/status/1530196847679401984
- https://doublepulsar.com/follina-a-microsoft-office-code-execution-vulnerability-1a47fce5629e
- https://app.any.run/tasks/713f05d2-fe78-4b9d-a744-f7c133e3fafb/
- https://app.any.run/tasks/f420d295-0457-4e9b-9b9e-6732be227583/
- https://app.any.run/tasks/c4117d9a-f463-461a-b90f-4cd258746798/

## Metadata
- **Author:** Nextron Systems, @Kostastsale
- **Date:** 2022-06-01
- **Rule ID:** `f3d39c45-de1a-4486-a687-ab126124f744`
- **Source file:** `windows/process_creation/proc_creation_win_sdiagnhost_susp_child.yml`
