---
type: detection_rule
title: "Suspicious Windows Strings In URI"
rule_id: 9f6a34b4-2688-4eb7-a7f5-e39fef573d0e
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1505.003]
---

# Suspicious Windows Strings In URI

## Description
Detects suspicious Windows strings in URI which could indicate possible exfiltration or webshell communication

## Log Source
```yaml
category: webserver
```

## Detection Logic
```yaml
condition: selection
selection:
  cs-uri-query|contains:
  - =C:/Users
  - =C:/Program%20Files
  - =C:/Windows
  - =C%3A%5CUsers
  - =C%3A%5CProgram%20Files
  - =C%3A%5CWindows
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Legitimate application and websites that use windows paths in their URL

## References
- https://thedfirreport.com/2022/06/06/will-the-real-msiexec-please-stand-up-exploit-leads-to-data-exfiltration/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-06
- **Rule ID:** `9f6a34b4-2688-4eb7-a7f5-e39fef573d0e`
- **Source file:** `web/webserver_generic/web_susp_windows_path_uri.yml`
