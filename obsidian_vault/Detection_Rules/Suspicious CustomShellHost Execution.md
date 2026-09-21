---
type: detection_rule
title: "Suspicious CustomShellHost Execution"
rule_id: 84b14121-9d14-416e-800b-f3b829c5a14d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1216]
---

# Suspicious CustomShellHost Execution

## Description
Detects the execution of CustomShellHost.exe where the child isn't located in 'C:\Windows\explorer.exe'. CustomShellHost is a known LOLBin that can be abused by attackers for defense evasion techniques.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_explorer:
  Image: C:\Windows\explorer.exe
selection:
  ParentImage|endswith: \CustomShellHost.exe
```

## MITRE ATT&CK
- T1216

## False Positives
- False positives are unlikely, investigate matches carefully.

## References
- https://github.com/LOLBAS-Project/LOLBAS/pull/180
- https://lolbas-project.github.io/lolbas/Binaries/CustomShellHost/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-19
- **Rule ID:** `84b14121-9d14-416e-800b-f3b829c5a14d`
- **Source file:** `windows/process_creation/proc_creation_win_customshellhost_susp_exec.yml`
