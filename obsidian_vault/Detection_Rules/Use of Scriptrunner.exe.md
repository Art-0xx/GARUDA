---
type: detection_rule
title: "Use of Scriptrunner.exe"
rule_id: 64760eef-87f7-4ed3-93fd-655668ea9420
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Use of Scriptrunner.exe

## Description
The "ScriptRunner.exe" binary can be abused to proxy execution through it and bypass possible whitelisting

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains: ' -appvscript '
selection_img:
- Image|endswith: \ScriptRunner.exe
- OriginalFileName: ScriptRunner.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate use when App-v is deployed

## References
- https://lolbas-project.github.io/lolbas/Binaries/Scriptrunner/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-01
- **Rule ID:** `64760eef-87f7-4ed3-93fd-655668ea9420`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_scriptrunner.yml`
