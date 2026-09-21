---
type: detection_rule
title: "Hypervisor-protected Code Integrity (HVCI) Related Registry Tampering Via CommandLine"
rule_id: 6225c53a-a96e-4235-b28f-8d7997cd96eb
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Hypervisor-protected Code Integrity (HVCI) Related Registry Tampering Via CommandLine

## Description
Detects the tampering of Hypervisor-protected Code Integrity (HVCI) related registry values via command line tool reg.exe.
HVCI uses virtualization-based security to protect code integrity by ensuring that only trusted code can run in kernel mode.
Adversaries may tamper with HVCI to load malicious or unsigned drivers, which can be used to escalate privileges, maintain persistence, or evade security mechanisms.

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
selection_cli_base:
  CommandLine|contains: \DeviceGuard
selection_cli_key:
  CommandLine|contains:
  - EnableVirtualizationBasedSecurity
  - HypervisorEnforcedCodeIntegrity
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
  - reg.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate system administration tasks that require disabling HVCI for troubleshooting purposes when certain drivers or applications are incompatible with it.

## References
- https://www.sophos.com/en-us/blog/sharpening-the-knife-gold-blades-strategic-evolution
- https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-26
- **Rule ID:** `6225c53a-a96e-4235-b28f-8d7997cd96eb`
- **Source file:** `windows/process_creation/proc_creation_win_hvci_registry_tampering.yml`
