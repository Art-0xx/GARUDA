---
type: detection_rule
title: "Use of Pcalua For Execution"
rule_id: 0955e4e1-c281-4fb9-9ee1-5ee7b4b754d2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Use of Pcalua For Execution

## Description
Detects execition of commands and binaries from the context of The program compatibility assistant (Pcalua.exe). This can be used as a LOLBIN in order to bypass application whitelisting.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' -a'
  Image|endswith: \pcalua.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Legitimate use by a via a batch script or by an administrator.

## References
- https://lolbas-project.github.io/lolbas/Binaries/Pcalua/
- https://pentestlab.blog/2020/07/06/indirect-command-execution/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2022-06-14
- **Rule ID:** `0955e4e1-c281-4fb9-9ee1-5ee7b4b754d2`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_pcalua.yml`
