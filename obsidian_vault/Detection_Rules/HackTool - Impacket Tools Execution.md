---
type: detection_rule
title: "HackTool - Impacket Tools Execution"
rule_id: 4627c6ae-6899-46e2-aa0c-6ebcb1becd19
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557.001]
---

# HackTool - Impacket Tools Execution

## Description
Detects the execution of different compiled Windows binaries of the impacket toolset (based on names or part of their names - could lead to false positives)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|contains:
  - \goldenPac
  - \karmaSMB
  - \kintercept
  - \ntlmrelayx
  - \rpcdump
  - \samrdump
  - \secretsdump
  - \smbexec
  - \smbrelayx
  - \wmiexec
  - \wmipersist
- Image|endswith:
  - \atexec_windows.exe
  - \dcomexec_windows.exe
  - \dpapi_windows.exe
  - \findDelegation_windows.exe
  - \GetADUsers_windows.exe
  - \GetNPUsers_windows.exe
  - \getPac_windows.exe
  - \getST_windows.exe
  - \getTGT_windows.exe
  - \GetUserSPNs_windows.exe
  - \ifmap_windows.exe
  - \mimikatz_windows.exe
  - \netview_windows.exe
  - \nmapAnswerMachine_windows.exe
  - \opdump_windows.exe
  - \psexec_windows.exe
  - \rdp_check_windows.exe
  - \sambaPipe_windows.exe
  - \smbclient_windows.exe
  - \smbserver_windows.exe
  - \sniff_windows.exe
  - \sniffer_windows.exe
  - \split_windows.exe
  - \ticketer_windows.exe
```

## MITRE ATT&CK
- T1557.001

## False Positives
- Legitimate use of the impacket tools

## References
- https://github.com/ropnop/impacket_static_binaries/releases/tag/0.9.21-dev-binaries

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-07-24
- **Rule ID:** `4627c6ae-6899-46e2-aa0c-6ebcb1becd19`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_impacket_tools.yml`
