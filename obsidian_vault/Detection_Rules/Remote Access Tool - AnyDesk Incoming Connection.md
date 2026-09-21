---
type: detection_rule
title: "Remote Access Tool - AnyDesk Incoming Connection"
rule_id: d58ba5c6-0ed7-4b9d-a433-6878379efda9
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - AnyDesk Incoming Connection

## Description
Detects incoming connections to AnyDesk. This could indicate a potential remote attacker trying to connect to a listening instance of AnyDesk and use it as potential command and control channel.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \AnyDesk.exe
  - \AnyDeskMSI.exe
  Initiated: 'false'
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate incoming connections (e.g. sysadmin activity). Most of the time I would expect outgoing connections (initiated locally).

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-2---anydesk-files-detected-test-on-windows
- https://asec.ahnlab.com/en/40263/

## Metadata
- **Author:** @d4ns4n_ (Wuerth-Phoenix)
- **Date:** 2024-09-02
- **Rule ID:** `d58ba5c6-0ed7-4b9d-a433-6878379efda9`
- **Source file:** `windows/network_connection/net_connection_win_remote_access_tools_anydesk_incoming_connection.yml`
