---
type: detection_rule
title: "PowerShell Defender Threat Severity Default Action Set to 'Allow' or 'NoAction'"
rule_id: 1e8a9b4d-3c2a-4f9b-8d1e-7c6a5b4f3d2e
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# PowerShell Defender Threat Severity Default Action Set to 'Allow' or 'NoAction'

## Description
Detects the use of PowerShell to execute the 'Set-MpPreference' cmdlet to configure Windows Defender's threat severity default action to 'Allow' (value '6') or 'NoAction' (value '9').
This is a highly suspicious configuration change that effectively disables Defender's ability to automatically mitigate threats of a certain severity level.
An attacker might use this technique via the command line to bypass defenses before executing payloads.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_action:
  CommandLine|contains:
  - -LowThreatDefaultAction
  - -ModerateThreatDefaultAction
  - -HighThreatDefaultAction
  - -SevereThreatDefaultAction
  - '-ltdefac '
  - '-mtdefac '
  - '-htdefac '
  - '-stdefac '
selection_cmdlet:
  CommandLine|contains: Set-MpPreference
selection_value:
  CommandLine|contains:
  - Allow
  - '6'
  - NoAction
  - '9'
```

## MITRE ATT&CK
- T1685

## False Positives
- Highly unlikely

## References
- https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference
- https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/unattend/security-malware-windows-defender-threatseveritydefaultaction
- https://research.splunk.com/endpoint/7215831c-8252-4ae3-8d43-db588e82f952
- https://gist.github.com/Dump-GUY/8daef859f382b895ac6fd0cf094555d2
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2025-07-11
- **Rule ID:** `1e8a9b4d-3c2a-4f9b-8d1e-7c6a5b4f3d2e`
- **Source file:** `windows/process_creation/proc_creation_win_defender_default_action_modified.yml`
