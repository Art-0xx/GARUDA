---
type: detection_rule
title: "Potential WinAPI Calls Via CommandLine"
rule_id: ba3f5c1b-6272-4119-9dbd-0bc8d21c2702
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1106]
---

# Potential WinAPI Calls Via CommandLine

## Description
Detects the use of WinAPI Functions via the commandline. As seen used by threat actors via the tool winapiexec

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_compatTelRunner:
  CommandLine|contains:
  - FreeHGlobal
  - PtrToString
  - kernel32
  - CloseHandle
  ParentImage|endswith: \CompatTelRunner.exe
filter_optional_mpcmdrun:
  CommandLine|contains: GetLoadLibraryWAddress32
  Image|endswith: \MpCmdRun.exe
selection:
  CommandLine|contains:
  - AddSecurityPackage
  - AdjustTokenPrivileges
  - Advapi32
  - CloseHandle
  - CreateProcessWithToken
  - CreatePseudoConsole
  - CreateRemoteThread
  - CreateThread
  - CreateUserThread
  - DangerousGetHandle
  - DuplicateTokenEx
  - EnumerateSecurityPackages
  - FreeHGlobal
  - FreeLibrary
  - GetDelegateForFunctionPointer
  - GetLogonSessionData
  - GetModuleHandle
  - GetProcAddress
  - GetProcessHandle
  - GetTokenInformation
  - ImpersonateLoggedOnUser
  - kernel32
  - LoadLibrary
  - memcpy
  - MiniDumpWriteDump
  - ntdll
  - OpenDesktop
  - OpenProcess
  - OpenProcessToken
  - OpenThreadToken
  - OpenWindowStation
  - PtrToString
  - QueueUserApc
  - ReadProcessMemory
  - RevertToSelf
  - RtlCreateUserThread
  - secur32
  - SetThreadToken
  - VirtualAlloc
  - VirtualFree
  - VirtualProtect
  - WaitForSingleObject
  - WriteInt32
  - WriteProcessMemory
  - ZeroFreeGlobalAllocUnicode
```

## MITRE ATT&CK
- T1106

## False Positives
- Some legitimate action or applications may use these functions. Investigate further to determine the legitimacy of the activity.

## References
- https://twitter.com/m417z/status/1566674631788007425

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-06
- **Rule ID:** `ba3f5c1b-6272-4119-9dbd-0bc8d21c2702`
- **Source file:** `windows/process_creation/proc_creation_win_susp_inline_win_api_access.yml`
