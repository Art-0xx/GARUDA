---
type: detection_rule
title: "Monitoring For Persistence Via BITS"
rule_id: b9cbbc17-d00d-4e3d-a827-b06d03d2380d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# Monitoring For Persistence Via BITS

## Description
BITS will allow you to schedule a command to execute after a successful download to notify you that the job is finished.
When the job runs on the system the command specified in the BITS job will be executed.
This can be abused by actors to create a backdoor within the system and for persistence.
It will be chained in a BITS job to schedule the download of malware/additional binaries and execute the program after being downloaded.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and (all of selection_cli_notify_* or all of selection_cli_add_*)
selection_cli_add_1:
  CommandLine|contains: /Addfile
selection_cli_add_2:
  CommandLine|contains:
  - 'http:'
  - 'https:'
  - 'ftp:'
  - 'ftps:'
selection_cli_notify_1:
  CommandLine|contains: /SetNotifyCmdLine
selection_cli_notify_2:
  CommandLine|contains:
  - '%COMSPEC%'
  - cmd.exe
  - regsvr32.exe
selection_img:
- Image|endswith: \bitsadmin.exe
- OriginalFileName: bitsadmin.exe
```

## MITRE ATT&CK
- T1197

## False Positives
- Unknown

## References
- https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html
- http://0xthem.blogspot.com/2014/03/t-emporal-persistence-with-and-schtasks.html
- https://isc.sans.edu/diary/Wipe+the+drive+Stealthy+Malware+Persistence+Mechanism+-+Part+1/15394

## Metadata
- **Author:** Sreeman
- **Date:** 2020-10-29
- **Rule ID:** `b9cbbc17-d00d-4e3d-a827-b06d03d2380d`
- **Source file:** `windows/process_creation/proc_creation_win_bitsadmin_potential_persistence.yml`
