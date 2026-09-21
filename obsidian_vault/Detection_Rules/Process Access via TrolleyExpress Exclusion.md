---
type: detection_rule
title: "Process Access via TrolleyExpress Exclusion"
rule_id: 4c0aaedc-154c-4427-ada0-d80ef9c9deb6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011, attack.t1003.001]
---

# Process Access via TrolleyExpress Exclusion

## Description
Detects a possible process memory dump that uses the white-listed Citrix TrolleyExpress.exe filename as a way to dump the lsass process memory

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection or ( renamed and not 1 of filter* )
filter_empty:
  OriginalFileName: null
filter_renamed:
  OriginalFileName|contains: CtxInstall
renamed:
  Image|endswith: \TrolleyExpress.exe
selection:
  CommandLine|contains:
  - \TrolleyExpress 7
  - \TrolleyExpress 8
  - \TrolleyExpress 9
  - \TrolleyExpress.exe 7
  - \TrolleyExpress.exe 8
  - \TrolleyExpress.exe 9
  - '\TrolleyExpress.exe -ma '
```

## MITRE ATT&CK
- T1218.011
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/_xpn_/status/1491557187168178176
- https://www.youtube.com/watch?v=Ie831jF0bb0

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-10
- **Rule ID:** `4c0aaedc-154c-4427-ada0-d80ef9c9deb6`
- **Source file:** `windows/process_creation/proc_creation_win_citrix_trolleyexpress_procdump.yml`
