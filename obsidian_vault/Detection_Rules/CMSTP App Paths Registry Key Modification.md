---
type: detection_rule
title: "CMSTP App Paths Registry Key Modification"
rule_id: b6d235fc-1d38-4b12-adbe-325f06728f37
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.003]
---

# CMSTP App Paths Registry Key Modification

## Description
Detects modifications to the CMSTP App Paths registry key. This may indicate abuse of
Microsoft Connection Manager Profile Installer (CMSTP) for arbitrary code execution or UAC bypass.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_cmcfg32:
  Details:
  - C:\Windows\System32\cmcfg32.dll
  - C:\Windows\SysWOW64\cmcfg32.dll
  TargetObject|endswith: SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\cmmgr32.exe\CmstpExtensionDll
filter_main_empty:
  Details: (Empty)
selection:
  TargetObject|contains: SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\cmmgr32.exe\
```

## MITRE ATT&CK
- T1218.003

## False Positives
- Legitimate CMSTP use (unlikely in modern enterprise environments)

## References
- https://lolbas-project.github.io/lolbas/Binaries/Cmstp/
- https://web.archive.org/web/20190720093911/http://www.endurant.io/cmstp/detecting-cmstp-enabled-code-execution-and-uac-bypass-with-sysmon/
- https://web.archive.org/web/20190722224110/https://oddvar.moe/2017/08/15/research-on-cmstp-exe/

## Metadata
- **Author:** Nik Seetharaman
- **Date:** 2018-07-16
- **Rule ID:** `b6d235fc-1d38-4b12-adbe-325f06728f37`
- **Source file:** `windows/registry/registry_event/registry_event_cmstp_execution_by_registry.yml`
