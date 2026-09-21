---
type: detection_rule
title: "LOLBAS Data Exfiltration by DataSvcUtil.exe"
rule_id: e290b10b-1023-4452-a4a9-eb31a9013b3a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567]
---

# LOLBAS Data Exfiltration by DataSvcUtil.exe

## Description
Detects when a user performs data exfiltration by using DataSvcUtil.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains:
  - '/in:'
  - '/out:'
  - '/uri:'
selection_img:
- Image|endswith: \DataSvcUtil.exe
- OriginalFileName: DataSvcUtil.exe
```

## MITRE ATT&CK
- T1567

## False Positives
- DataSvcUtil.exe being used may be performed by a system administrator.
- Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- DataSvcUtil.exe being executed from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://gist.github.com/teixeira0xfffff/837e5bfed0d1b0a29a7cb1e5dbdd9ca6
- https://learn.microsoft.com/en-us/previous-versions/dotnet/framework/data/wcf/wcf-data-service-client-utility-datasvcutil-exe
- https://learn.microsoft.com/en-us/previous-versions/dotnet/framework/data/wcf/generating-the-data-service-client-library-wcf-data-services
- https://learn.microsoft.com/en-us/previous-versions/dotnet/framework/data/wcf/how-to-add-a-data-service-reference-wcf-data-services
- https://lolbas-project.github.io/lolbas/Binaries/DataSvcUtil/

## Metadata
- **Author:** Ialle Teixeira @teixeira0xfffff, Austin Songer @austinsonger
- **Date:** 2021-09-30
- **Rule ID:** `e290b10b-1023-4452-a4a9-eb31a9013b3a`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_data_exfiltration_by_using_datasvcutil.yml`
