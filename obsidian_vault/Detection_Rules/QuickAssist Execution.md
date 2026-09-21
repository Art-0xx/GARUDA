---
type: detection_rule
title: "QuickAssist Execution"
rule_id: e20b5b14-ce93-4230-88af-981983ef6e74
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# QuickAssist Execution

## Description
Detects the execution of Microsoft Quick Assist tool "QuickAssist.exe". This utility can be used by attackers to gain remote access.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \QuickAssist.exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate use of Quick Assist in the environment.

## References
- https://www.microsoft.com/en-us/security/blog/2024/05/15/threat-actors-misusing-quick-assist-in-social-engineering-attacks-leading-to-ransomware/
- https://www.linkedin.com/posts/kevin-beaumont-security_ive-been-assisting-a-few-orgs-hit-with-successful-activity-7268055739116445701-xxjZ/
- https://x.com/cyb3rops/status/1862406110365245506
- https://learn.microsoft.com/en-us/windows/client-management/client-tools/quick-assist

## Metadata
- **Author:** Muhammad Faisal (@faisalusuf)
- **Date:** 2024-12-19
- **Rule ID:** `e20b5b14-ce93-4230-88af-981983ef6e74`
- **Source file:** `windows/process_creation/proc_creation_win_quickassist_execution.yml`
