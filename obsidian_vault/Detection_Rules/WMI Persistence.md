---
type: detection_rule
title: "WMI Persistence"
rule_id: 0b7889b4-5577-4521-a60a-3376ee7f9f7b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# WMI Persistence

## Description
Detects suspicious WMI event filter and command line event consumer based on WMI and Security Logs.

## Log Source
```yaml
definition: WMI Namespaces Auditing and SACL should be configured, EventID 5861 and
  5859 detection requires Windows 10, 2012 and higher
product: windows
service: wmi
```

## Detection Logic
```yaml
condition: ( (wmi_filter_to_consumer_binding and consumer_keywords) or (wmi_filter_registration)
  ) and not filter_scmevent
consumer_keywords:
- ActiveScriptEventConsumer
- CommandLineEventConsumer
- CommandLineTemplate
filter_scmevent:
  PossibleCause: Permanent
  Provider: SCM Event Provider
  Query: select * from MSFT_SCMEventLogEvent
  User: S-1-5-32-544
wmi_filter_registration:
  EventID: 5859
wmi_filter_to_consumer_binding:
  EventID: 5861
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Unknown (data set is too small; further testing needed)

## References
- https://twitter.com/mattifestation/status/899646620148539397
- https://www.eideon.com/2018-03-02-THL03-WMIBackdoors/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Gleb Sukhodolskiy, Timur Zinniatullin oscd.community
- **Date:** 2017-08-22
- **Rule ID:** `0b7889b4-5577-4521-a60a-3376ee7f9f7b`
- **Source file:** `windows/builtin/wmi/win_wmi_persistence.yml`
