---
type: detection_rule
title: "RDP Enable or Disable via Win32_TerminalServiceSetting WMI Class"
rule_id: 4b8f6d3a-9c5e-4f2a-a7d8-6b9c3e5f2a8d
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.001, attack.t1047]
---

# RDP Enable or Disable via Win32_TerminalServiceSetting WMI Class

## Description
Detects enabling or disabling of Remote Desktop Protocol (RDP) using alternate methods such as WMIC or PowerShell.
In PowerShell one-liner commands, the "SetAllowTSConnections" method of the "Win32_TerminalServiceSetting" class may be used to enable or disable RDP.
In WMIC, the "rdtoggle" alias or "Win32_TerminalServiceSetting" class may be used for the same purpose.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_method:
  CommandLine|contains:
  - rdtoggle
  - Win32_TerminalServiceSetting
selection_cli_property:
  CommandLine|contains: SetAllowTSConnections
selection_img:
- Image|endswith:
  - \wmic.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - wmic.exe
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1021.001
- T1047

## False Positives
- Legitimate system administrators enabling RDP for remote support
- System configuration scripts during deployment

## References
- https://www.trendmicro.com/en_gb/research/22/e/uncovering-a-kingminer-botnet-attack-using-trend-micro-managed-x.html
- https://github.com/HackTricks-wiki/hacktricks/blob/72f20a3fa26775b932bd819f1824c6377802a768/src/windows-hardening/basic-cmd-for-pentesters.md#firewall
- https://github.com/Lifailon/RSA/blob/rsa/Sources/RSA-1.4.1.ps1#L1468

## Metadata
- **Author:** Daniel Koifman (KoifSec), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-15
- **Rule ID:** `4b8f6d3a-9c5e-4f2a-a7d8-6b9c3e5f2a8d`
- **Source file:** `windows/process_creation/proc_creation_win_rdp_enable_or_disable_via_win32_terminalservicesetting_wmi_class.yml`
