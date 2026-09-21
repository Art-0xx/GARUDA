---
type: detection_rule
title: "WMI Persistence - Script Event Consumer"
rule_id: ec1d5e28-8f3b-4188-a6f8-6e8df81dc28e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# WMI Persistence - Script Event Consumer

## Description
Detects the execution of a script event consumer. When scrcons.exe launches, it does so in response to the creation of an ActiveScriptEventConsumer instance
and will execute registered JScript or VBScript code as a result.
Script event consumers are a built-in Windows Management Instrumentation (WMI) class that
automatically executes a predefined script (in VBScript or JScript) whenever a specific system event occurs.
Adversaries often abuse script event consumers to maintain persistence on a compromised host
by executing a malicious script whenever a specific event occurs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image: C:\WINDOWS\system32\wbem\scrcons.exe
  ParentImage: C:\Windows\System32\svchost.exe
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Legitimate event consumers
- Dell computers on some versions register an event consumer that is known to cause false positives when brightness is changed by the corresponding keyboard button

## References
- https://redcanary.com/blog/threat-detection/child-processes/
- https://www.eideon.com/2018-03-02-THL03-WMIBackdoors/

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2018-03-07
- **Rule ID:** `ec1d5e28-8f3b-4188-a6f8-6e8df81dc28e`
- **Source file:** `windows/process_creation/proc_creation_win_wmi_persistence_script_event_consumer.yml`
