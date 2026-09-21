---
type: detection_rule
title: "PUA - Rclone Execution"
rule_id: e37db05d-d1f9-49c8-b464-cee1a4b11638
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# PUA - Rclone Execution

## Description
Detects execution of RClone utility for exfiltration as used by various ransomwares strains like REvil, Conti, FiveHands, etc

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_specific_options or all of selection_rclone_*
selection_rclone_cli:
  CommandLine|contains:
  - pass
  - user
  - copy
  - sync
  - config
  - lsd
  - remote
  - ls
  - mega
  - pcloud
  - ftp
  - ignore-existing
  - auto-confirm
  - transfers
  - multi-thread-streams
  - 'no-check-certificate '
selection_rclone_img:
- Image|endswith: \rclone.exe
- Description: Rsync for cloud storage
selection_specific_options:
  CommandLine|contains|all:
  - '--config '
  - '--no-check-certificate '
  - ' copy '
```

## MITRE ATT&CK
- T1567.002

## False Positives
- Unknown

## References
- https://research.nccgroup.com/2021/05/27/detecting-rclone-an-effective-tool-for-exfiltration/
- https://thedfirreport.com/2021/03/29/sodinokibi-aka-revil-ransomware
- https://us-cert.cisa.gov/ncas/analysis-reports/ar21-126a
- https://labs.sentinelone.com/egregor-raas-continues-the-chaos-with-cobalt-strike-and-rclone
- https://www.splunk.com/en_us/blog/security/darkside-ransomware-splunk-threat-update-and-detections.html

## Metadata
- **Author:** Bhabesh Raj, Sittikorn S, Aaron Greetham (@beardofbinary) - NCC Group
- **Date:** 2021-05-10
- **Rule ID:** `e37db05d-d1f9-49c8-b464-cee1a4b11638`
- **Source file:** `windows/process_creation/proc_creation_win_pua_rclone_execution.yml`
