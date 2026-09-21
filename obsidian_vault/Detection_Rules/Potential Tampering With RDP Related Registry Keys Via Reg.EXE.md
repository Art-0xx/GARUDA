---
type: detection_rule
title: "Potential Tampering With RDP Related Registry Keys Via Reg.EXE"
rule_id: 0d5675be-bc88-4172-86d3-1e96a4476536
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.001, attack.t1112]
---

# Potential Tampering With RDP Related Registry Keys Via Reg.EXE

## Description
Detects the execution of "reg.exe" for enabling/disabling the RDP service on the host by tampering with the 'CurrentControlSet\Control\Terminal Server' values

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_main_* and 1 of selection_values_* and not 1 of filter_main_*
filter_main_values_tls:
  CommandLine|contains|all:
  - SecurityLayer
  - '02'
selection_main_cli:
  CommandLine|contains|all:
  - ' add '
  - \CurrentControlSet\Control\Terminal Server
  - REG_DWORD
  - ' /f'
selection_main_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_values_1:
  CommandLine|contains|all:
  - Licensing Core
  - EnableConcurrentSessions
selection_values_2:
  CommandLine|contains:
  - AllowTSConnections
  - fDenyTSConnections
  - fEnableWinStation
  - fSingleSessionPerUser
  - IdleWinStationPoolCount
  - MaxInstanceCount
  - SecurityLayer
  - TSAdvertise
  - TSAppCompat
  - TSEnabled
  - TSUserEnabled
  - WinStations\RDP-Tcp
```

## MITRE ATT&CK
- T1021.001
- T1112

## False Positives
- Unknown

## References
- https://thedfirreport.com/2022/02/21/qbot-and-zerologon-lead-to-full-domain-compromise/
- http://etutorials.org/Microsoft+Products/microsoft+windows+server+2003+terminal+services/Chapter+6+Registry/Registry+Keys+for+Terminal+Services/
- http://woshub.com/rds-shadow-how-to-connect-to-a-user-session-in-windows-server-2012-r2/
- https://admx.help/HKLM/SOFTWARE/Policies/Microsoft/Windows%20NT/Terminal%20Services
- https://bazaar.abuse.ch/sample/6f3aa9362d72e806490a8abce245331030d1ab5ac77e400dd475748236a6cc81/

## Metadata
- **Author:** pH-T (Nextron Systems), @Kostastsale, TheDFIRReport
- **Date:** 2022-02-12
- **Rule ID:** `0d5675be-bc88-4172-86d3-1e96a4476536`
- **Source file:** `windows/process_creation/proc_creation_win_reg_rdp_keys_tamper.yml`
