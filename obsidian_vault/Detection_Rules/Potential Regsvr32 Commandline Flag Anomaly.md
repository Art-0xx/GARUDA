---
type: detection_rule
title: "Potential Regsvr32 Commandline Flag Anomaly"
rule_id: b236190c-1c61-41e9-84b3-3fe03f6d76b0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Potential Regsvr32 Commandline Flag Anomaly

## Description
Detects a potential command line flag anomaly related to "regsvr32" in which the "/i" flag is used without the "/n" which should be uncommon.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_flag:
  CommandLine|contains|windash: ' -n '
selection:
  CommandLine|contains|windash: ' -i:'
  Image|endswith: \regsvr32.exe
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Administrator typo might cause some false positives

## References
- https://twitter.com/sbousseaden/status/1282441816986484737?s=12

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-07-13
- **Rule ID:** `b236190c-1c61-41e9-84b3-3fe03f6d76b0`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_flags_anomaly.yml`
