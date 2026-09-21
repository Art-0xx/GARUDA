---
type: detection_rule
title: "UAC Bypass Using EventVwr"
rule_id: 63e4f530-65dc-49cc-8f80-ccfa95c69d43
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# UAC Bypass Using EventVwr

## Description
Detects the pattern of a UAC bypass using Windows Event Viewer

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
selection:
  TargetFilename|endswith:
  - \Microsoft\Event Viewer\RecentViews
  - \Microsoft\EventV~1\RecentViews
```

## False Positives
- Unknown

## References
- https://twitter.com/orange_8361/status/1518970259868626944?s=20&t=RFXqZjtA7tWM3HxqEH78Aw
- https://twitter.com/splinter_code/status/1519075134296006662?s=12&t=DLUXH86WtcmG_AZ5gY3C6g
- https://lolbas-project.github.io/lolbas/Binaries/Eventvwr/#execute

## Metadata
- **Author:** Antonio Cocomazzi (idea), Florian Roth (Nextron Systems)
- **Date:** 2022-04-27
- **Rule ID:** `63e4f530-65dc-49cc-8f80-ccfa95c69d43`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_eventvwr.yml`
