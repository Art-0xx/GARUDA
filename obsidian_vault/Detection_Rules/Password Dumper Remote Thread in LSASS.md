---
type: detection_rule
title: "Password Dumper Remote Thread in LSASS"
rule_id: f239b326-2f41-4d6b-9dfa-c846a60ef505
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Password Dumper Remote Thread in LSASS

## Description
Detects password dumper activity by monitoring remote thread creation EventID 8 in combination with the lsass.exe process as TargetImage.
The process in field Process is the malicious program. A single execution can lead to hundreds of events.

## Log Source
```yaml
category: create_remote_thread
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  StartModule: ''
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Antivirus products

## References
- https://jpcertcc.github.io/ToolAnalysisResultSheet/details/WCE.htm

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2017-02-19
- **Rule ID:** `f239b326-2f41-4d6b-9dfa-c846a60ef505`
- **Source file:** `windows/create_remote_thread/create_remote_thread_win_susp_password_dumper_lsass.yml`
