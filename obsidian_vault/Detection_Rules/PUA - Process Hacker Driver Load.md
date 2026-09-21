---
type: detection_rule
title: "PUA - Process Hacker Driver Load"
rule_id: 67add051-9ee7-4ad3-93ba-42935615ae8d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543]
---

# PUA - Process Hacker Driver Load

## Description
Detects driver load of the Process Hacker tool

## Log Source
```yaml
category: driver_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- ImageLoaded|endswith: \kprocesshacker.sys
- Hashes|contains:
  - IMPHASH=821D74031D3F625BCBD0DF08B70F1E77
  - IMPHASH=F86759BB4DE4320918615DC06E998A39
  - IMPHASH=0A64EEB85419257D0CE32BD5D55C3A18
  - IMPHASH=6E7B34DFC017700B1517B230DF6FF0D0
```

## MITRE ATT&CK
- T1543

## False Positives
- Legitimate use of process hacker or system informer by developers or system administrators

## References
- https://processhacker.sourceforge.io/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-11-16
- **Rule ID:** `67add051-9ee7-4ad3-93ba-42935615ae8d`
- **Source file:** `windows/driver_load/driver_load_win_pua_process_hacker.yml`
