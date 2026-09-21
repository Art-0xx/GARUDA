---
type: detection_rule
title: "HackTool - CoercedPotato Execution"
rule_id: e8d34729-86a4-4140-adfd-0a29c2106307
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# HackTool - CoercedPotato Execution

## Description
Detects the use of CoercedPotato, a tool for privilege escalation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_loader_img:
  Image|endswith: \CoercedPotato.exe
selection_loader_imphash:
  Hashes|contains:
  - IMPHASH=A75D7669DB6B2E107A44C4057FF7F7D6
  - IMPHASH=F91624350E2C678C5DCBE5E1F24E22C9
  - IMPHASH=14C81850A079A87E83D50CA41C709A15
selection_params:
  CommandLine|contains: ' --exploitId '
```

## MITRE ATT&CK
- T1055

## False Positives
- Unknown

## References
- https://github.com/hackvens/CoercedPotato
- https://blog.hackvens.fr/articles/CoercedPotato.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2023-10-11
- **Rule ID:** `e8d34729-86a4-4140-adfd-0a29c2106307`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_coercedpotato.yml`
