---
type: detection_rule
title: "ADExplorer Writing Complete AD Snapshot Into .dat File"
rule_id: 0a1255c5-d732-4b62-ac02-b5152d34fb83
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087.002, attack.t1069.002, attack.t1482]
---

# ADExplorer Writing Complete AD Snapshot Into .dat File

## Description
Detects the dual use tool ADExplorer writing a complete AD snapshot into a .dat file. This can be used by attackers to extract data for Bloodhound, usernames for password spraying or use the meta data for social engineering. The snapshot doesn't contain password hashes but there have been cases, where administrators put passwords in the comment field.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \ADExp.exe
  - \ADExplorer.exe
  - \ADExplorer64.exe
  - \ADExplorer64a.exe
  TargetFilename|endswith: .dat
```

## MITRE ATT&CK
- T1087.002
- T1069.002
- T1482

## False Positives
- Legitimate use of ADExplorer by administrators creating .dat snapshots

## References
- https://learn.microsoft.com/de-de/sysinternals/downloads/adexplorer
- https://github.com/c3c/ADExplorerSnapshot.py/tree/f700904defac330802bbfedd1d8ffd9248f4ee24
- https://www.packetlabs.net/posts/scattered-spider-is-a-young-ransomware-gang-exploiting-large-corporations/
- https://www.nccgroup.com/us/research-blog/lapsus-recent-techniques-tactics-and-procedures/
- https://trustedsec.com/blog/adexplorer-on-engagements

## Metadata
- **Author:** Arnim Rupp (Nextron Systems), Thomas Patzke
- **Date:** 2025-07-09
- **Rule ID:** `0a1255c5-d732-4b62-ac02-b5152d34fb83`
- **Source file:** `windows/file/file_event/file_event_win_sysinternals_adexplorer_dump_written.yml`
