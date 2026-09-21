---
type: detection_rule
title: "Mask System Power Settings Via Systemctl"
rule_id: c172b7b5-f3a1-4af2-90b7-822c63df86cb
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1653]
---

# Mask System Power Settings Via Systemctl

## Description
Detects the use of systemctl mask to disable system power management targets such as suspend, hibernate, or hybrid sleep.
Adversaries may mask these targets to prevent a system from entering sleep or shutdown states, ensuring their malicious processes remain active and uninterrupted.
This behavior can be associated with persistence or defense evasion, as it impairs normal system power operations to maintain long-term access or avoid termination of malicious activity.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_power_options:
  CommandLine|contains:
  - suspend.target
  - hibernate.target
  - hybrid-sleep.target
selection_systemctl:
  CommandLine|contains: ' mask'
  Image|endswith: /systemctl
```

## MITRE ATT&CK
- T1653

## False Positives
- Unlikely

## References
- https://www.man7.org/linux/man-pages/man1/systemctl.1.html
- https://linux-audit.com/systemd/faq/what-is-the-difference-between-systemctl-disable-and-systemctl-mask/

## Metadata
- **Author:** Milad Cheraghi, Nasreddine Bencherchali
- **Date:** 2025-10-17
- **Rule ID:** `c172b7b5-f3a1-4af2-90b7-822c63df86cb`
- **Source file:** `linux/process_creation/proc_creation_lnx_systemctl_mask_power_settings.yml`
