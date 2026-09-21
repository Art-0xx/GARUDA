---
type: detection_rule
title: "Security Privileges Enumeration Via Whoami.EXE"
rule_id: 97a80ec7-0e2f-4d05-9ef4-65760e634f6b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# Security Privileges Enumeration Via Whoami.EXE

## Description
Detects a whoami.exe executed with the /priv command line flag instructing the tool to show all current user privileges. This is often used after a privilege escalation attempt.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' /priv'
  - ' -priv'
selection_img:
- Image|endswith: \whoami.exe
- OriginalFileName: whoami.exe
```

## MITRE ATT&CK
- T1033

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/whoami

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-05-05
- **Rule ID:** `97a80ec7-0e2f-4d05-9ef4-65760e634f6b`
- **Source file:** `windows/process_creation/proc_creation_win_whoami_priv_discovery.yml`
