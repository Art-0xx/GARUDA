---
type: detection_rule
title: "Powershell Defender Disable Scan Feature"
rule_id: 1ec65a5f-9473-4f12-97da-622044d6df21
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Powershell Defender Disable Scan Feature

## Description
Detects requests to disable Microsoft Defender features using PowerShell commands

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_cli_* or 1 of selection_encoded_*
selection_cli_cmdlet:
  CommandLine|contains:
  - 'Add-MpPreference '
  - 'Set-MpPreference '
selection_cli_option:
  CommandLine|contains:
  - 'DisableArchiveScanning '
  - 'DisableRealtimeMonitoring '
  - 'DisableIOAVProtection '
  - 'DisableBehaviorMonitoring '
  - 'DisableBlockAtFirstSeen '
  - 'DisableCatchupFullScan '
  - 'DisableCatchupQuickScan '
selection_cli_value:
  CommandLine|contains:
  - $true
  - ' 1 '
selection_encoded_direct:
  CommandLine|contains:
  - RABpAHMAYQBiAGwAZQBSAGUAYQBsAHQAaQBtAGUATQBvAG4AaQB0AG8AcgBpAG4AZwAgA
  - QAaQBzAGEAYgBsAGUAUgBlAGEAbAB0AGkAbQBlAE0AbwBuAGkAdABvAHIAaQBuAGcAIA
  - EAGkAcwBhAGIAbABlAFIAZQBhAGwAdABpAG0AZQBNAG8AbgBpAHQAbwByAGkAbgBnACAA
  - RABpAHMAYQBiAGwAZQBJAE8AQQBWAFAAcgBvAHQAZQBjAHQAaQBvAG4AIA
  - QAaQBzAGEAYgBsAGUASQBPAEEAVgBQAHIAbwB0AGUAYwB0AGkAbwBuACAA
  - EAGkAcwBhAGIAbABlAEkATwBBAFYAUAByAG8AdABlAGMAdABpAG8AbgAgA
  - RABpAHMAYQBiAGwAZQBCAGUAaABhAHYAaQBvAHIATQBvAG4AaQB0AG8AcgBpAG4AZwAgA
  - QAaQBzAGEAYgBsAGUAQgBlAGgAYQB2AGkAbwByAE0AbwBuAGkAdABvAHIAaQBuAGcAIA
  - EAGkAcwBhAGIAbABlAEIAZQBoAGEAdgBpAG8AcgBNAG8AbgBpAHQAbwByAGkAbgBnACAA
  - RABpAHMAYQBiAGwAZQBCAGwAbwBjAGsAQQB0AEYAaQByAHMAdABTAGUAZQBuACAA
  - QAaQBzAGEAYgBsAGUAQgBsAG8AYwBrAEEAdABGAGkAcgBzAHQAUwBlAGUAbgAgA
  - EAGkAcwBhAGIAbABlAEIAbABvAGMAawBBAHQARgBpAHIAcwB0AFMAZQBlAG4AIA
  - ZABpAHMAYQBiAGwAZQByAGUAYQBsAHQAaQBtAGUAbQBvAG4AaQB0AG8AcgBpAG4AZwAgA
  - QAaQBzAGEAYgBsAGUAcgBlAGEAbAB0AGkAbQBlAG0AbwBuAGkAdABvAHIAaQBuAGcAIA
  - kAGkAcwBhAGIAbABlAHIAZQBhAGwAdABpAG0AZQBtAG8AbgBpAHQAbwByAGkAbgBnACAA
  - ZABpAHMAYQBiAGwAZQBpAG8AYQB2AHAAcgBvAHQAZQBjAHQAaQBvAG4AIA
  - QAaQBzAGEAYgBsAGUAaQBvAGEAdgBwAHIAbwB0AGUAYwB0AGkAbwBuACAA
  - kAGkAcwBhAGIAbABlAGkAbwBhAHYAcAByAG8AdABlAGMAdABpAG8AbgAgA
  - ZABpAHMAYQBiAGwAZQBiAGUAaABhAHYAaQBvAHIAbQBvAG4AaQB0AG8AcgBpAG4AZwAgA
  - QAaQBzAGEAYgBsAGUAYgBlAGgAYQB2AGkAbwByAG0AbwBuAGkAdABvAHIAaQBuAGcAIA
  - kAGkAcwBhAGIAbABlAGIAZQBoAGEAdgBpAG8AcgBtAG8AbgBpAHQAbwByAGkAbgBnACAA
  - ZABpAHMAYQBiAGwAZQBiAGwAbwBjAGsAYQB0AGYAaQByAHMAdABzAGUAZQBuACAA
  - QAaQBzAGEAYgBsAGUAYgBsAG8AYwBrAGEAdABmAGkAcgBzAHQAcwBlAGUAbgAgA
  - kAGkAcwBhAGIAbABlAGIAbABvAGMAawBhAHQAZgBpAHIAcwB0AHMAZQBlAG4AIA
  - RABpAHMAYQBiAGwAZQBDAGEAdABjAGgAdQBwAEYAdQBsAGwAUwBjAGEAbgA
  - RABpAHMAYQBiAGwAZQBDAGEAdABjAGgAdQBwAFEAdQBpAGMAawBTAGMAYQBuAA
  - RABpAHMAYQBiAGwAZQBBAHIAYwBoAGkAdgBlAFMAYwBhAG4AbgBpAG4AZwA
selection_encoded_modifier:
  CommandLine|base64offset|contains:
  - 'disablearchivescanning '
  - 'DisableArchiveScanning '
  - 'disablebehaviormonitoring '
  - 'DisableBehaviorMonitoring '
  - 'disableblockatfirstseen '
  - 'DisableBlockAtFirstSeen '
  - 'disablecatchupfullscan '
  - 'DisableCatchupFullScan '
  - 'disablecatchupquickscan '
  - 'DisableCatchupQuickScan '
  - 'disableioavprotection '
  - 'DisableIOAVProtection '
  - 'disablerealtimemonitoring '
  - 'DisableRealtimeMonitoring '
```

## MITRE ATT&CK
- T1685

## False Positives
- Possible administrative activity
- Other Cmdlets that may use the same parameters

## References
- https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference?view=windowsserver2022-ps
- https://www.virustotal.com/gui/file/d609799091731d83d75ec5d1f030571af20c45efeeb94840b67ea09a3283ab65/behavior/C2AE
- https://www.virustotal.com/gui/search/content%253A%2522Set-MpPreference%2520-Disable%2522/files

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-03
- **Rule ID:** `1ec65a5f-9473-4f12-97da-622044d6df21`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_defender_disable_feature.yml`
