---
type: detection_rule
title: "Suspicious Execution of Shutdown"
rule_id: 34ebb878-1b15-4895-b352-ca2eeb99b274
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1529]
---

# Suspicious Execution of Shutdown

## Description
Use of the commandline to shutdown or reboot windows

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
  - '/r '
  - '/s '
  Image|endswith: \shutdown.exe
```

## MITRE ATT&CK
- T1529

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1529/T1529.md
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown

## Metadata
- **Author:** frack113
- **Date:** 2022-01-01
- **Rule ID:** `34ebb878-1b15-4895-b352-ca2eeb99b274`
- **Source file:** `windows/process_creation/proc_creation_win_shutdown_execution.yml`
