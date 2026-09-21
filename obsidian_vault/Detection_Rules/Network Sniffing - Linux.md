---
type: detection_rule
title: "Network Sniffing - Linux"
rule_id: f4d3748a-65d1-4806-bd23-e25728081d01
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1040]
---

# Network Sniffing - Linux

## Description
Network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection.
An adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  a0: tcpdump
  a1: -c
  a3|contains: -i
  type: execve
selection_2:
  a0: tshark
  a1: -c
  a3: -i
  type: execve
```

## MITRE ATT&CK
- T1040

## False Positives
- Legitimate administrator or user uses network sniffing tool for legitimate reasons.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1040/T1040.md

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `f4d3748a-65d1-4806-bd23-e25728081d01`
- **Source file:** `linux/auditd/execve/lnx_auditd_network_sniffing.yml`
