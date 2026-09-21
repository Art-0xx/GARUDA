---
type: detection_rule
title: "Sticky Key Like Backdoor Usage - Registry"
rule_id: baca5663-583c-45f9-b5dc-ea96a22ce542
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.008]
---

# Sticky Key Like Backdoor Usage - Registry

## Description
Detects the usage and installation of a backdoor that uses an option to register a malicious debugger for built-in tools that are accessible in the login screen

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection_registry
selection_registry:
  TargetObject|endswith:
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\sethc.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\utilman.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\Magnify.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\Narrator.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\DisplaySwitch.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\atbroker.exe\Debugger
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\HelpPane.exe\Debugger
```

## MITRE ATT&CK
- T1546.008

## False Positives
- Unlikely

## References
- https://blogs.technet.microsoft.com/jonathantrull/2016/10/03/detecting-sticky-key-backdoors/
- https://bazaar.abuse.ch/sample/6f3aa9362d72e806490a8abce245331030d1ab5ac77e400dd475748236a6cc81/

## Metadata
- **Author:** Florian Roth (Nextron Systems), @twjackomo, Jonhnathan Ribeiro, oscd.community
- **Date:** 2018-03-15
- **Rule ID:** `baca5663-583c-45f9-b5dc-ea96a22ce542`
- **Source file:** `windows/registry/registry_event/registry_event_stickykey_like_backdoor.yml`
