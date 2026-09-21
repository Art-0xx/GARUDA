---
type: detection_rule
title: "Chmod Targeting Sensitive Directories"
rule_id: 6419afd1-3742-47a5-a7e6-b50386cd15f8
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1222.002]
---

# Chmod Targeting Sensitive Directories

## Description
Detects chmod targeting files in sensitive directory paths on Linux systems.
Attackers may use chmod to change permissions of files in these directories to maintain persistence, escalate privileges, or disrupt system operations.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_apt_key:
  CommandLine|startswith: chmod 700 /tmp/apt-key-gpghome.
filter_main_landscape:
  CommandLine: chmod 0775 /etc/landscape/
filter_main_mkinitramfs:
  CommandLine|startswith: chmod 755 /var/tmp/mkinitramfs
filter_main_postinst:
  CommandLine|contains: /etc/
  ParentCommandLine|contains|all:
  - /var/lib/dpkg/info/
  - .postinst configure
filter_main_ubuntu_apparmor:
  CommandLine: chmod 644 /etc/apparmor.d/tunables/home.d/ubuntu
filter_main_update_shells:
  CommandLine|contains: chmod --reference=/etc/shells
  ParentCommandLine|endswith: /update-shells
selection:
  CommandLine|contains:
  - /tmp/
  - /.Library/
  - /etc/
  - /opt/
  Image|endswith: /chmod
```

## MITRE ATT&CK
- T1222.002

## False Positives
- Some false positives are to be expected. Apply additional filters as needed before pushing to production.

## References
- https://www.intezer.com/blog/malware-analysis/new-backdoor-sysjoker/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1222.002/T1222.002.md

## Metadata
- **Author:** Christopher Peacock @SecurePeacock, SCYTHE @scythe_io
- **Date:** 2022-06-03
- **Rule ID:** `6419afd1-3742-47a5-a7e6-b50386cd15f8`
- **Source file:** `linux/process_creation/proc_creation_lnx_chmod_targeting_sensitive_directories.yml`
