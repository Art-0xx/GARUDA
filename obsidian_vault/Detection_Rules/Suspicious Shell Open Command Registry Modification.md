---
type: detection_rule
title: "Suspicious Shell Open Command Registry Modification"
rule_id: 9e8894c0-0ae0-11ef-9d85-1f2942bec57c
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002, attack.t1546.001]
---

# Suspicious Shell Open Command Registry Modification

## Description
Detects modifications to shell open registry keys that point to suspicious locations typically used by malware for persistence.
Generally, modifications to the `*\shell\open\command` registry key can indicate an attempt to change the default action for opening files,
and various UAC bypass or persistence techniques involve modifying these keys to execute malicious scripts or binaries.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains:
  - \$Recycle.Bin\
  - \AppData\Local\Temp\
  - \Contacts\
  - \Music\
  - \PerfLogs\
  - \Photos\
  - \Pictures\
  - \Users\Public\
  - \Videos\
  - \Windows\Temp\
  - '%AppData%'
  - '%LocalAppData%'
  - '%Temp%'
  - '%tmp%'
  TargetObject|contains: \shell\open\command\
```

## MITRE ATT&CK
- T1548.002
- T1546.001

## False Positives
- Legitimate software installations or updates that modify the shell open command registry keys to these locations.

## References
- https://www.trendmicro.com/en_us/research/25/f/water-curse.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-24
- **Rule ID:** `9e8894c0-0ae0-11ef-9d85-1f2942bec57c`
- **Source file:** `windows/registry/registry_set/registry_set_susp_shell_open_keys_modification_patterns.yml`
