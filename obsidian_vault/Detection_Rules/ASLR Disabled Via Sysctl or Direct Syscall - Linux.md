---
type: detection_rule
title: "ASLR Disabled Via Sysctl or Direct Syscall - Linux"
rule_id: e497a24e-9345-4a62-9803-b06d7d7cb132
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1685, attack.t1055.009]
---

# ASLR Disabled Via Sysctl or Direct Syscall - Linux

## Description
Detects actions that disable Address Space Layout Randomization (ASLR) in Linux, including:
  - Use of the `personality` syscall with the ADDR_NO_RANDOMIZE flag (0x0040000)
  - Modification of the /proc/sys/kernel/randomize_va_space file
  - Execution of the `sysctl` command to set `kernel.randomize_va_space=0`
Disabling ASLR is often used by attackers during exploit development or to bypass memory protection mechanisms.
A successful use of these methods can reduce the effectiveness of ASLR and make memory corruption attacks more reliable.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_syscall:
  SYSCALL: personality
  a0: 40000
  type: SYSCALL
selection_sysctl:
  a0: sysctl
  a1: -w
  a2: kernel.randomize_va_space=0
  type: EXECVE
```

## MITRE ATT&CK
- T1685
- T1055.009

## False Positives
- Debugging or legitimate software testing

## References
- https://github.com/CheraghiMilad/bypass-Neo23x0-auditd-config/blob/f1c478a37911a5447d5ffcd580f22b167bf3df14/personality-syscall/README.md
- https://man7.org/linux/man-pages/man2/personality.2.html
- https://manual.cs50.io/2/personality
- https://linux-audit.com/linux-aslr-and-kernelrandomize_va_space-setting/

## Metadata
- **Author:** Milad Cheraghi
- **Date:** 2025-05-26
- **Rule ID:** `e497a24e-9345-4a62-9803-b06d7d7cb132`
- **Source file:** `linux/auditd/lnx_auditd_disable_aslr_protection.yml`
