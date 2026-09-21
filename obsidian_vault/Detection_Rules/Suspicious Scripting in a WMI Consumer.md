---
type: detection_rule
title: "Suspicious Scripting in a WMI Consumer"
rule_id: fe21810c-2a8c-478f-8dd3-5a287fb2a0e0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005]
---

# Suspicious Scripting in a WMI Consumer

## Description
Detects suspicious commands that are related to scripting/powershell in WMI Event Consumers

## Log Source
```yaml
category: wmi_event
product: windows
```

## Detection Logic
```yaml
condition: selection_destination
selection_destination:
- Destination|contains|all:
  - new-object
  - net.webclient
  - .downloadstring
- Destination|contains|all:
  - new-object
  - net.webclient
  - .downloadfile
- Destination|contains:
  - ' iex('
  - ' -nop '
  - ' -noprofile '
  - ' -decode '
  - ' -enc '
  - WScript.Shell
  - System.Security.Cryptography.FromBase64Transform
```

## MITRE ATT&CK
- T1059.005

## False Positives
- Legitimate administrative scripts

## References
- https://in.security/an-intro-into-abusing-and-identifying-wmi-event-subscriptions-for-persistence/
- https://github.com/Neo23x0/signature-base/blob/615bf1f6bac3c1bdc417025c40c073e6c2771a76/yara/gen_susp_lnk_files.yar#L19
- https://github.com/RiccardoAncarani/LiquidSnake

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro
- **Date:** 2019-04-15
- **Rule ID:** `fe21810c-2a8c-478f-8dd3-5a287fb2a0e0`
- **Source file:** `windows/wmi_event/sysmon_wmi_susp_scripting.yml`
