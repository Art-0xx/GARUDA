---
type: detection_rule
title: "Suspicious Service Installed"
rule_id: f2485272-a156-4773-82d7-1d178bc4905b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Suspicious Service Installed

## Description
Detects installation of NalDrv or PROCEXP152 services via registry-keys to non-system32 folders.
Both services are used in the tool Ghost-In-The-Logs (https://github.com/bats3c/Ghost-In-The-Logs), which uses KDU (https://github.com/hfiref0x/KDU)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Details|contains: \WINDOWS\system32\Drivers\PROCEXP152.SYS
  Image|endswith:
  - \procexp64.exe
  - \procexp64a.exe
  - \procexp.exe
  - \procmon64.exe
  - \procmon64a.exe
  - \procmon.exe
  - \handle.exe
  - \handle64.exe
  - \handle64a.exe
selection:
  TargetObject:
  - HKLM\System\CurrentControlSet\Services\NalDrv\ImagePath
  - HKLM\System\CurrentControlSet\Services\PROCEXP152\ImagePath
```

## MITRE ATT&CK
- T1685

## False Positives
- Other legimate tools using this service names and drivers. Note - clever attackers may easily bypass this detection by just renaming the services. Therefore just Medium-level and don't rely on it.

## References
- https://web.archive.org/web/20200419024230/https://blog.dylan.codes/evading-sysmon-and-windows-event-logging/

## Metadata
- **Author:** xknow (@xknow_infosec), xorxes (@xor_xes)
- **Date:** 2019-04-08
- **Rule ID:** `f2485272-a156-4773-82d7-1d178bc4905b`
- **Source file:** `windows/registry/registry_set/registry_set_susp_service_installed.yml`
