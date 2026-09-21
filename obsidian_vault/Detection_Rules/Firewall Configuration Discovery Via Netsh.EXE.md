---
type: detection_rule
title: "Firewall Configuration Discovery Via Netsh.EXE"
rule_id: 0e4164da-94bc-450d-a7be-a4b176179f1f
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1016]
---

# Firewall Configuration Discovery Via Netsh.EXE

## Description
Adversaries may look for details about the network configuration and settings of systems they access or through information discovery of remote systems

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
  - 'config '
  - 'state '
  - 'rule '
  - name=all
  CommandLine|contains|all:
  - netsh
  - 'show '
  - 'firewall '
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1016

## False Positives
- Administrative activity

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1016/T1016.md#atomic-test-2---list-windows-firewall-rules
- https://ss64.com/nt/netsh.html

## Metadata
- **Author:** frack113, Christopher Peacock '@securepeacock', SCYTHE '@scythe_io'
- **Date:** 2021-12-07
- **Rule ID:** `0e4164da-94bc-450d-a7be-a4b176179f1f`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_rules_discovery.yml`
