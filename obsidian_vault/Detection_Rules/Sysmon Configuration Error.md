---
type: detection_rule
title: "Sysmon Configuration Error"
rule_id: 815cd91b-7dbc-4247-841a-d7dd1392b0a8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564]
---

# Sysmon Configuration Error

## Description
Detects when an adversary is trying to hide it's action from Sysmon logging based on error messages

## Log Source
```yaml
category: sysmon_error
product: windows
```

## Detection Logic
```yaml
condition: selection_error and not 1 of filter*
filter_by_errorcode:
  Description|contains:
  - Failed to open service configuration with error 19
  - Failed to open service configuration with error 93
filter_generic_english:
  Description|contains|all:
  - Failed to open service configuration with error
  - 'Last error: The media is write protected.'
filter_generic_french:
  Description|contains|all:
  - Failed to open service configuration with error
  - "Last error: M\xE9dia prot\xE9g\xE9 en \xE9criture."
selection_error:
  Description|contains:
  - Failed to open service configuration with error
  - Failed to connect to the driver to update configuration
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
- **Rule ID:** `815cd91b-7dbc-4247-841a-d7dd1392b0a8`
- **Source file:** `windows/sysmon/sysmon_config_modification_error.yml`
