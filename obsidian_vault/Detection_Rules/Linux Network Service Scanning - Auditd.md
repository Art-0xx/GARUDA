---
type: detection_rule
title: "Linux Network Service Scanning - Auditd"
rule_id: 3761e026-f259-44e6-8826-719ed8079408
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1046]
---

# Linux Network Service Scanning - Auditd

## Description
Detects enumeration of local or remote network services.

## Log Source
```yaml
definition: Configure these rules https://github.com/Neo23x0/auditd/blob/e181243a7c708e9d579557d6f80e0ed3d3483b89/audit.rules#L182-L183
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  exe|endswith:
  - /telnet
  - /nmap
  - /netcat
  - /nc
  - /ncat
  - /nc.openbsd
  key: network_connect_4
  type: SYSCALL
```

## MITRE ATT&CK
- T1046

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1046/T1046.md

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-21
- **Rule ID:** `3761e026-f259-44e6-8826-719ed8079408`
- **Source file:** `linux/auditd/syscall/lnx_auditd_network_service_scanning.yml`
