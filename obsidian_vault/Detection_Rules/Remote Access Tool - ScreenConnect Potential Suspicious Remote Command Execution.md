---
type: detection_rule
title: "Remote Access Tool - ScreenConnect Potential Suspicious Remote Command Execution"
rule_id: 7b582f1a-b318-4c6a-bf4e-66fe49bf55a5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - ScreenConnect Potential Suspicious Remote Command Execution

## Description
Detects potentially suspicious child processes launched via the ScreenConnect client service.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \bitsadmin.exe
  - \cmd.exe
  - \curl.exe
  - \dllhost.exe
  - \net.exe
  - \nltest.exe
  - \powershell.exe
  - \pwsh.exe
  - \rundll32.exe
  - \wevtutil.exe
  ParentCommandLine|contains|all:
  - :\Windows\TEMP\ScreenConnect\
  - run.cmd
```

## MITRE ATT&CK
- T1219.002

## False Positives
- If the script being executed make use of any of the utilities mentioned in the detection then they should filtered out or allowed.

## References
- https://www.mandiant.com/resources/telegram-malware-iranian-espionage
- https://docs.connectwise.com/ConnectWise_Control_Documentation/Get_started/Host_client/View_menu/Backstage_mode
- https://www.huntress.com/blog/slashandgrab-screen-connect-post-exploitation-in-the-wild-cve-2024-1709-cve-2024-1708
- https://www.trendmicro.com/en_us/research/24/b/threat-actor-groups-including-black-basta-are-exploiting-recent-.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems), @Kostastsale
- **Date:** 2022-02-25
- **Rule ID:** `7b582f1a-b318-4c6a-bf4e-66fe49bf55a5`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_screenconnect_remote_execution_susp.yml`
