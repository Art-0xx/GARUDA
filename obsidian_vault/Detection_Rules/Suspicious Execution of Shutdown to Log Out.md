---
type: detection_rule
title: "Suspicious Execution of Shutdown to Log Out"
rule_id: ec290c06-9b6b-4338-8b6b-095c0f284f10
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1529]
---

# Suspicious Execution of Shutdown to Log Out

## Description
Detects the rare use of the command line tool shutdown to logoff a user

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: /l
  Image|endswith: \shutdown.exe
```

## MITRE ATT&CK
- T1529

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/9e5b12c4912c07562aec7500447b11fa3e17e254/atomics/T1529/T1529.md
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown

## Metadata
- **Author:** frack113
- **Date:** 2022-10-01
- **Rule ID:** `ec290c06-9b6b-4338-8b6b-095c0f284f10`
- **Source file:** `windows/process_creation/proc_creation_win_shutdown_logoff.yml`
