---
type: detection_rule
title: "Uncommon Microsoft Office Trusted Location Added"
rule_id: f742bde7-9528-42e5-bd82-84f51a8387d2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Uncommon Microsoft Office Trusted Location Added

## Description
Detects changes to registry keys related to "Trusted Location" of Microsoft Office where the path is set to something uncommon. Attackers might add additional trusted locations to avoid macro security restrictions.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_exclude_*
filter_exclude_known_paths:
  Details|contains:
  - '%APPDATA%\Microsoft\Templates'
  - '%%APPDATA%%\Microsoft\Templates'
  - '%APPDATA%\Microsoft\Word\Startup'
  - '%%APPDATA%%\Microsoft\Word\Startup'
  - :\Program Files (x86)\Microsoft Office\root\Templates\
  - :\Program Files\Microsoft Office (x86)\Templates
  - :\Program Files\Microsoft Office\root\Templates\
  - :\Program Files\Microsoft Office\Templates\
filter_main_office_apps:
  Image|contains:
  - :\Program Files\Microsoft Office\
  - :\Program Files (x86)\Microsoft Office\
filter_main_office_click_to_run:
  Image|contains: :\Program Files\Common Files\Microsoft Shared\ClickToRun\
  Image|endswith: \OfficeClickToRun.exe
selection:
  TargetObject|contains: Security\Trusted Locations\Location
  TargetObject|endswith: \Path
```

## MITRE ATT&CK
- T1112

## False Positives
- Other unknown legitimate or custom paths need to be filtered to avoid false positives

## References
- Internal Research
- https://admx.help/?Category=Office2016&Policy=excel16.Office.Microsoft.Policies.Windows::L_TrustedLoc01

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-21
- **Rule ID:** `f742bde7-9528-42e5-bd82-84f51a8387d2`
- **Source file:** `windows/registry/registry_set/registry_set_office_trusted_location_uncommon.yml`
