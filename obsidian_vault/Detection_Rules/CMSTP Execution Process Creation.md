---
type: detection_rule
title: "CMSTP Execution Process Creation"
rule_id: 7d4cdc5a-0076-40ca-aac8-f7e714570e47
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.003]
---

# CMSTP Execution Process Creation

## Description
Detects various indicators of Microsoft Connection Manager Profile Installer execution

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentImage|endswith: \cmstp.exe
```

## MITRE ATT&CK
- T1218.003

## False Positives
- Legitimate CMSTP use (unlikely in modern enterprise environments)

## References
- https://web.archive.org/web/20190720093911/http://www.endurant.io/cmstp/detecting-cmstp-enabled-code-execution-and-uac-bypass-with-sysmon/

## Metadata
- **Author:** Nik Seetharaman
- **Date:** 2018-07-16
- **Rule ID:** `7d4cdc5a-0076-40ca-aac8-f7e714570e47`
- **Source file:** `windows/process_creation/proc_creation_win_cmstp_execution_by_creation.yml`
