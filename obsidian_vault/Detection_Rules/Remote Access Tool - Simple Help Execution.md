---
type: detection_rule
title: "Remote Access Tool - Simple Help Execution"
rule_id: 95e60a2b-4705-444b-b7da-ba0ea81a3ee2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - Simple Help Execution

## Description
An adversary may use legitimate desktop support and remote access software, such as Team Viewer, Go2Assist, LogMein, AmmyyAdmin, etc, to establish an interactive command and control channel to target systems within networks.
These services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment.
Remote access tools like VNC, Ammyy, and Teamviewer are used frequently when compared with other legitimate software commonly used by adversaries. (Citation: Symantec Living off the Land)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - \JWrapper-Remote Access\
  - \JWrapper-Remote Support\
  Image|endswith: \SimpleService.exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate usage of the tool

## References
- https://www.huntress.com/blog/slashandgrab-screen-connect-post-exploitation-in-the-wild-cve-2024-1709-cve-2024-1708

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-02-23
- **Rule ID:** `95e60a2b-4705-444b-b7da-ba0ea81a3ee2`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_simple_help.yml`
