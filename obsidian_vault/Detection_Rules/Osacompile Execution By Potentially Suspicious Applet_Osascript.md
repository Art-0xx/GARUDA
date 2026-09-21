---
type: detection_rule
title: "Osacompile Execution By Potentially Suspicious Applet/Osascript"
rule_id: a753a6af-3126-426d-8bd0-26ebbcb92254
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059.002]
---

# Osacompile Execution By Potentially Suspicious Applet/Osascript

## Description
Detects potential suspicious applet or osascript executing "osacompile".

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: osacompile
  ParentImage|endswith:
  - /applet
  - /osascript
```

## MITRE ATT&CK
- T1059.002

## False Positives
- Unknown

## References
- https://redcanary.com/blog/mac-application-bundles/

## Metadata
- **Author:** Sohan G (D4rkCiph3r), Red Canary (Idea)
- **Date:** 2023-04-03
- **Rule ID:** `a753a6af-3126-426d-8bd0-26ebbcb92254`
- **Source file:** `macos/process_creation/proc_creation_macos_suspicious_applet_behaviour.yml`
