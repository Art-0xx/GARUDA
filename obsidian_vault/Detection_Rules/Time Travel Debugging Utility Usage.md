---
type: detection_rule
title: "Time Travel Debugging Utility Usage"
rule_id: 0b4ae027-2a2d-4b93-8c7e-962caaba5b2a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1003.001]
---

# Time Travel Debugging Utility Usage

## Description
Detects usage of Time Travel Debugging Utility. Adversaries can execute malicious processes and dump processes, such as lsass.exe, via tttracer.exe.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentImage|endswith: \tttracer.exe
```

## MITRE ATT&CK
- T1218
- T1003.001

## False Positives
- Legitimate usage by software developers/testers

## References
- https://lolbas-project.github.io/lolbas/Binaries/Tttracer/
- https://twitter.com/mattifestation/status/1196390321783025666
- https://twitter.com/oulusoyum/status/1191329746069655553

## Metadata
- **Author:** Ensar Şamil, @sblmsrsn, @oscd_initiative
- **Date:** 2020-10-06
- **Rule ID:** `0b4ae027-2a2d-4b93-8c7e-962caaba5b2a`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_tttracer_mod_load.yml`
