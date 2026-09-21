---
type: detection_rule
title: "Silenttrinity Stager Msbuild Activity"
rule_id: 50e54b8d-ad73-43f8-96a1-5191685b17a4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127.001]
---

# Silenttrinity Stager Msbuild Activity

## Description
Detects a possible remote connections to Silenttrinity c2

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and filter
filter:
  DestinationPort:
  - 80
  - 443
  Initiated: 'true'
selection:
  Image|endswith: \msbuild.exe
```

## MITRE ATT&CK
- T1127.001

## False Positives
- Unknown

## References
- https://www.blackhillsinfosec.com/my-first-joyride-with-silenttrinity/

## Metadata
- **Author:** Kiran kumar s, oscd.community
- **Date:** 2020-10-11
- **Rule ID:** `50e54b8d-ad73-43f8-96a1-5191685b17a4`
- **Source file:** `windows/network_connection/net_connection_win_silenttrinity_stager_msbuild_activity.yml`
