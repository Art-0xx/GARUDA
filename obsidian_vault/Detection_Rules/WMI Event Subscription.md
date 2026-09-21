---
type: detection_rule
title: "WMI Event Subscription"
rule_id: 0f06a3a5-6a09-413f-8743-e6cf35561297
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# WMI Event Subscription

## Description
Detects creation of WMI event subscription persistence method

## Log Source
```yaml
category: wmi_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID:
  - 19
  - 20
  - 21
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Exclude legitimate (vetted) use of WMI event subscription in your network

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-19-wmievent-wmieventfilter-activity-detected
- https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-20-wmievent-wmieventconsumer-activity-detected
- https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-21-wmievent-wmieventconsumertofilter-activity-detected

## Metadata
- **Author:** Tom Ueltschi (@c_APT_ure)
- **Date:** 2019-01-12
- **Rule ID:** `0f06a3a5-6a09-413f-8743-e6cf35561297`
- **Source file:** `windows/wmi_event/sysmon_wmi_event_subscription.yml`
