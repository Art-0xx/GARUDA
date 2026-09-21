---
type: detection_rule
title: "Suspicious Rundll32 Setupapi.dll Activity"
rule_id: 285b85b1-a555-4095-8652-a8a4106af63f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Suspicious Rundll32 Setupapi.dll Activity

## Description
setupapi.dll library provide InstallHinfSection function for processing INF files. INF file may contain instructions allowing to create values in the registry, modify files and install drivers. This technique could be used to obtain persistence via modifying one of Run or RunOnce registry keys, run process or use other DLLs chain calls (see references) InstallHinfSection function in setupapi.dll calls runonce.exe executable regardless of actual content of INF file.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \runonce.exe
  ParentCommandLine|contains|all:
  - setupapi.dll
  - InstallHinfSection
  ParentImage|endswith: \rundll32.exe
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Scripts and administrative tools that use INF files for driver installation with setupapi.dll

## References
- https://lolbas-project.github.io/lolbas/Libraries/Setupapi/
- https://gist.githubusercontent.com/bohops/0cc6586f205f3691e04a1ebf1806aabd/raw/baf7b29891bb91e76198e30889fbf7d6642e8974/calc_exe.inf
- https://raw.githubusercontent.com/huntresslabs/evading-autoruns/master/shady.inf
- https://twitter.com/Z3Jpa29z/status/1313742350292746241?s=20

## Metadata
- **Author:** Konstantin Grishchenko, oscd.community
- **Date:** 2020-10-07
- **Rule ID:** `285b85b1-a555-4095-8652-a8a4106af63f`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_setupapi_installhinfsection.yml`
