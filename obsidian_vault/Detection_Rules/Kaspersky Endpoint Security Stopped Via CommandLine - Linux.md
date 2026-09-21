---
type: detection_rule
title: "Kaspersky Endpoint Security Stopped Via CommandLine - Linux"
rule_id: 36388120-b3f1-4ce9-b50b-280d9a7f4c04
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1685]
---

# Kaspersky Endpoint Security Stopped Via CommandLine - Linux

## Description
Detects execution of the Kaspersky init.d stop script on Linux systems either directly or via systemctl.
This activity may indicate a manual interruption of the antivirus service by an administrator, or it could be a sign of potential tampering or evasion attempts by malicious actors.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - stop
  - kesl
  Image|endswith:
  - /systemctl
  - /bash
  - /sh
```

## MITRE ATT&CK
- T1685

## False Positives
- System administrator manually stopping Kaspersky services

## References
- https://support.kaspersky.com/KES4Linux/12.0.0/en-US/197929.htm

## Metadata
- **Author:** Milad Cheraghi
- **Date:** 2025-10-18
- **Rule ID:** `36388120-b3f1-4ce9-b50b-280d9a7f4c04`
- **Source file:** `linux/process_creation/proc_creation_lnx_av_kaspersky_av_disabled.yml`
