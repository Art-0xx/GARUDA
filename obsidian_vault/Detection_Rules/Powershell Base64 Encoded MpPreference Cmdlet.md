---
type: detection_rule
title: "Powershell Base64 Encoded MpPreference Cmdlet"
rule_id: c6fb44c6-71f5-49e6-9462-1425d328aee3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Powershell Base64 Encoded MpPreference Cmdlet

## Description
Detects base64 encoded "MpPreference" PowerShell cmdlet code that tries to modifies or tamper with Windows Defender AV

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- CommandLine|base64offset|contains:
  - 'Add-MpPreference '
  - 'Set-MpPreference '
  - 'add-mppreference '
  - 'set-mppreference '
- CommandLine|contains:
  - QQBkAGQALQBNAHAAUAByAGUAZgBlAHIAZQBuAGMAZQAgA
  - EAZABkAC0ATQBwAFAAcgBlAGYAZQByAGUAbgBjAGUAIA
  - BAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAA
  - UwBlAHQALQBNAHAAUAByAGUAZgBlAHIAZQBuAGMAZQAgA
  - MAZQB0AC0ATQBwAFAAcgBlAGYAZQByAGUAbgBjAGUAIA
  - TAGUAdAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAA
  - YQBkAGQALQBtAHAAcAByAGUAZgBlAHIAZQBuAGMAZQAgA
  - EAZABkAC0AbQBwAHAAcgBlAGYAZQByAGUAbgBjAGUAIA
  - hAGQAZAAtAG0AcABwAHIAZQBmAGUAcgBlAG4AYwBlACAA
  - cwBlAHQALQBtAHAAcAByAGUAZgBlAHIAZQBuAGMAZQAgA
  - MAZQB0AC0AbQBwAHAAcgBlAGYAZQByAGUAbgBjAGUAIA
  - zAGUAdAAtAG0AcABwAHIAZQBmAGUAcgBlAG4AYwBlACAA
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/defender-endpoint/configure-process-opened-file-exclusions-microsoft-defender-antivirus
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md
- https://twitter.com/AdamTheAnalyst/status/1483497517119590403

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-04
- **Rule ID:** `c6fb44c6-71f5-49e6-9462-1425d328aee3`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_mppreference.yml`
