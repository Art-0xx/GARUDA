---
type: detection_rule
title: "Suspicious Installer Package Child Process"
rule_id: e0cfaecd-602d-41af-988d-f6ccebb2af26
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059, attack.t1059.007, attack.t1071, attack.t1071.001]
---

# Suspicious Installer Package Child Process

## Description
Detects the execution of suspicious child processes from macOS installer package parent process. This includes osascript, JXA, curl and wget amongst other interpreters

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection_installer
selection_installer:
  CommandLine|contains:
  - preinstall
  - postinstall
  Image|endswith:
  - /sh
  - /bash
  - /dash
  - /python
  - /ruby
  - /perl
  - /php
  - /javascript
  - /osascript
  - /tclsh
  - /curl
  - /wget
  ParentImage|endswith:
  - /package_script_service
  - /installer
```

## MITRE ATT&CK
- T1059
- T1059.007
- T1071
- T1071.001

## False Positives
- Legitimate software uses the scripts (preinstall, postinstall)

## References
- https://redcanary.com/blog/clipping-silver-sparrows-wings/
- https://github.com/elastic/detection-rules/blob/4312d8c9583be524578a14fe6295c3370b9a9307/rules/macos/execution_installer_package_spawned_network_event.toml

## Metadata
- **Author:** Sohan G (D4rkCiph3r)
- **Date:** 2023-02-18
- **Rule ID:** `e0cfaecd-602d-41af-988d-f6ccebb2af26`
- **Source file:** `macos/process_creation/proc_creation_macos_installer_susp_child_process.yml`
