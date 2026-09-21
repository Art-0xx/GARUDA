---
type: detection_rule
title: "WMI Persistence - Command Line Event Consumer"
rule_id: 05936ce2-ee05-4dae-9d03-9a391cf2d2c6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# WMI Persistence - Command Line Event Consumer

## Description
Detects WMI command line event consumers

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image: C:\Windows\System32\wbem\WmiPrvSE.exe
  ImageLoaded|endswith: \wbemcons.dll
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Unknown (data set is too small; further testing needed)

## References
- https://www.eideon.com/2018-03-02-THL03-WMIBackdoors/

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2018-03-07
- **Rule ID:** `05936ce2-ee05-4dae-9d03-9a391cf2d2c6`
- **Source file:** `windows/image_load/image_load_wmi_persistence_commandline_event_consumer.yml`
