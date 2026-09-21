---
type: detection_rule
title: "Linux Capabilities Discovery"
rule_id: fe10751f-1995-40a5-aaa2-c97ccb4123fe
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083, attack.t1548]
---

# Linux Capabilities Discovery

## Description
Detects attempts to discover the files with setuid/setgid capability on them. That would allow adversary to escalate their privileges.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  a0: getcap
  a1: -r
  a2: /
  type: EXECVE
```

## MITRE ATT&CK
- T1083
- T1548

## False Positives
- Unknown

## References
- https://man7.org/linux/man-pages/man8/getcap.8.html
- https://www.hackingarticles.in/linux-privilege-escalation-using-capabilities/
- https://mn3m.info/posts/suid-vs-capabilities/
- https://int0x33.medium.com/day-44-linux-capabilities-privilege-escalation-via-openssl-with-selinux-enabled-and-enforced-74d2bec02099

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2021-11-28
- **Rule ID:** `fe10751f-1995-40a5-aaa2-c97ccb4123fe`
- **Source file:** `linux/auditd/execve/lnx_auditd_capabilities_discovery.yml`
