---
type: detection_rule
title: "Potential Persistence Via Shim Database In Uncommon Location"
rule_id: 6b6976a3-b0e6-4723-ac24-ae38a737af41
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.011]
---

# Potential Persistence Via Shim Database In Uncommon Location

## Description
Detects the installation of a new shim database where the file is located in a non-default location

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_known_locations:
  Details|contains: :\Windows\AppPatch\Custom
selection:
  TargetObject|contains|all:
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\InstalledSDB\
  - \DatabasePath
```

## MITRE ATT&CK
- T1546.011

## False Positives
- Unknown

## References
- https://www.fireeye.com/blog/threat-research/2017/05/fin7-shim-databases-persistence.html
- https://andreafortuna.org/2018/11/12/process-injection-and-persistence-using-application-shimming/
- https://www.blackhat.com/docs/asia-14/materials/Erickson/Asia-14-Erickson-Persist-It-Using-And-Abusing-Microsofts-Fix-It-Patches.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-01
- **Rule ID:** `6b6976a3-b0e6-4723-ac24-ae38a737af41`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_shim_database_uncommon_location.yml`
