---
type: detection_rule
title: "Active Directory Database Snapshot Via ADExplorer"
rule_id: 9212f354-7775-4e28-9c9f-8f0a4544e664
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087.002, attack.t1069.002, attack.t1482]
---

# Active Directory Database Snapshot Via ADExplorer

## Description
Detects the execution of Sysinternals ADExplorer with the "-snapshot" flag in order to save a local copy of the active directory database. This can be used by attackers to extract data for Bloodhound, usernames for password spraying or use the meta data for social engineering. The snapshot doesn't contain password hashes but there have been cases, where administrators put passwords in the comment field.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: snapshot
selection_img:
- Image|endswith:
  - \ADExp.exe
  - \ADExplorer.exe
  - \ADExplorer64.exe
  - \ADExplorer64a.exe
- OriginalFileName: AdExp
- Description: Active Directory Editor
- Product: Sysinternals ADExplorer
```

## MITRE ATT&CK
- T1087.002
- T1069.002
- T1482

## False Positives
- Unknown

## References
- https://www.documentcloud.org/documents/5743766-Global-Threat-Report-2019.html
- https://learn.microsoft.com/de-de/sysinternals/downloads/adexplorer
- https://github.com/c3c/ADExplorerSnapshot.py/tree/f700904defac330802bbfedd1d8ffd9248f4ee24
- https://www.packetlabs.net/posts/scattered-spider-is-a-young-ransomware-gang-exploiting-large-corporations/
- https://www.nccgroup.com/us/research-blog/lapsus-recent-techniques-tactics-and-procedures/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-14
- **Rule ID:** `9212f354-7775-4e28-9c9f-8f0a4544e664`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_adexplorer_execution.yml`
