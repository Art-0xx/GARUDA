---
type: detection_rule
title: "Forfiles Command Execution"
rule_id: 9aa5106d-bce3-4b13-86df-3a20f1d5cf0b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Forfiles Command Execution

## Description
Detects the execution of "forfiles" with the "/c" flag.
While this is an expected behavior of the tool, it can be abused in order to proxy execution through it with any binary.
Can be used to bypass application whitelisting.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: ' -c '
selection_img:
- Image|endswith: \forfiles.exe
- OriginalFileName: forfiles.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Legitimate use via a batch script or by an administrator.

## References
- https://lolbas-project.github.io/lolbas/Binaries/Forfiles/
- https://pentestlab.blog/2020/07/06/indirect-command-execution/

## Metadata
- **Author:** Tim Rauch, Elastic, E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2022-06-14
- **Rule ID:** `9aa5106d-bce3-4b13-86df-3a20f1d5cf0b`
- **Source file:** `windows/process_creation/proc_creation_win_forfiles_proxy_execution_.yml`
