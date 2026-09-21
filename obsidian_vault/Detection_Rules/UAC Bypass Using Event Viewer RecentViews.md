---
type: detection_rule
title: "UAC Bypass Using Event Viewer RecentViews"
rule_id: 30fc8de7-d833-40c4-96b6-28319fbc4f6c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# UAC Bypass Using Event Viewer RecentViews

## Description
Detects the pattern of UAC Bypass using Event Viewer RecentViews

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_path:
  CommandLine|contains:
  - \Event Viewer\RecentViews
  - \EventV~1\RecentViews
selection_redirect:
  CommandLine|contains: '>'
```

## False Positives
- Unknown

## References
- https://twitter.com/orange_8361/status/1518970259868626944
- https://lolbas-project.github.io/lolbas/Binaries/Eventvwr/#execute

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-11-22
- **Rule ID:** `30fc8de7-d833-40c4-96b6-28319fbc4f6c`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_eventvwr_recentviews.yml`
