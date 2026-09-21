---
type: detection_rule
title: "Automated Collection Bookmarks Using Get-ChildItem PowerShell"
rule_id: e0565f5d-d420-4e02-8a68-ac00d864f9cf
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1217]
---

# Automated Collection Bookmarks Using Get-ChildItem PowerShell

## Description
Adversaries may enumerate browser bookmarks to learn more about compromised hosts.
Browser bookmarks may reveal personal information about users (ex: banking sites, interests, social media, etc.) as well as details about
internal network resources such as servers, tools/dashboards, or other related infrastructure.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - Get-ChildItem
  - ' -Recurse '
  - ' -Path '
  - ' -Filter Bookmarks'
  - ' -ErrorAction SilentlyContinue'
  - ' -Force'
```

## MITRE ATT&CK
- T1217

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1217/T1217.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-13
- **Rule ID:** `e0565f5d-d420-4e02-8a68-ac00d864f9cf`
- **Source file:** `windows/powershell/powershell_script/posh_ps_get_childitem_bookmarks.yml`
