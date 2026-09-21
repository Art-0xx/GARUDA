---
type: detection_rule
title: "Flash Player Update from Suspicious Location"
rule_id: 4922a5dd-6743-4fc2-8e81-144374280997
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1189, attack.t1204.002, attack.t1036.005]
---

# Flash Player Update from Suspicious Location

## Description
Detects a flashplayer update from an unofficial location

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  cs-host|endswith: .adobe.com
selection:
- c-uri|contains: /flash_install.php
- c-uri|endswith: /install_flash_player.exe
```

## MITRE ATT&CK
- T1189
- T1204.002
- T1036.005

## False Positives
- Unknown flash download locations

## References
- https://gist.github.com/roycewilliams/a723aaf8a6ac3ba4f817847610935cfb

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-10-25
- **Rule ID:** `4922a5dd-6743-4fc2-8e81-144374280997`
- **Source file:** `web/proxy_generic/proxy_susp_flash_download_loc.yml`
