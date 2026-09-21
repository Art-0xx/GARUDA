---
type: detection_rule
title: "Mimikatz Use"
rule_id: 06d71506-7beb-4f22-8888-e2e5e2ca7fd8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002, attack.t1003.004, attack.t1003.001, attack.t1003.006]
---

# Mimikatz Use

## Description
This method detects mimikatz keywords in different Eventlogs (some of them only appear in older Mimikatz version that are however still used by different threat groups)

## Log Source
```yaml
product: windows
```

## Detection Logic
```yaml
condition: keywords and not filter
filter:
  EventID: 15
keywords:
- dpapi::masterkey
- eo.oe.kiwi
- event::clear
- event::drop
- gentilkiwi.com
- kerberos::golden
- kerberos::ptc
- kerberos::ptt
- kerberos::tgt
- Kiwi Legit Printer
- 'lsadump::'
- mimidrv.sys
- \mimilib.dll
- misc::printnightmare
- misc::shadowcopies
- misc::skeleton
- privilege::backup
- privilege::debug
- privilege::driver
- 'sekurlsa::'
```

## MITRE ATT&CK
- T1003.002
- T1003.004
- T1003.001
- T1003.006

## False Positives
- Naughty administrators
- AV Signature updates
- Files with Mimikatz in their filename

## References
- https://tools.thehacker.recipes/mimikatz/modules

## Metadata
- **Author:** Florian Roth (Nextron Systems), David ANDRE (additional keywords)
- **Date:** 2017-01-10
- **Rule ID:** `06d71506-7beb-4f22-8888-e2e5e2ca7fd8`
- **Source file:** `windows/builtin/win_alert_mimikatz_keywords.yml`
