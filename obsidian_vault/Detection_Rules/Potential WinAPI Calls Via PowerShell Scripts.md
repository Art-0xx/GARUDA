---
type: detection_rule
title: "Potential WinAPI Calls Via PowerShell Scripts"
rule_id: 03d83090-8cba-44a0-b02f-0b756a050306
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1106, attack.t1620]
---

# Potential WinAPI Calls Via PowerShell Scripts

## Description
Detects usage of WinAPI functions in PowerShell scripts.
It may indicate attempts to perform actions such as process injection, token stealing, or other malicious activities that leverage Windows API calls.
These techniques are commonly used to evade traditional file-based detections by loading and executing code directly in memory.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_duplicate_token:
  ScriptBlockText|contains|all:
  - OpenProcessToken
  - DuplicateTokenEx
  - CloseHandle
selection_injection:
  ScriptBlockText|contains|all:
  - VirtualAlloc
  - OpenProcess
  - WriteProcessMemory
  - CreateRemoteThread
selection_local_shellcode_injection:
  ScriptBlockText|contains|all:
  - VirtualAlloc
  - GetDelegateForFunctionPointer
  - Marshal.Copy
selection_process_write_read:
  ScriptBlockText|contains|all:
  - WriteProcessMemory
  - VirtualAlloc
  - ReadProcessMemory
  - VirtualFree
selection_token_steal:
  ScriptBlockText|contains|all:
  - OpenProcessToken
  - LookupPrivilegeValue
  - AdjustTokenPrivileges
```

## MITRE ATT&CK
- T1059.001
- T1106
- T1620

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse
- https://github.com/PowerShellMafia/PowerSploit/blob/1980f403ee78234eae4d93b50890d02f827a099f/CodeExecution/Invoke-Shellcode.ps1
- https://thedfirreport.com/2021/08/29/cobalt-strike-a-defenders-guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Nikita Nazarov, oscd.community
- **Date:** 2020-10-06
- **Rule ID:** `03d83090-8cba-44a0-b02f-0b756a050306`
- **Source file:** `windows/powershell/powershell_script/posh_ps_win_api_susp_access.yml`
