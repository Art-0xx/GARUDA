---
type: detection_rule
title: "Suspicious Remote Child Process From Outlook"
rule_id: e212d415-0e93-435f-9e1a-f29005bb4723
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1202]
---

# Suspicious Remote Child Process From Outlook

## Description
Detects a suspicious child process spawning from Outlook where the image is located in a remote location (SMB/WebDav shares).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|startswith: \\\\
  ParentImage|endswith: \outlook.exe
```

## MITRE ATT&CK
- T1059
- T1202

## False Positives
- Unknown

## References
- https://github.com/sensepost/ruler
- https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=49

## Metadata
- **Author:** Markus Neis, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2018-12-27
- **Rule ID:** `e212d415-0e93-435f-9e1a-f29005bb4723`
- **Source file:** `windows/process_creation/proc_creation_win_office_outlook_susp_child_processes_remote.yml`
