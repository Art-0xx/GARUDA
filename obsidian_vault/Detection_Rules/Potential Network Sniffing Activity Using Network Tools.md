---
type: detection_rule
title: "Potential Network Sniffing Activity Using Network Tools"
rule_id: ba1f7802-adc7-48b4-9ecb-81e227fddfd5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1040]
---

# Potential Network Sniffing Activity Using Network Tools

## Description
Detects potential network sniffing via use of network tools such as "tshark", "windump".
Network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection.
An adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_tshark:
  CommandLine|contains: -i
  Image|endswith: \tshark.exe
selection_windump:
  Image|endswith: \windump.exe
```

## MITRE ATT&CK
- T1040

## False Positives
- Legitimate administration activity to troubleshoot network issues

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1040/T1040.md

## Metadata
- **Author:** Timur Zinniatullin, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-10-21
- **Rule ID:** `ba1f7802-adc7-48b4-9ecb-81e227fddfd5`
- **Source file:** `windows/process_creation/proc_creation_win_susp_network_sniffing.yml`
