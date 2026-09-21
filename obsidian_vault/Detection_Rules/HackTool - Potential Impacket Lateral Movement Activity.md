---
type: detection_rule
title: "HackTool - Potential Impacket Lateral Movement Activity"
rule_id: 10c14723-61c7-4c75-92ca-9af245723ad2
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1021.003]
---

# HackTool - Potential Impacket Lateral Movement Activity

## Description
Detects wmiexec/dcomexec/atexec/smbexec from Impacket framework

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_atexec:
  CommandLine|contains|all:
  - cmd.exe
  - /C
  - Windows\Temp\
  - '&1'
  ParentCommandLine|contains:
  - svchost.exe -k netsvcs
  - taskeng.exe
selection_other:
  CommandLine|contains|all:
  - cmd.exe
  - /Q
  - /c
  - \\\\127.0.0.1\\
  - '&1'
  ParentImage|endswith:
  - \wmiprvse.exe
  - \mmc.exe
  - \explorer.exe
  - \services.exe
```

## MITRE ATT&CK
- T1047
- T1021.003

## False Positives
- Unknown

## References
- https://github.com/SecureAuthCorp/impacket/blob/8b1a99f7c715702eafe3f24851817bb64721b156/examples/wmiexec.py
- https://github.com/SecureAuthCorp/impacket/blob/8b1a99f7c715702eafe3f24851817bb64721b156/examples/atexec.py
- https://github.com/SecureAuthCorp/impacket/blob/8b1a99f7c715702eafe3f24851817bb64721b156/examples/smbexec.py
- https://github.com/SecureAuthCorp/impacket/blob/8b1a99f7c715702eafe3f24851817bb64721b156/examples/dcomexec.py
- https://www.elastic.co/guide/en/security/current/suspicious-cmd-execution-via-wmi.html

## Metadata
- **Author:** Ecco, oscd.community, Jonhnathan Ribeiro, Tim Rauch
- **Date:** 2019-09-03
- **Rule ID:** `10c14723-61c7-4c75-92ca-9af245723ad2`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_impacket_lateral_movement.yml`
