---
type: detection_rule
title: "Security Service Disabled Via Reg.EXE"
rule_id: 5e95028c-5229-4214-afae-d653d573d0ec
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Security Service Disabled Via Reg.EXE

## Description
Detects execution of "reg.exe" to disable security services such as Windows Defender.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_reg_start:
  CommandLine|contains:
  - \AppIDSvc
  - \MsMpSvc
  - \NisSrv
  - \SecurityHealthService
  - \Sense
  - \UsoSvc
  - \WdBoot
  - \WdFilter
  - \WdNisDrv
  - \WdNisSvc
  - \WinDefend
  - \wscsvc
  - \wuauserv
  CommandLine|contains|all:
  - d 4
  - v Start
selection_reg_add:
  CommandLine|contains|all:
  - reg
  - add
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://twitter.com/JohnLaTwC/status/1415295021041979392
- https://github.com/gordonbay/Windows-On-Reins/blob/e587ac7a0407847865926d575e3c46f68cf7c68d/wor.ps1
- https://vms.drweb.fr/virus/?i=24144899
- https://bidouillesecurity.com/disable-windows-defender-in-powershell/

## Metadata
- **Author:** Florian Roth (Nextron Systems), John Lambert (idea), elhoim
- **Date:** 2021-07-14
- **Rule ID:** `5e95028c-5229-4214-afae-d653d573d0ec`
- **Source file:** `windows/process_creation/proc_creation_win_reg_disable_sec_services.yml`
