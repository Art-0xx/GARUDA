---
type: detection_rule
title: "Remote Access Tool - ScreenConnect Server Web Shell Execution"
rule_id: b19146a3-25d4-41b4-928b-1e2a92641b1b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1190]
---

# Remote Access Tool - ScreenConnect Server Web Shell Execution

## Description
Detects potential web shell execution from the ScreenConnect server process.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \csc.exe
  ParentImage|endswith: \ScreenConnect.Service.exe
```

## MITRE ATT&CK
- T1190

## False Positives
- Unlikely

## References
- https://blackpointcyber.com/resources/blog/breaking-through-the-screen/
- https://www.connectwise.com/company/trust/security-bulletins/connectwise-screenconnect-23.9.8

## Metadata
- **Author:** Jason Rathbun (Blackpoint Cyber)
- **Date:** 2024-02-26
- **Rule ID:** `b19146a3-25d4-41b4-928b-1e2a92641b1b`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_screenconnect_webshell.yml`
