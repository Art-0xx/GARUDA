---
type: detection_rule
title: "Suspicious Spool Service Child Process"
rule_id: dcdbc940-0bff-46b2-95f3-2d73f848e33b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1203, attack.t1068]
---

# Suspicious Spool Service Child Process

## Description
Detects suspicious print spool service (spoolsv.exe) child processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: spoolsv and ( suspicious_unrestricted or (suspicious_net and not suspicious_net_filter)
  or (suspicious_cmd and not suspicious_cmd_filter) or (suspicious_netsh and not suspicious_netsh_filter)
  or (suspicious_powershell and not suspicious_powershell_filter) or all of suspicious_rundll32_*
  )
spoolsv:
  IntegrityLevel:
  - System
  - S-1-16-16384
  ParentImage|endswith: \spoolsv.exe
suspicious_cmd:
  Image|endswith: \cmd.exe
suspicious_cmd_filter:
  CommandLine|contains:
  - .spl
  - route add
  - program files
suspicious_net:
  Image|endswith:
  - \net.exe
  - \net1.exe
suspicious_net_filter:
  CommandLine|contains: start
suspicious_netsh:
  Image|endswith: \netsh.exe
suspicious_netsh_filter:
  CommandLine|contains:
  - add portopening
  - rule name
suspicious_powershell:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
suspicious_powershell_filter:
  CommandLine|contains: .spl
suspicious_rundll32_cli:
  CommandLine|endswith: rundll32.exe
suspicious_rundll32_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
suspicious_unrestricted:
  Image|endswith:
  - \gpupdate.exe
  - \whoami.exe
  - \nltest.exe
  - \taskkill.exe
  - \wmic.exe
  - \taskmgr.exe
  - \sc.exe
  - \findstr.exe
  - \curl.exe
  - \wget.exe
  - \certutil.exe
  - \bitsadmin.exe
  - \accesschk.exe
  - \wevtutil.exe
  - \bcdedit.exe
  - \fsutil.exe
  - \cipher.exe
  - \schtasks.exe
  - \write.exe
  - \wuauclt.exe
  - \systeminfo.exe
  - \reg.exe
  - \query.exe
```

## MITRE ATT&CK
- T1203
- T1068

## False Positives
- Unknown

## References
- https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries/blob/efa17a600b43c897b4b7463cc8541daa1987eeb4/Exploits/Print%20Spooler%20RCE/Suspicious%20Spoolsv%20Child%20Process.md

## Metadata
- **Author:** Justin C. (@endisphotic), @dreadphones (detection), Thomas Patzke (Sigma rule)
- **Date:** 2021-07-11
- **Rule ID:** `dcdbc940-0bff-46b2-95f3-2d73f848e33b`
- **Source file:** `windows/process_creation/proc_creation_win_spoolsv_susp_child_processes.yml`
