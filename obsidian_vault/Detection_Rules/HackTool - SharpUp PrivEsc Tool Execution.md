---
type: detection_rule
title: "HackTool - SharpUp PrivEsc Tool Execution"
rule_id: c484e533-ee16-4a93-b6ac-f0ea4868b2f1
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1615, attack.t1569.002, attack.t1574.005]
---

# HackTool - SharpUp PrivEsc Tool Execution

## Description
Detects the use of SharpUp, a tool for local privilege escalation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \SharpUp.exe
- Description: SharpUp
- CommandLine|contains:
  - HijackablePaths
  - UnquotedServicePath
  - ProcessDLLHijack
  - ModifiableServiceBinaries
  - ModifiableScheduledTask
  - DomainGPPPassword
  - CachedGPPPassword
```

## MITRE ATT&CK
- T1615
- T1569.002
- T1574.005

## False Positives
- Unknown

## References
- https://github.com/GhostPack/SharpUp

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-20
- **Rule ID:** `c484e533-ee16-4a93-b6ac-f0ea4868b2f1`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_sharpup.yml`
