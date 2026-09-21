---
type: detection_rule
title: "Malicious PowerShell Keywords"
rule_id: f62176f3-8128-4faa-bf6c-83261322e5eb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Malicious PowerShell Keywords

## Description
Detects keywords from well-known PowerShell exploitation frameworks

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - AdjustTokenPrivileges
  - IMAGE_NT_OPTIONAL_HDR64_MAGIC
  - Metasploit
  - Microsoft.Win32.UnsafeNativeMethods
  - Mimikatz
  - MiniDumpWriteDump
  - PAGE_EXECUTE_READ
  - ReadProcessMemory.Invoke
  - SE_PRIVILEGE_ENABLED
  - SECURITY_DELEGATION
  - TOKEN_ADJUST_PRIVILEGES
  - TOKEN_ALL_ACCESS
  - TOKEN_ASSIGN_PRIMARY
  - TOKEN_DUPLICATE
  - TOKEN_ELEVATION
  - TOKEN_IMPERSONATE
  - TOKEN_INFORMATION_CLASS
  - TOKEN_PRIVILEGES
  - TOKEN_QUERY
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Depending on the scripts, this rule might require some initial tuning to fit the environment

## References
- https://adsecurity.org/?p=2921

## Metadata
- **Author:** Sean Metcalf (source), Florian Roth (Nextron Systems)
- **Date:** 2017-03-05
- **Rule ID:** `f62176f3-8128-4faa-bf6c-83261322e5eb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_malicious_keywords.yml`
