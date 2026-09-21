---
type: detection_rule
title: "Startup Item File Created - MacOS"
rule_id: dfe8b941-4e54-4242-b674-6b613d521962
platform: macos
level: low
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1037.005]
---

# Startup Item File Created - MacOS

## Description
Detects the creation of a startup item plist file, that automatically get executed at boot initialization to establish persistence.
Adversaries may use startup items automatically executed at boot initialization to establish persistence.
Startup items execute during the final phase of the boot process and contain shell scripts or other executable files along with configuration information used by the system to determine the execution order for all startup items.

## Log Source
```yaml
category: file_event
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: .plist
  TargetFilename|startswith:
  - /Library/StartupItems/
  - /System/Library/StartupItems
```

## MITRE ATT&CK
- T1037.005

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1037.005/T1037.005.md
- https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/StartupItems.html

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-14
- **Rule ID:** `dfe8b941-4e54-4242-b674-6b613d521962`
- **Source file:** `macos/file_event/file_event_macos_susp_startup_item_created.yml`
