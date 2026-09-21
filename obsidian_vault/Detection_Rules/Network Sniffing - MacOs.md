---
type: detection_rule
title: "Network Sniffing - MacOs"
rule_id: adc9bcc4-c39c-4f6b-a711-1884017bf043
platform: macos
level: informational
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1040]
---

# Network Sniffing - MacOs

## Description
Detects the usage of tooling to sniff network traffic.
An adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - /tcpdump
  - /tshark
```

## MITRE ATT&CK
- T1040

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1040/T1040.md

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-14
- **Rule ID:** `adc9bcc4-c39c-4f6b-a711-1884017bf043`
- **Source file:** `macos/process_creation/proc_creation_macos_network_sniffing.yml`
