---
type: detection_rule
title: "Loading of Kernel Module via Insmod"
rule_id: 106d7cbd-80ff-4985-b682-a7043e5acb72
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1547.006]
---

# Loading of Kernel Module via Insmod

## Description
Detects loading of kernel modules with insmod command.
Loadable Kernel Modules (LKMs) are pieces of code that can be loaded and unloaded into the kernel upon demand.
Adversaries may use LKMs to obtain persistence within the system or elevate the privileges.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  comm: insmod
  exe: /usr/bin/kmod
  type: SYSCALL
```

## MITRE ATT&CK
- T1547.006

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1547.006/T1547.006.md
- https://linux.die.net/man/8/insmod
- https://man7.org/linux/man-pages/man8/kmod.8.html

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2021-11-02
- **Rule ID:** `106d7cbd-80ff-4985-b682-a7043e5acb72`
- **Source file:** `linux/auditd/syscall/lnx_auditd_load_module_insmod.yml`
