---
type: detection_rule
title: "Special File Creation via Mknod Syscall"
rule_id: 710bdbce-495d-491d-9a8f-7d0d88d2b41e
platform: linux
level: low
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1543.003]
---

# Special File Creation via Mknod Syscall

## Description
Detects usage of the `mknod` syscall to create special files (e.g., character or block devices).
Attackers or malware might use `mknod` to create fake devices, interact with kernel interfaces,
or establish covert channels in Linux systems.
Monitoring the use of `mknod` is important because this syscall is rarely used by legitimate applications,
and it can be abused to bypass file system restrictions or create backdoors.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  SYSCALL: mknod
  type: SYSCALL
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Device creation by legitimate scripts or init systems (udevadm, MAKEDEV)
- Container runtimes or security tools during initialization

## References
- https://man7.org/linux/man-pages/man2/mknod.2.html
- https://hopeness.medium.com/master-the-linux-mknod-command-a-comprehensive-guide-1c150a546aa8

## Metadata
- **Author:** Milad Cheraghi
- **Date:** 2025-05-31
- **Rule ID:** `710bdbce-495d-491d-9a8f-7d0d88d2b41e`
- **Source file:** `linux/auditd/syscall/lnx_auditd_susp_special_file_creation_via_mknod_syscall.yml`
