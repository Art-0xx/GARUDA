---
type: detection_rule
title: "Potential Persistence Via PlistBuddy"
rule_id: 65d506d3-fcfe-4071-b4b2-bcefe721bbbb
platform: macos
level: high
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1543.001, attack.t1543.004]
---

# Potential Persistence Via PlistBuddy

## Description
Detects potential persistence activity using LaunchAgents or LaunchDaemons via the PlistBuddy utility

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - LaunchAgents
  - LaunchDaemons
  CommandLine|contains|all:
  - RunAtLoad
  - 'true'
  Image|endswith: /PlistBuddy
```

## MITRE ATT&CK
- T1543.001
- T1543.004

## False Positives
- Unknown

## References
- https://redcanary.com/blog/clipping-silver-sparrows-wings/
- https://www.manpagez.com/man/8/PlistBuddy/

## Metadata
- **Author:** Sohan G (D4rkCiph3r)
- **Date:** 2023-02-18
- **Rule ID:** `65d506d3-fcfe-4071-b4b2-bcefe721bbbb`
- **Source file:** `macos/process_creation/proc_creation_macos_persistence_via_plistbuddy.yml`
