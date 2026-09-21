---
type: detection_rule
title: "Interactive Bash Suspicious Children"
rule_id: ea3ecad2-db86-4a89-ad0b-132a10d2db55
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004, attack.t1036]
---

# Interactive Bash Suspicious Children

## Description
Detects suspicious interactive bash as a parent to rather uncommon child processes

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
anomaly1:
  CommandLine|contains:
  - '-c import '
  - base64
  - pty.spawn
anomaly2:
  Image|endswith:
  - whoami
  - iptables
  - /ncat
  - /nc
  - /netcat
condition: selection and 1 of anomaly*
selection:
  ParentCommandLine: bash -i
```

## MITRE ATT&CK
- T1059.004
- T1036

## False Positives
- Legitimate software that uses these patterns

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-14
- **Rule ID:** `ea3ecad2-db86-4a89-ad0b-132a10d2db55`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_interactive_bash.yml`
