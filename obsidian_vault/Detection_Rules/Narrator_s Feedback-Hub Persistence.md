---
type: detection_rule
title: "Narrator's Feedback-Hub Persistence"
rule_id: f663a6d9-9d1b-49b8-b2b1-0637914d199a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Narrator's Feedback-Hub Persistence

## Description
Detects abusing Windows 10 Narrator's Feedback-Hub

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  EventType: DeleteValue
  TargetObject|endswith: \AppXypsaf9f1qserqevf0sws76dx4k9a5206\Shell\open\command\DelegateExecute
selection2:
  TargetObject|endswith: \AppXypsaf9f1qserqevf0sws76dx4k9a5206\Shell\open\command\(Default)
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Unknown

## References
- https://giuliocomi.blogspot.com/2019/10/abusing-windows-10-narrators-feedback.html

## Metadata
- **Author:** Dmitriy Lifanov, oscd.community
- **Date:** 2019-10-25
- **Rule ID:** `f663a6d9-9d1b-49b8-b2b1-0637914d199a`
- **Source file:** `windows/registry/registry_event/registry_event_narrator_feedback_persistance.yml`
