---
type: detection_rule
title: "MacOS Emond Launch Daemon"
rule_id: 23c43900-e732-45a4-8354-63e4a6c187ce
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1546.014]
---

# MacOS Emond Launch Daemon

## Description
Detects additions to the Emond Launch Daemon that adversaries may use to gain persistence and elevate privileges.

## Log Source
```yaml
category: file_event
product: macos
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  TargetFilename|contains: /etc/emond.d/rules/
  TargetFilename|endswith: .plist
selection_2:
  TargetFilename|contains: /private/var/db/emondClients/
```

## MITRE ATT&CK
- T1546.014

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.014/T1546.014.md
- https://posts.specterops.io/leveraging-emond-on-macos-for-persistence-a040a2785124

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-23
- **Rule ID:** `23c43900-e732-45a4-8354-63e4a6c187ce`
- **Source file:** `macos/file_event/file_event_macos_emond_launch_daemon.yml`
