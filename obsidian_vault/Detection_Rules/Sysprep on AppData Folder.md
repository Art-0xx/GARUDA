---
type: detection_rule
title: "Sysprep on AppData Folder"
rule_id: d5b9ae7a-e6fc-405e-80ff-2ff9dcc64e7e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Sysprep on AppData Folder

## Description
Detects suspicious sysprep process start with AppData folder as target (as used by Trojan Syndicasec in Thrip report by Symantec)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: \AppData\
  Image|endswith: \sysprep.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://www.symantec.com/blogs/threat-intelligence/thrip-hits-satellite-telecoms-defense-targets
- https://app.any.run/tasks/61a296bb-81ad-4fee-955f-3b399f4aaf4b

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-06-22
- **Rule ID:** `d5b9ae7a-e6fc-405e-80ff-2ff9dcc64e7e`
- **Source file:** `windows/process_creation/proc_creation_win_sysprep_appdata.yml`
