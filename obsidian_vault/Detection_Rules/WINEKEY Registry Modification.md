---
type: detection_rule
title: "WINEKEY Registry Modification"
rule_id: b98968aa-dbc0-4a9c-ac35-108363cbf8d5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547]
---

# WINEKEY Registry Modification

## Description
Detects potential malicious modification of run keys by winekey or team9 backdoor

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: Software\Microsoft\Windows\CurrentVersion\Run\Backup Mgr
```

## MITRE ATT&CK
- T1547

## False Positives
- Unknown

## References
- https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html

## Metadata
- **Author:** omkar72
- **Date:** 2020-10-30
- **Rule ID:** `b98968aa-dbc0-4a9c-ac35-108363cbf8d5`
- **Source file:** `windows/registry/registry_event/registry_event_runkey_winekey.yml`
