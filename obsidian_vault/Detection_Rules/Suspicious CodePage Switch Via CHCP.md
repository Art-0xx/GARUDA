---
type: detection_rule
title: "Suspicious CodePage Switch Via CHCP"
rule_id: c7942406-33dd-4377-a564-0f62db0593a3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Suspicious CodePage Switch Via CHCP

## Description
Detects a code page switch in command line or batch scripts to a rare language

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|endswith:
  - ' 936'
  - ' 1258'
  Image|endswith: \chcp.com
```

## MITRE ATT&CK
- T1036

## False Positives
- Administrative activity (adjust code pages according to your organization's region)

## References
- https://learn.microsoft.com/en-us/windows/win32/intl/code-page-identifiers
- https://twitter.com/cglyer/status/1183756892952248325

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community
- **Date:** 2019-10-14
- **Rule ID:** `c7942406-33dd-4377-a564-0f62db0593a3`
- **Source file:** `windows/process_creation/proc_creation_win_chcp_codepage_switch.yml`
