---
type: detection_rule
title: "Suspicious Commands Linux"
rule_id: 1543ae20-cbdf-4ec1-8d12-7664d667a825
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# Suspicious Commands Linux

## Description
Detects relevant commands often related to malware or hacking activity

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
cmd1:
  a0: chmod
  a1: 777
  type: EXECVE
cmd2:
  a0: chmod
  a1: u+s
  type: EXECVE
cmd3:
  a0: cp
  a1: /bin/ksh
  type: EXECVE
cmd4:
  a0: cp
  a1: /bin/sh
  type: EXECVE
condition: 1 of cmd*
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Admin activity

## References
- Internal Research - mostly derived from exploit code including code in MSF

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-12-12
- **Rule ID:** `1543ae20-cbdf-4ec1-8d12-7664d667a825`
- **Source file:** `linux/auditd/execve/lnx_auditd_susp_cmds.yml`
