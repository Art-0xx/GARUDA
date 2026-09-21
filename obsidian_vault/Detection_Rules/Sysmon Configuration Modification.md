---
type: detection_rule
title: "Sysmon Configuration Modification"
rule_id: 1f2b5353-573f-4880-8e33-7d04dcf97744
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564]
---

# Sysmon Configuration Modification

## Description
Detects when an attacker tries to hide from Sysmon by disabling or stopping it

## Log Source
```yaml
category: sysmon_status
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not filter
filter:
  State: Started
selection_conf:
- Sysmon config state changed
selection_stop:
  State: Stopped
```

## MITRE ATT&CK
- T1564

## False Positives
- Legitimate administrative action

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md
- https://talesfrominfosec.blogspot.com/2017/12/killing-sysmon-silently.html

## Metadata
- **Author:** frack113
- **Date:** 2021-06-04
- **Rule ID:** `1f2b5353-573f-4880-8e33-7d04dcf97744`
- **Source file:** `windows/sysmon/sysmon_config_modification_status.yml`
