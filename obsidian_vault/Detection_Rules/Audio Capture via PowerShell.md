---
type: detection_rule
title: "Audio Capture via PowerShell"
rule_id: 932fb0d8-692b-4b0f-a26e-5643a50fe7d6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1123]
---

# Audio Capture via PowerShell

## Description
Detects audio capture via PowerShell Cmdlet.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - WindowsAudioDevice-Powershell-Cmdlet
  - Toggle-AudioDevice
  - 'Get-AudioDevice '
  - 'Set-AudioDevice '
  - 'Write-AudioDevice '
```

## MITRE ATT&CK
- T1123

## False Positives
- Legitimate audio capture by legitimate user.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1123/T1123.md
- https://eqllib.readthedocs.io/en/latest/analytics/ab7a6ef4-0983-4275-a4f1-5c6bd3c31c23.html
- https://github.com/frgnca/AudioDeviceCmdlets

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-10-24
- **Rule ID:** `932fb0d8-692b-4b0f-a26e-5643a50fe7d6`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_audio_capture.yml`
