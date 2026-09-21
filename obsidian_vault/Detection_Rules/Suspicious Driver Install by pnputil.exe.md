---
type: detection_rule
title: "Suspicious Driver Install by pnputil.exe"
rule_id: a2ea3ae7-d3d0-40a0-a55c-25a45c87cac1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547]
---

# Suspicious Driver Install by pnputil.exe

## Description
Detects when a possible suspicious driver is being installed via pnputil.exe lolbin

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - -i
  - /install
  - -a
  - /add-driver
  - '.inf'
  Image|endswith: \pnputil.exe
```

## MITRE ATT&CK
- T1547

## False Positives
- Pnputil.exe being used may be performed by a system administrator.
- Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- Pnputil.exe being executed from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/pnputil-command-syntax
- https://strontic.github.io/xcyclopedia/library/pnputil.exe-60EDC5E6BDBAEE441F2E3AEACD0340D2.html

## Metadata
- **Author:** Hai Vaknin @LuxNoBulIshit, Avihay eldad  @aloneliassaf, Austin Songer @austinsonger
- **Date:** 2021-09-30
- **Rule ID:** `a2ea3ae7-d3d0-40a0-a55c-25a45c87cac1`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_susp_driver_installed_by_pnputil.yml`
