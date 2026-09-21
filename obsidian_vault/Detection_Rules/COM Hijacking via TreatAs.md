---
type: detection_rule
title: "COM Hijacking via TreatAs"
rule_id: dc5c24af-6995-49b2-86eb-a9ff62199e82
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.015]
---

# COM Hijacking via TreatAs

## Description
Detect modification of TreatAs key to enable "rundll32.exe -sta" command

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_misexec:
  Image:
  - C:\Windows\system32\msiexec.exe
  - C:\Windows\SysWOW64\msiexec.exe
filter_office:
  Image|endswith: \OfficeClickToRun.exe
  Image|startswith: C:\Program Files\Common Files\Microsoft Shared\ClickToRun\
filter_office2:
  Image:
  - C:\Program Files\Microsoft Office\root\integration\integrator.exe
  - C:\Program Files (x86)\Microsoft Office\root\integration\integrator.exe
filter_svchost:
  Image: C:\Windows\system32\svchost.exe
selection:
  TargetObject|endswith: TreatAs\(Default)
```

## MITRE ATT&CK
- T1546.015

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/40b77d63808dd4f4eafb83949805636735a1fd15/atomics/T1546.015/T1546.015.md
- https://www.youtube.com/watch?v=3gz1QmiMhss&t=1251s

## Metadata
- **Author:** frack113
- **Date:** 2022-08-28
- **Rule ID:** `dc5c24af-6995-49b2-86eb-a9ff62199e82`
- **Source file:** `windows/registry/registry_set/registry_set_treatas_persistence.yml`
