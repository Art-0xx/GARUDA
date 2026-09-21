---
type: detection_rule
title: "COM Object Execution via Xwizard.EXE"
rule_id: 53d4bb30-3f36-4e8a-b078-69d36c4a79ff
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# COM Object Execution via Xwizard.EXE

## Description
Detects the execution of Xwizard tool with the "RunWizard" flag and a GUID like argument.
This utility can be abused in order to run custom COM object created in the registry.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine: RunWizard
  CommandLine|re: \{[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\}
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Xwizard/
- https://www.elastic.co/guide/en/security/current/execution-of-com-object-via-xwizard.html
- https://www.hexacorn.com/blog/2017/07/31/the-wizard-of-x-oppa-plugx-style/

## Metadata
- **Author:** Ensar Şamil, @sblmsrsn, @oscd_initiative, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-10-07
- **Rule ID:** `53d4bb30-3f36-4e8a-b078-69d36c4a79ff`
- **Source file:** `windows/process_creation/proc_creation_win_xwizard_runwizard_com_object_exec.yml`
