---
type: detection_rule
title: "Shell Open Registry Keys Manipulation"
rule_id: 152f3630-77c1-4284-bcc0-4cc68ab2f6e7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002, attack.t1546.001]
---

# Shell Open Registry Keys Manipulation

## Description
Detects manipulation of shell open command registry keys such as "ms-settings" and "exefile",
which are commonly abused to achieve UAC bypass (e.g. via fodhelper.exe) or establish persistence
through file association hijacking.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_main_*
filter_main_default_com:
  Details:
  - '{4813071a-41ad-44a2-9835-886d2f63ca30}'
  - '{A56A841F-E974-45C1-8001-7E3F8A085917}'
  - '{4ED3A719-CEA8-4BD9-910D-E252F997AFC2}'
  - '{BFEC0C93-0B7D-4F2C-B09C-AFFFC4BDAE78}'
filter_main_empty:
  Details: (Empty)
selection_1:
  Details|contains: \Software\Classes\{
  EventType: SetValue
  TargetObject|endswith: Classes\ms-settings\shell\open\command\SymbolicLinkValue
selection_2:
  TargetObject|endswith: Classes\ms-settings\shell\open\command\DelegateExecute
selection_3:
  EventType: SetValue
  TargetObject|endswith:
  - Classes\ms-settings\shell\open\command\(Default)
  - Classes\exefile\shell\open\command\(Default)
```

## MITRE ATT&CK
- T1548.002
- T1546.001

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME
- https://winscripting.blog/2017/05/12/first-entry-welcome-and-uac-bypass/
- https://github.com/RhinoSecurityLabs/Aggressor-Scripts/tree/master/UACBypass
- https://tria.ge/211119-gs7rtshcfr/behavioral2 [Lokibot sample from Nov 2021]

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-30
- **Rule ID:** `152f3630-77c1-4284-bcc0-4cc68ab2f6e7`
- **Source file:** `windows/registry/registry_event/registry_event_shell_open_keys_manipulation.yml`
