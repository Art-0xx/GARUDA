---
type: detection_rule
title: "New Firewall Rule Added In Windows Firewall Exception List For Potential Suspicious Application"
rule_id: 9e2575e7-2cb9-4da1-adc8-ed94221dca5e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# New Firewall Rule Added In Windows Firewall Exception List For Potential Suspicious Application

## Description
Detects the addition of a new rule to the Windows Firewall exception list for an application located in a potentially suspicious location.

## Log Source
```yaml
product: windows
service: firewall-as
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_block:
  Action: 2
selection:
  ApplicationPath|contains:
  - :\PerfLogs\
  - :\Temp\
  - :\Tmp\
  - :\Users\Public\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  EventID:
  - 2004
  - 2071
  - 2097
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/dd364427(v=ws.10)
- https://app.any.run/tasks/7123e948-c91e-49e0-a813-00e8d72ab393/#

## Metadata
- **Author:** frack113
- **Date:** 2023-02-26
- **Rule ID:** `9e2575e7-2cb9-4da1-adc8-ed94221dca5e`
- **Source file:** `windows/builtin/firewall_as/win_firewall_as_add_rule_susp_folder.yml`
