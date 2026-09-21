---
type: detection_rule
title: "Suspicious Registry Modification From ADS Via Regini.EXE"
rule_id: 77946e79-97f1-45a2-84b4-f37b5c0d8682
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Suspicious Registry Modification From ADS Via Regini.EXE

## Description
Detects the import of an alternate data stream with regini.exe, regini.exe can be used to modify registry keys.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith: \regini.exe
- OriginalFileName: REGINI.EXE
selection_re:
  CommandLine|re: :[^ \\]
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Regini/
- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/regini

## Metadata
- **Author:** Eli Salem, Sander Wiebing, oscd.community
- **Date:** 2020-10-12
- **Rule ID:** `77946e79-97f1-45a2-84b4-f37b5c0d8682`
- **Source file:** `windows/process_creation/proc_creation_win_regini_ads.yml`
