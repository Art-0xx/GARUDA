---
type: detection_rule
title: "Suspicious File Write to Webapps Root Directory"
rule_id: 89c42960-f244-4dad-9151-ae9b1a3287a2
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003, attack.t1190]
---

# Suspicious File Write to Webapps Root Directory

## Description
Detects suspicious file writes to the root directory of web applications, particularly Apache web servers or Tomcat servers.
This may indicate an attempt to deploy malicious files such as web shells or other unauthorized scripts.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_path:
  TargetFilename|contains: \webapps\ROOT\
selection_servers:
  TargetFilename|contains:
  - \apache
  - \tomcat
selection_susp_extensions:
  TargetFilename|endswith: .jsp
selection_susp_img:
  Image|endswith:
  - \dotnet.exe
  - \w3wp.exe
  - \java.exe
```

## MITRE ATT&CK
- T1505.003
- T1190

## False Positives
- Unknown

## References
- https://labs.watchtowr.com/guess-who-would-be-stupid-enough-to-rob-the-same-vault-twice-pre-auth-rce-chains-in-commvault/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-20
- **Rule ID:** `89c42960-f244-4dad-9151-ae9b1a3287a2`
- **Source file:** `windows/file/file_event/file_event_win_susp_file_write_in_webapps_root.yml`
