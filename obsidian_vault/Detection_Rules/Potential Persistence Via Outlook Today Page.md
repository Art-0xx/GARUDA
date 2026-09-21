---
type: detection_rule
title: "Potential Persistence Via Outlook Today Page"
rule_id: 487bb375-12ef-41f6-baae-c6a1572b4dd1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potential Persistence Via Outlook Today Page

## Description
Detects potential persistence activity via outlook today page.
An attacker can set a custom page to execute arbitrary code and link to it via the registry values "URL" and "UserDefinedUrl".

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_main and 1 of selection_value_* and not 1 of filter_main_*
filter_main_office:
  Image|endswith: \OfficeClickToRun.exe
  Image|startswith:
  - C:\Program Files\Common Files\Microsoft Shared\ClickToRun\
  - C:\Program Files\Common Files\Microsoft Shared\ClickToRun\Updates\
selection_main:
  TargetObject|contains|all:
  - Software\Microsoft\Office\
  - \Outlook\Today\
selection_value_stamp:
  Details: DWORD (0x00000001)
  TargetObject|endswith: \Stamp
selection_value_url:
  TargetObject|endswith:
  - \URL
  - \UserDefinedUrl
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=74
- https://trustedsec.com/blog/specula-turning-outlook-into-a-c2-with-one-registry-change

## Metadata
- **Author:** Tobias Michalski (Nextron Systems), David Bertho (@dbertho) & Eirik Sveen (@0xSV1), Storebrand
- **Date:** 2021-06-10
- **Rule ID:** `487bb375-12ef-41f6-baae-c6a1572b4dd1`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_outlook_todaypage.yml`
