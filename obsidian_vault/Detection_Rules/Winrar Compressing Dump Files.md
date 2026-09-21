---
type: detection_rule
title: "Winrar Compressing Dump Files"
rule_id: 1ac14d38-3dfc-4635-92c7-e3fd1c5f5bfc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# Winrar Compressing Dump Files

## Description
Detects execution of WinRAR in order to compress a file with a ".dmp"/".dump" extension, which could be a step in a process of dump file exfiltration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_extension:
  CommandLine|contains:
  - .dmp
  - .dump
  - .hdmp
selection_img:
- Image|endswith:
  - \rar.exe
  - \winrar.exe
- Description: Command line RAR
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Legitimate use of WinRAR with a command line in which ".dmp" or ".dump" appears accidentally
- Legitimate use of WinRAR to compress WER ".dmp" files for troubleshooting

## References
- https://www.crowdstrike.com/blog/overwatch-exposes-aquatic-panda-in-possession-of-log-4-shell-exploit-tools/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-04
- **Rule ID:** `1ac14d38-3dfc-4635-92c7-e3fd1c5f5bfc`
- **Source file:** `windows/process_creation/proc_creation_win_winrar_exfil_dmp_files.yml`
