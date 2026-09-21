---
type: detection_rule
title: "Registry Persistence Mechanisms in Recycle Bin"
rule_id: 277efb8f-60be-4f10-b4d3-037802f37167
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547]
---

# Registry Persistence Mechanisms in Recycle Bin

## Description
Detects persistence registry keys for Recycle Bin

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_create:
  EventType: RenameKey
  NewName|contains: \CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\shell\open
selection_set:
  EventType: SetValue
  TargetObject|contains: \CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\shell\open\command\(Default)
```

## MITRE ATT&CK
- T1547

## False Positives
- Unknown

## References
- https://github.com/vxunderground/VXUG-Papers/blob/751edb8d50f95bd7baa730adf2c6c3bb1b034276/The%20Persistence%20Series/Persistence%20via%20Recycle%20Bin/Persistence_via_Recycle_Bin.pdf
- https://persistence-info.github.io/Data/recyclebin.html
- https://www.hexacorn.com/blog/2018/05/28/beyond-good-ol-run-key-part-78-2/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-18
- **Rule ID:** `277efb8f-60be-4f10-b4d3-037802f37167`
- **Source file:** `windows/registry/registry_event/registry_event_persistence_recycle_bin.yml`
