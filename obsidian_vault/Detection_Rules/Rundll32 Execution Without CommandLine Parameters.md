---
type: detection_rule
title: "Rundll32 Execution Without CommandLine Parameters"
rule_id: 1775e15e-b61b-4d14-a1a3-80981298085a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Rundll32 Execution Without CommandLine Parameters

## Description
Detects suspicious start of rundll32.exe without any parameters as found in CobaltStrike beacon activity

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ParentImage|contains:
  - \AppData\Local\
  - \Microsoft\Edge\
selection:
  CommandLine|endswith:
  - \rundll32.exe
  - \rundll32.exe"
  - \rundll32
```

## MITRE ATT&CK
- T1202

## False Positives
- Possible but rare

## References
- https://www.cobaltstrike.com/help-opsec
- https://twitter.com/ber_m1ng/status/1397948048135778309

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-05-27
- **Rule ID:** `1775e15e-b61b-4d14-a1a3-80981298085a`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_no_params.yml`
