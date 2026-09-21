---
type: detection_rule
title: "MsiExec Web Install"
rule_id: f7b5f842-a6af-4da5-9e95-e32478f3cd2f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007, attack.t1105]
---

# MsiExec Web Install

## Description
Detects suspicious msiexec process starts with web addresses as parameter

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - ' msiexec'
  - ://
```

## MITRE ATT&CK
- T1218.007
- T1105

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://blog.trendmicro.com/trendlabs-security-intelligence/attack-using-windows-installer-msiexec-exe-leads-lokibot/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-02-09
- **Rule ID:** `f7b5f842-a6af-4da5-9e95-e32478f3cd2f`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_web_install.yml`
