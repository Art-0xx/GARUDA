---
type: detection_rule
title: "Firewall Rule Update Via Netsh.EXE"
rule_id: a70dcb37-3bee-453a-99df-d0c683151be6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Firewall Rule Update Via Netsh.EXE

## Description
Detects execution of netsh with the "advfirewall" and the "set" option in order to set new values for properties of a existing rule

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ' firewall '
  - ' set '
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## False Positives
- Legitimate administration activity
- Software installations and removal

## References
- https://ss64.com/nt/netsh.html

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-07-18
- **Rule ID:** `a70dcb37-3bee-453a-99df-d0c683151be6`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_set_rule.yml`
