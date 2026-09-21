---
type: detection_rule
title: "Enumerate Credentials from Windows Credential Manager With PowerShell"
rule_id: 603c6630-5225-49c1-8047-26c964553e0e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555]
---

# Enumerate Credentials from Windows Credential Manager With PowerShell

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
condition: all of selection_*
selection_cmd:
  ScriptBlockText|contains|all:
  - vaultcmd
  - '/listcreds:'
selection_option:
  ScriptBlockText|contains:
  - Windows Credentials
  - Web Credentials
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
- **Rule ID:** `603c6630-5225-49c1-8047-26c964553e0e`
- **Source file:** `windows/powershell/powershell_script/posh_ps_enumerate_password_windows_credential_manager.yml`
