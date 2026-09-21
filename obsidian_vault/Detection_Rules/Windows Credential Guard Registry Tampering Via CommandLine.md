---
type: detection_rule
title: "Windows Credential Guard Registry Tampering Via CommandLine"
rule_id: c17d47b7-dcd6-4109-87eb-d1817bd4cbc9
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Credential Guard Registry Tampering Via CommandLine

## Description
Detects attempts to add, modify, or delete Windows Credential Guard related registry keys or values via command line tools such as Reg.exe or PowerShell.
Credential Guard uses virtualization-based security to isolate secrets so that only privileged system software can access them.
Adversaries may disable Credential Guard to gain access to sensitive credentials stored in the system, such as NTLM hashes and Kerberos tickets, which can be used for lateral movement and privilege escalation.
The rule matches suspicious command lines that target DeviceGuard or LSA registry paths and manipulate keys like EnableVirtualizationBasedSecurity, RequirePlatformSecurityFeatures, or LsaCfgFlags.
Such activity may indicate an attempt to disable or tamper with Credential Guard, potentially exposing sensitive credentials for misuse.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - 'add '
  - 'New-ItemProperty '
  - 'Set-ItemProperty '
  - 'si '
  - 'delete '
  - 'del '
  - 'Remove-ItemProperty '
  - 'rp '
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
  - reg.exe
selection_key_base:
  CommandLine|contains:
  - \Control\DeviceGuard
  - \Control\LSA
  - Software\Policies\Microsoft\Windows\DeviceGuard
selection_key_specific:
  CommandLine|contains:
  - EnableVirtualizationBasedSecurity
  - RequirePlatformSecurityFeatures
  - LsaCfgFlags
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://woshub.com/disable-credential-guard-windows/
- https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-deviceguard

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-26
- **Rule ID:** `c17d47b7-dcd6-4109-87eb-d1817bd4cbc9`
- **Source file:** `windows/process_creation/proc_creation_win_credential_guard_registry_tampering.yml`
