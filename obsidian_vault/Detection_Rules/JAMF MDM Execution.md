---
type: detection_rule
title: "JAMF MDM Execution"
rule_id: be2e3a5c-9cc7-4d02-842a-68e9cb26ec49
platform: macos
level: low
status: test
tags: [detection, sigma, macos]
---

# JAMF MDM Execution

## Description
Detects execution of the "jamf" binary to create user accounts and run commands. For example, the binary can be abused by attackers on the system in order to bypass security controls or remove application control polices.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - createAccount
  - manage
  - removeFramework
  - removeMdmProfile
  - resetPassword
  - setComputerName
  Image|endswith: /jamf
```

## False Positives
- Legitimate use of the JAMF CLI tool by IT support and administrators

## References
- https://github.com/MythicAgents/typhon/
- https://www.zoocoup.org/casper/jamf_cheatsheet.pdf
- https://docs.jamf.com/10.30.0/jamf-pro/administrator-guide/Components_Installed_on_Managed_Computers.html

## Metadata
- **Author:** Jay Pandit
- **Date:** 2023-08-22
- **Rule ID:** `be2e3a5c-9cc7-4d02-842a-68e9cb26ec49`
- **Source file:** `macos/process_creation/proc_creation_macos_jamf_usage.yml`
