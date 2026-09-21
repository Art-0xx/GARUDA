---
type: detection_rule
title: "Tamper Windows Defender - ScriptBlockLogging"
rule_id: 14c71865-6cd3-44ae-adaa-1db923fae5f2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Tamper Windows Defender - ScriptBlockLogging

## Description
Detects PowerShell scripts attempting to disable scheduled scanning and other parts of Windows Defender ATP or set default actions to allow.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_options_disabling_* or all of selection_other_default_actions_*
selection_options_disabling_function:
  ScriptBlockText|contains:
  - -dbaf $true
  - -dbaf 1
  - -dbm $true
  - -dbm 1
  - -dips $true
  - -dips 1
  - -DisableArchiveScanning $true
  - -DisableArchiveScanning 1
  - -DisableBehaviorMonitoring $true
  - -DisableBehaviorMonitoring 1
  - -DisableBlockAtFirstSeen $true
  - -DisableBlockAtFirstSeen 1
  - -DisableCatchupFullScan $true
  - -DisableCatchupFullScan 1
  - -DisableCatchupQuickScan $true
  - -DisableCatchupQuickScan 1
  - -DisableIntrusionPreventionSystem $true
  - -DisableIntrusionPreventionSystem 1
  - -DisableIOAVProtection $true
  - -DisableIOAVProtection 1
  - -DisableRealtimeMonitoring $true
  - -DisableRealtimeMonitoring 1
  - -DisableRemovableDriveScanning $true
  - -DisableRemovableDriveScanning 1
  - -DisableScanningMappedNetworkDrivesForFullScan $true
  - -DisableScanningMappedNetworkDrivesForFullScan 1
  - -DisableScanningNetworkFiles $true
  - -DisableScanningNetworkFiles 1
  - -DisableScriptScanning $true
  - -DisableScriptScanning 1
  - -MAPSReporting $false
  - -MAPSReporting 0
  - -drdsc $true
  - -drdsc 1
  - -drtm $true
  - -drtm 1
  - -dscrptsc $true
  - -dscrptsc 1
  - -dsmndf $true
  - -dsmndf 1
  - -dsnf $true
  - -dsnf 1
  - -dss $true
  - -dss 1
selection_options_disabling_preference:
  ScriptBlockText|contains: Set-MpPreference
selection_other_default_actions_allow:
  ScriptBlockText|contains: Set-MpPreference
selection_other_default_actions_func:
  ScriptBlockText|contains:
  - HighThreatDefaultAction Allow
  - htdefac Allow
  - LowThreatDefaultAction Allow
  - ltdefac Allow
  - ModerateThreatDefaultAction Allow
  - mtdefac Allow
  - SevereThreatDefaultAction Allow
  - stdefac Allow
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate PowerShell scripts that disable Windows Defender for troubleshooting purposes. Must be investigated.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md
- https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference?view=windowsserver2022-ps
- https://bidouillesecurity.com/disable-windows-defender-in-powershell/

## Metadata
- **Author:** frack113, elhoim, Tim Shelton (fps, alias support), Swachchhanda Shrawan Poudel, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-01-16
- **Rule ID:** `14c71865-6cd3-44ae-adaa-1db923fae5f2`
- **Source file:** `windows/powershell/powershell_script/posh_ps_tamper_windows_defender_set_mp.yml`
