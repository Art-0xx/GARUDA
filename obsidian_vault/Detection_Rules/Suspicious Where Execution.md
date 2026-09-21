---
type: detection_rule
title: "Suspicious Where Execution"
rule_id: 725a9768-0f5e-4cb3-aec2-bc5719c6831a
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1217]
---

# Suspicious Where Execution

## Description
Adversaries may enumerate browser bookmarks to learn more about compromised hosts.
Browser bookmarks may reveal personal information about users (ex: banking sites, interests, social media, etc.) as well as details about
internal network resources such as servers, tools/dashboards, or other related infrastructure.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of where_*
where_exe:
- Image|endswith: \where.exe
- OriginalFileName: where.exe
where_opt:
  CommandLine|contains:
  - places.sqlite
  - cookies.sqlite
  - formhistory.sqlite
  - logins.json
  - key4.db
  - key3.db
  - sessionstore.jsonlz4
  - History
  - Bookmarks
  - Cookies
  - Login Data
```

## MITRE ATT&CK
- T1217

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1217/T1217.md

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-13
- **Rule ID:** `725a9768-0f5e-4cb3-aec2-bc5719c6831a`
- **Source file:** `windows/process_creation/proc_creation_win_where_browser_data_recon.yml`
