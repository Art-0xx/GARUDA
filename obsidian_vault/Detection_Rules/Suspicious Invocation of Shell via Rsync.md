---
type: detection_rule
title: "Suspicious Invocation of Shell via Rsync"
rule_id: 297241f3-8108-4b3a-8c15-2dda9f844594
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059, attack.t1203]
---

# Suspicious Invocation of Shell via Rsync

## Description
Detects the execution of a shell as sub process of "rsync" without the expected command line flag "-e" being used, which could be an indication of exploitation as described in CVE-2024-12084. This behavior is commonly associated with attempts to execute arbitrary commands or escalate privileges, potentially leading to unauthorized access or further exploitation.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_expected:
  CommandLine|contains: ' -e '
selection:
  Image|endswith:
  - /ash
  - /bash
  - /csh
  - /dash
  - /ksh
  - /sh
  - /tcsh
  - /zsh
  ParentImage|endswith:
  - /rsync
  - /rsyncd
```

## MITRE ATT&CK
- T1059
- T1203

## False Positives
- Unknown

## References
- https://sysdig.com/blog/detecting-and-mitigating-cve-2024-12084-rsync-remote-code-execution/
- https://gist.github.com/Neo23x0/a20436375a1e26524931dd8ea1a3af10

## Metadata
- **Author:** Florian Roth
- **Date:** 2025-01-18
- **Rule ID:** `297241f3-8108-4b3a-8c15-2dda9f844594`
- **Source file:** `linux/process_creation/proc_creation_lnx_rsync_shell_spawn.yml`
