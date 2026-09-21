---
type: detection_rule
title: "Linux Sudo Chroot Execution"
rule_id: f2bed782-994e-4f40-9cd5-518198cb3fba
platform: linux
level: low
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1068]
---

# Linux Sudo Chroot Execution

## Description
Detects the execution of 'sudo' command with '--chroot' option, which is used to change the root directory for command execution.
Attackers may use this technique to evade detection and execute commands in a modified environment.
This can be part of a privilege escalation strategy, as it allows the execution of commands with elevated privileges in a controlled environment as seen in CVE-2025-32463.
While investigating, look out for unusual or unexpected use of 'sudo --chroot' in conjunction with other commands or scripts such as execution from temporary directories or unusual user accounts.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - ' --chroot '
  - 'sudo -R '
  Image|endswith: /sudo
```

## MITRE ATT&CK
- T1068

## False Positives
- Legitimate administrative tasks or scripts that use 'sudo --chroot' for containerization, testing, or system management.

## References
- https://github.com/kh4sh3i/CVE-2025-32463/blob/81bb430f84fa2089224733c3ed4bfa434c197ad4/exploit.sh

## Metadata
- **Author:** Swachchhanda Shrawn Poudel (Nextron Systems)
- **Date:** 2025-10-02
- **Rule ID:** `f2bed782-994e-4f40-9cd5-518198cb3fba`
- **Source file:** `linux/process_creation/proc_creation_lnx_chroot_execution.yml`
