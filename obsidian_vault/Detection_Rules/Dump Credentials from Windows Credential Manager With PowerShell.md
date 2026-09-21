---
type: detection_rule
title: "Dump Credentials from Windows Credential Manager With PowerShell"
rule_id: 99c49d9c-34ea-45f7-84a7-4751ae6b2cbc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555]
---

# Dump Credentials from Windows Credential Manager With PowerShell

## Description
Adversaries may search for common password storage locations to obtain user credentials.
Passwords are stored in several places on a system, depending on the operating system or application holding the credentials.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_kiddie:
  ScriptBlockText|contains:
  - Get-PasswordVaultCredentials
  - Get-CredManCreds
selection_rename_Password:
  ScriptBlockText|contains|all:
  - New-Object
  - Windows.Security.Credentials.PasswordVault
selection_rename_credman:
  ScriptBlockText|contains|all:
  - New-Object
  - Microsoft.CSharp.CSharpCodeProvider
  - '[System.Runtime.InteropServices.RuntimeEnvironment]::GetRuntimeDirectory())'
  - Collections.ArrayList
  - System.CodeDom.Compiler.CompilerParameters
```

## MITRE ATT&CK
- T1555

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1555/T1555.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-20
- **Rule ID:** `99c49d9c-34ea-45f7-84a7-4751ae6b2cbc`
- **Source file:** `windows/powershell/powershell_script/posh_ps_dump_password_windows_credential_manager.yml`
