---
type: detection_rule
title: "Potentially Suspicious Command Targeting Teams Sensitive Files"
rule_id: d2eb17db-1d39-41dc-b57f-301f6512fa75
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1528]
---

# Potentially Suspicious Command Targeting Teams Sensitive Files

## Description
Detects a commandline containing references to the Microsoft Teams database or cookies files from a process other than Teams.
The database might contain authentication tokens and other sensitive information about the logged in accounts.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_locations:
  Image|endswith: \Microsoft\Teams\current\Teams.exe
selection:
  CommandLine|contains:
  - \Microsoft\Teams\Cookies
  - \Microsoft\Teams\Local Storage\leveldb
```

## MITRE ATT&CK
- T1528

## False Positives
- Unknown

## References
- https://www.bleepingcomputer.com/news/security/microsoft-teams-stores-auth-tokens-as-cleartext-in-windows-linux-macs/
- https://www.vectra.ai/blogpost/undermining-microsoft-teams-security-by-mining-tokens

## Metadata
- **Author:** @SerkinValery
- **Date:** 2022-09-16
- **Rule ID:** `d2eb17db-1d39-41dc-b57f-301f6512fa75`
- **Source file:** `windows/process_creation/proc_creation_win_teams_suspicious_command_line_cred_access.yml`
