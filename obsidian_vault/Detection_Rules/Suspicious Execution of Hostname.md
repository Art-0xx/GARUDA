---
type: detection_rule
title: "Suspicious Execution of Hostname"
rule_id: 7be5fb68-f9ef-476d-8b51-0256ebece19e
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082]
---

# Suspicious Execution of Hostname

## Description
Use of hostname to get information

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \HOSTNAME.EXE
```

## MITRE ATT&CK
- T1082

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1082/T1082.md#atomic-test-6---hostname-discovery-windows
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/hostname

## Metadata
- **Author:** frack113
- **Date:** 2022-01-01
- **Rule ID:** `7be5fb68-f9ef-476d-8b51-0256ebece19e`
- **Source file:** `windows/process_creation/proc_creation_win_hostname_execution.yml`
