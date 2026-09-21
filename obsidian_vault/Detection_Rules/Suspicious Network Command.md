---
type: detection_rule
title: "Suspicious Network Command"
rule_id: a29c1813-ab1f-4dde-b489-330b952e91ae
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1016]
---

# Suspicious Network Command

## Description
Adversaries may look for details about the network configuration and settings of systems they access or through information discovery of remote systems

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|re:
  - ipconfig\s+/all
  - netsh\s+interface show interface
  - arp\s+-a
  - nbtstat\s+-n
  - net\s+config
  - route\s+print
```

## MITRE ATT&CK
- T1016

## False Positives
- Administrator, hotline ask to user

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1016/T1016.md#atomic-test-1---system-network-configuration-discovery-on-windows

## Metadata
- **Author:** frack113, Christopher Peacock '@securepeacock', SCYTHE '@scythe_io'
- **Date:** 2021-12-07
- **Rule ID:** `a29c1813-ab1f-4dde-b489-330b952e91ae`
- **Source file:** `windows/process_creation/proc_creation_win_susp_network_command.yml`
