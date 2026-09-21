---
type: detection_rule
title: "WhoAmI as Parameter"
rule_id: e9142d84-fbe0-401d-ac50-3e519fb00c89
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# WhoAmI as Parameter

## Description
Detects a suspicious process command line that uses whoami as first parameter (as e.g. used by EfsPotato)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: .exe whoami
```

## MITRE ATT&CK
- T1033

## False Positives
- Unknown

## References
- https://twitter.com/blackarrowsec/status/1463805700602224645?s=12

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-11-29
- **Rule ID:** `e9142d84-fbe0-401d-ac50-3e519fb00c89`
- **Source file:** `windows/process_creation/proc_creation_win_susp_whoami_as_param.yml`
