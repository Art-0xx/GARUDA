---
type: detection_rule
title: "JAMF MDM Potential Suspicious Child Process"
rule_id: 2316929c-01aa-438c-970f-099145ab1ee6
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
---

# JAMF MDM Potential Suspicious Child Process

## Description
Detects potential suspicious child processes of "jamf". Could be a sign of potential abuse of Jamf as a C2 server as seen by Typhon MythicAgent.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - /bash
  - /sh
  ParentImage|endswith: /jamf
```

## False Positives
- Legitimate execution of custom scripts or commands by Jamf administrators. Apply additional filters accordingly

## References
- https://github.com/MythicAgents/typhon/
- https://www.zoocoup.org/casper/jamf_cheatsheet.pdf
- https://docs.jamf.com/10.30.0/jamf-pro/administrator-guide/Components_Installed_on_Managed_Computers.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-22
- **Rule ID:** `2316929c-01aa-438c-970f-099145ab1ee6`
- **Source file:** `macos/process_creation/proc_creation_macos_jamf_susp_child.yml`
