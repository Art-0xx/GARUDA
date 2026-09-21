---
type: detection_rule
title: "UAC Bypass Via Wsreset"
rule_id: 6ea3bf32-9680-422d-9f50-e90716b12a66
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Via Wsreset

## Description
Unfixed method for UAC bypass from Windows 10. WSReset.exe file associated with the Windows Store. It will run a binary file contained in a low-privilege registry.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \AppX82a6gwre4fdg3bt635tn5ctqjf8msdd2\Shell\open\command
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://www.bleepingcomputer.com/news/security/trickbot-uses-a-new-windows-10-uac-bypass-to-launch-quietly
- https://lolbas-project.github.io/lolbas/Binaries/Wsreset

## Metadata
- **Author:** oscd.community, Dmitry Uchakin
- **Date:** 2020-10-07
- **Rule ID:** `6ea3bf32-9680-422d-9f50-e90716b12a66`
- **Source file:** `windows/registry/registry_event/registry_event_bypass_via_wsreset.yml`
