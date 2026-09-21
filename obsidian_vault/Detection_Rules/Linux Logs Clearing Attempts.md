---
type: detection_rule
title: "Linux Logs Clearing Attempts"
rule_id: 80915f59-9b56-4616-9de0-fd0dea6c12fe
platform: linux
level: medium
status: stable
tags: [detection, sigma, linux]
mitre_tags: [attack.t1685.006]
---

# Linux Logs Clearing Attempts

## Description
Detects logs clearing attempts on Linux systems via utilities such as 'rm', 'rmdir', 'shred', and 'unlink' targeting log files and directories.
Adversaries often try to clear logs to cover their tracks after performing malicious activities.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_dmseg:
  CommandLine|startswith: rm -f -- /var/log//dmesg
  Image|endswith: /rm
filter_main_legit_systat:
  CommandLine|startswith: rm -f /var/log/sysstat/
  Image|endswith: /rm
selection:
  CommandLine|contains:
  - /var/log
  - /var/spool/mail
  Image|endswith:
  - /rm
  - /rmdir
  - /shred
  - /unlink
```

## MITRE ATT&CK
- T1685.006

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.002/T1070.002.md

## Metadata
- **Author:** Ömer Günal, oscd.community
- **Date:** 2020-10-07
- **Rule ID:** `80915f59-9b56-4616-9de0-fd0dea6c12fe`
- **Source file:** `linux/process_creation/proc_creation_lnx_clear_logs.yml`
