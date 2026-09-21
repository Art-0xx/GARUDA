---
type: detection_rule
title: "Shell Invocation via Apt - Linux"
rule_id: bb382fd5-b454-47ea-a264-1828e4c766d6
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083]
---

# Shell Invocation via Apt - Linux

## Description
Detects the use of the "apt" and "apt-get" commands to execute a shell or proxy commands.
Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: APT::Update::Pre-Invoke::=
  Image|endswith:
  - /apt
  - /apt-get
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/apt/
- https://gtfobins.github.io/gtfobins/apt-get/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-28
- **Rule ID:** `bb382fd5-b454-47ea-a264-1828e4c766d6`
- **Source file:** `linux/process_creation/proc_creation_lnx_apt_shell_execution.yml`
