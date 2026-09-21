---
type: detection_rule
title: "Remote Access Tool - AnyDesk Silent Installation"
rule_id: 114e7f1c-f137-48c8-8f54-3088c24ce4b9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - AnyDesk Silent Installation

## Description
Detects AnyDesk Remote Desktop silent installation. Which can be used by attackers to gain remote access.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - --install
  - --start-with-win
  - --silent
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate deployment of AnyDesk

## References
- https://twitter.com/TheDFIRReport/status/1423361119926816776?s=20
- https://support.anydesk.com/Automatic_Deployment

## Metadata
- **Author:** Ján Trenčanský
- **Date:** 2021-08-06
- **Rule ID:** `114e7f1c-f137-48c8-8f54-3088c24ce4b9`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_anydesk_silent_install.yml`
