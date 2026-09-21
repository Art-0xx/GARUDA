---
type: detection_rule
title: "Potential Persistence Using DebugPath"
rule_id: df4dc653-1029-47ba-8231-3c44238cc0ae
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.015]
---

# Potential Persistence Using DebugPath

## Description
Detects potential persistence using Appx DebugPath

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_debug:
  TargetObject|contains: Classes\ActivatableClasses\Package\Microsoft.
  TargetObject|endswith: \DebugPath
selection_default:
  TargetObject|contains: \Software\Microsoft\Windows\CurrentVersion\PackagedAppXDebug\Microsoft.
  TargetObject|endswith: \(Default)
```

## MITRE ATT&CK
- T1546.015

## False Positives
- Unknown

## References
- https://oddvar.moe/2018/09/06/persistence-using-universal-windows-platform-apps-appx/
- https://github.com/rootm0s/WinPwnage

## Metadata
- **Author:** frack113
- **Date:** 2022-07-27
- **Rule ID:** `df4dc653-1029-47ba-8231-3c44238cc0ae`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_appx_debugger.yml`
