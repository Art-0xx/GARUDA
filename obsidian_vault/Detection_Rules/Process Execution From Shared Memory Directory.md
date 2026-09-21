---
type: detection_rule
title: "Process Execution From Shared Memory Directory"
rule_id: 5cd16c8f-44a6-4654-81e7-a84d6db507d4
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1027.011]
---

# Process Execution From Shared Memory Directory

## Description
Detects the execution of a binary from the Linux shared memory directory /dev/shm.
This directory is a tmpfs mount backed entirely by RAM and is abused by attackers for fileless malware staging because files written there never touch physical disk and may evade disk-based detection.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|startswith: /dev/shm/
```

## MITRE ATT&CK
- T1027.011

## False Positives
- Unlikely in production environments; some container runtimes or IPC frameworks may use /dev/shm for inter-process communication but should not spawn executables.

## References
- https://www.sysdig.com/blog/containers-read-only-fileless-malware
- https://unfinished.bike/fun-with-the-new-bpfdoor-2023
- https://asiapacificdefencereporter.com/wp-content/uploads/2023/08/Final-CRWD-2023-Threat-Hunting-Report.pdf
- https://www.crowdstrike.com/en-us/blog/how-to-hunt-for-decisivearchitect-and-justforfun-implant/
- https://www.linkedin.com/posts/avradeep_malware-apt-infostealer-activity-7373203959697719296-JR-7

## Metadata
- **Author:** Stan Beukers
- **Date:** 2026-06-20
- **Rule ID:** `5cd16c8f-44a6-4654-81e7-a84d6db507d4`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_exec_from_dev_shm.yml`
