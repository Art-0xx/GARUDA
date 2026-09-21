---
type: detection_rule
title: "Bpfdoor TCP Ports Redirect"
rule_id: 70b4156e-50fc-4523-aa50-c9dddf1993fc
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1686]
---

# Bpfdoor TCP Ports Redirect

## Description
All TCP traffic on particular port from attacker is routed to different port. ex. '/sbin/iptables -t nat -D PREROUTING -p tcp -s 192.168.1.1 --dport 22 -j REDIRECT --to-ports 42392'
The traffic looks like encrypted SSH communications going to TCP port 22, but in reality is being directed to the shell port once it hits the iptables rule for the attacker host only.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
cmd:
  a0|endswith: iptables
  a1: -t
  a2: nat
  type: EXECVE
condition: cmd and keywords
keywords:
- --to-ports 42
- --to-ports 43
```

## MITRE ATT&CK
- T1686

## False Positives
- Legitimate ports redirect

## References
- https://www.sandflysecurity.com/blog/bpfdoor-an-evasive-linux-backdoor-technical-analysis/
- https://www.elastic.co/security-labs/a-peek-behind-the-bpfdoor

## Metadata
- **Author:** Rafal Piasecki
- **Date:** 2022-08-10
- **Rule ID:** `70b4156e-50fc-4523-aa50-c9dddf1993fc`
- **Source file:** `linux/auditd/execve/lnx_auditd_bpfdoor_port_redirect.yml`
