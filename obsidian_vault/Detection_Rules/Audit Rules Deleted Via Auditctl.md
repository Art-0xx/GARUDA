---
type: detection_rule
title: "Audit Rules Deleted Via Auditctl"
rule_id: bed26dea-4525-47f4-b24a-76e30e44ffb0
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1685.004]
---

# Audit Rules Deleted Via Auditctl

## Description
Detects the execution of 'auditctl' with the '-D' command line parameter, which deletes all configured audit rules and watches on Linux systems.
This technique is commonly used by attackers to disable audit logging and cover their tracks by removing monitoring capabilities.
Removal of audit rules can significantly impair detection of malicious activities on the affected system.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|re: -D
  Image|endswith: /auditctl
```

## MITRE ATT&CK
- T1685.004

## False Positives
- An administrator troubleshooting. Investigate all attempts.

## References
- https://www.atomicredteam.io/atomic-red-team/atomics/T1562.012
- https://linux.die.net/man/8/auditct

## Metadata
- **Author:** Mohamed LAKRI
- **Date:** 2025-10-17
- **Rule ID:** `bed26dea-4525-47f4-b24a-76e30e44ffb0`
- **Source file:** `linux/process_creation/proc_creation_lnx_auditctl_clear_rules.yml`
