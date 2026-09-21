---
type: detection_rule
title: "Bypass UAC via WSReset.exe"
rule_id: d797268e-28a9-49a7-b9a8-2f5039011c5c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Bypass UAC via WSReset.exe

## Description
Detects use of WSReset.exe to bypass User Account Control (UAC). Adversaries use this technique to execute privileged processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
- Image|endswith: \conhost.exe
- OriginalFileName: CONHOST.EXE
selection:
  ParentImage|endswith: \wsreset.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown sub processes of Wsreset.exe

## References
- https://eqllib.readthedocs.io/en/latest/analytics/532b5ed4-7930-11e9-8f5c-d46d6d62a49e.html
- https://lolbas-project.github.io/lolbas/Binaries/Wsreset/
- https://www.activecyber.us/activelabs/windows-uac-bypass
- https://twitter.com/ReaQta/status/1222548288731217921

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Tony Lambert), oscd.community, Florian Roth
- **Date:** 2019-10-24
- **Rule ID:** `d797268e-28a9-49a7-b9a8-2f5039011c5c`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_wsreset.yml`
