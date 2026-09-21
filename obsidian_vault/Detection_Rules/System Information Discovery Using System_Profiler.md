---
type: detection_rule
title: "System Information Discovery Using System_Profiler"
rule_id: 4809c683-059b-4935-879d-36835986f8cf
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1082, attack.t1497.001]
---

# System Information Discovery Using System_Profiler

## Description
Detects the execution of "system_profiler" with specific "Data Types" that have been seen being used by threat actors and malware. It provides system hardware and software configuration information.
This process is primarily used for system information discovery. However, "system_profiler" can also be used to determine if virtualization software is being run for defense evasion purposes.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains:
  - SPApplicationsDataType
  - SPHardwareDataType
  - SPNetworkDataType
  - SPUSBDataType
selection_img:
- Image|endswith: /system_profiler
- CommandLine|contains: system_profiler
```

## MITRE ATT&CK
- T1082
- T1497.001

## False Positives
- Legitimate administrative activities

## References
- https://www.trendmicro.com/en_za/research/20/k/new-macos-backdoor-connected-to-oceanlotus-surfaces.html
- https://www.sentinelone.com/wp-content/uploads/pdf-gen/1630910064/20-common-tools-techniques-used-by-macos-threat-actors-malware.pdf
- https://ss64.com/mac/system_profiler.html
- https://objective-see.org/blog/blog_0x62.html
- https://www.welivesecurity.com/2019/04/09/oceanlotus-macos-malware-update/

## Metadata
- **Author:** Stephen Lincoln `@slincoln_aiq` (AttackIQ)
- **Date:** 2024-01-02
- **Rule ID:** `4809c683-059b-4935-879d-36835986f8cf`
- **Source file:** `macos/process_creation/proc_creation_macos_system_profiler_discovery.yml`
