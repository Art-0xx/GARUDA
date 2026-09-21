---
type: detection_rule
title: "Audio Capture via SoundRecorder"
rule_id: 83865853-59aa-449e-9600-74b9d89a6d6e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1123]
---

# Audio Capture via SoundRecorder

## Description
Detect attacker collecting audio via SoundRecorder application.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: /FILE
  Image|endswith: \SoundRecorder.exe
```

## MITRE ATT&CK
- T1123

## False Positives
- Legitimate audio capture by legitimate user.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1123/T1123.md
- https://eqllib.readthedocs.io/en/latest/analytics/f72a98cb-7b3d-4100-99c3-a138b6e9ff6e.html

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `83865853-59aa-449e-9600-74b9d89a6d6e`
- **Source file:** `windows/process_creation/proc_creation_win_soundrecorder_audio_capture.yml`
