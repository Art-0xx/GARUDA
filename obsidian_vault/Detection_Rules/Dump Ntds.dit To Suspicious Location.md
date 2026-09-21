---
type: detection_rule
title: "Dump Ntds.dit To Suspicious Location"
rule_id: 94dc4390-6b7c-4784-8ffc-335334404650
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Dump Ntds.dit To Suspicious Location

## Description
Detects potential abuse of ntdsutil to dump ntds.dit database to a suspicious location

## Log Source
```yaml
product: windows
service: application
```

## Detection Logic
```yaml
condition: all of selection_*
selection_paths:
  Data|contains:
  - :\ntds.dit
  - \Appdata\
  - \Desktop\
  - \Downloads\
  - \Perflogs\
  - \Temp\
  - \Users\Public\
selection_root:
  Data|contains: ntds.dit
  EventID: 325
  Provider_Name: ESENT
```

## False Positives
- Legitimate backup operation/creating shadow copies

## References
- https://twitter.com/mgreen27/status/1558223256704122882
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/jj574207(v=ws.11)

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-14
- **Rule ID:** `94dc4390-6b7c-4784-8ffc-335334404650`
- **Source file:** `windows/builtin/application/esent/win_esent_ntdsutil_abuse_susp_location.yml`
