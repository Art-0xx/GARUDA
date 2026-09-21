---
type: detection_rule
title: "Potential Suspicious Change To Sensitive/Critical Files"
rule_id: 86157017-c2b1-4d4a-8c33-93b8e67e4af4
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1565.001]
---

# Potential Suspicious Change To Sensitive/Critical Files

## Description
Detects changes of sensitive and critical files. Monitors files that you don't expect to change without planning on Linux system.
These files include, but are not limited to, system configuration files, authentication files, and critical application files.
Attackers often target these files to maintain persistence, escalate privileges, or disrupt system operations.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: 1 of selection_img_* and selection_paths and not 1 of filter_main_*
filter_main_mdadm.conf:
  CommandLine|endswith: /etc/mdadm/mdadm.conf
  CommandLine|startswith:
  - sed -i /^*
  - sed -ne s/^
  Image|endswith: /bin/sed
selection_img_1:
  CommandLine|contains: '>'
  Image|endswith:
  - /cat
  - /echo
  - /grep
  - /head
  - /more
  - /tail
selection_img_2:
  Image|endswith:
  - /emacs
  - /nano
  - /sed
  - /vi
  - /vim
selection_paths:
  CommandLine|contains:
  - /bin/login
  - /bin/passwd
  - /boot/
  - /etc/*.conf
  - /etc/cron.
  - /etc/crontab
  - /etc/hosts
  - /etc/init.d
  - /etc/sudoers
  - /opt/bin/
  - /sbin
  - /usr/bin/
  - /usr/local/bin/
```

## MITRE ATT&CK
- T1565.001

## False Positives
- Some false positives are to be expected on user or administrator machines. Apply additional filters as needed.

## References
- https://learn.microsoft.com/en-us/azure/defender-for-cloud/file-integrity-monitoring-overview#which-files-should-i-monitor

## Metadata
- **Author:** @d4ns4n_ (Wuerth-Phoenix)
- **Date:** 2023-05-30
- **Rule ID:** `86157017-c2b1-4d4a-8c33-93b8e67e4af4`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_sensitive_file_access.yml`
