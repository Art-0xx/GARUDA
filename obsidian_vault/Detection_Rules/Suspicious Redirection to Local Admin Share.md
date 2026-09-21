---
type: detection_rule
title: "Suspicious Redirection to Local Admin Share"
rule_id: ab9e3b40-0c85-4ba1-aede-455d226fd124
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048]
---

# Suspicious Redirection to Local Admin Share

## Description
Detects a suspicious output redirection to the local admins share, this technique is often found in malicious scripts or hacktool stagers

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_redirect:
  CommandLine|contains: '>'
selection_share:
  CommandLine|contains:
  - \\\\127.0.0.1\\admin$\\
  - \\\\localhost\\admin$\\
```

## MITRE ATT&CK
- T1048

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2022/01/15/destructive-malware-targeting-ukrainian-organizations/
- http://blog.talosintelligence.com/2022/09/lazarus-three-rats.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-16
- **Rule ID:** `ab9e3b40-0c85-4ba1-aede-455d226fd124`
- **Source file:** `windows/process_creation/proc_creation_win_susp_redirect_local_admin_share.yml`
