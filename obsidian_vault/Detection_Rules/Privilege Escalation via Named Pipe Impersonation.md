---
type: detection_rule
title: "Privilege Escalation via Named Pipe Impersonation"
rule_id: 9bd04a79-dabe-4f1f-a5ff-92430265c96b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021]
---

# Privilege Escalation via Named Pipe Impersonation

## Description
Detects a remote file copy attempt to a hidden network share. This may indicate lateral movement or data staging activity.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_args:
  CommandLine|contains|all:
  - echo
  - '>'
  - \\\\.\\pipe\\
selection_name:
- Image|endswith:
  - \cmd.exe
  - \powershell.exe
- OriginalFileName:
  - Cmd.Exe
  - PowerShell.EXE
```

## MITRE ATT&CK
- T1021

## False Positives
- Other programs that cause these patterns (please report)

## References
- https://www.elastic.co/guide/en/security/current/privilege-escalation-via-named-pipe-impersonation.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-27
- **Rule ID:** `9bd04a79-dabe-4f1f-a5ff-92430265c96b`
- **Source file:** `windows/process_creation/proc_creation_win_susp_priv_escalation_via_named_pipe.yml`
