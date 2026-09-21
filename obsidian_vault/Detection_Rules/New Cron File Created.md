---
type: detection_rule
title: "New Cron File Created"
rule_id: 6c4e2f43-d94d-4ead-b64d-97e53fa2bd05
platform: linux
level: low
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1053.003]
---

# New Cron File Created

## Description
Detects the creation of cron files in Cron directories, which could indicate potential persistence mechanisms being established by an attacker.
Note that not all cron file creations are malicious - legitimate system administration activities and software installations may also create cron files.
This detection should be investigated in context, considering factors such as the user creating the file, the timing of creation, and the contents of the cron job.
Focus investigation on unexpected cron files created by non-administrative users or during suspicious timeframes.
Additionally, it is recommended to review the contents of the newly created cron files to assess their intent.
Furthermore, it is suggested to baseline normal cron file creation and apply additional filters to reduce false positives based on the specific environment.

## Log Source
```yaml
category: file_event
product: linux
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_optional_*
filter_optional_legit_cron:
  TargetFilename:
  - /etc/cron.daily/apt
  - /etc/cron.daily/dpkg
  - /etc/cron.daily/passwd
  - /etc/crontabs/root
selection_cron_dirs:
  TargetFilename|startswith:
  - /etc/cron.d/
  - /etc/cron.daily/
  - /etc/cron.hourly/
  - /etc/cron.monthly/
  - /etc/cron.weekly/
  - /var/spool/cron/crontabs/
  - /var/spool/cron/root
selection_cron_special_files:
  TargetFilename|contains:
  - /etc/cron.allow
  - /etc/cron.deny
  - /etc/crontab
```

## MITRE ATT&CK
- T1053.003

## False Positives
- Legitimate administrative tasks, package managers, containers, configuration management tools, cloud agents, or system maintenance operations might cause false positives. Apply baselining before deployment.

## References
- https://github.com/microsoft/MSTIC-Sysmon/blob/f1477c0512b0747c1455283069c21faec758e29d/linux/configs/attack-based/persistence/T1053.003_Cron_Activity.xml
- https://pberba.github.io/security/2022/01/30/linux-threat-hunting-for-persistence-systemd-timers-cron/
- https://www.elastic.co/security-labs/primer-on-persistence-mechanisms
- https://snehbavarva.medium.com/privilege-escalation-techniques-series-linux-cron-jobs-a5b797b424b4

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research), MSTIC
- **Date:** 2021-10-15
- **Rule ID:** `6c4e2f43-d94d-4ead-b64d-97e53fa2bd05`
- **Source file:** `linux/file_event/file_event_lnx_susp_cron_file_created.yml`
