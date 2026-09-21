---
type: detection_rule
title: "NewActiveScriptEventConsumer Creation Attempt via Wmic.EXE"
rule_id: ebef4391-1a81-4761-a40a-1db446c0e625
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# NewActiveScriptEventConsumer Creation Attempt via Wmic.EXE

## Description
Detects the attempt to create an ActiveScriptEventConsumer via WMIC.EXE.
An ActiveScriptEventConsumer is a built-in Windows Management Instrumentation (WMI) class that
automatically executes a predefined script (in VBScript or JScript) whenever a specific system event occurs.
Adversaries often abuse ActiveScriptEventConsumer to maintain persistence on a compromised host by executing a malicious script whenever a specific event occurs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ActiveScriptEventConsumer
  - ' CREATE '
selection_img:
- OriginalFileName: wmic.exe
- Image|endswith: \WMIC.exe
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Legitimate software creating script event consumers

## References
- https://twitter.com/johnlatwc/status/1408062131321270282?s=12
- https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-06-25
- **Rule ID:** `ebef4391-1a81-4761-a40a-1db446c0e625`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_eventconsumer_creation.yml`
