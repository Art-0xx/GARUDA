---
type: detection_rule
title: "CMSTP Execution Process Access"
rule_id: 3b4b232a-af90-427c-a22f-30b0c0837b95
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.003, attack.t1559.001]
---

# CMSTP Execution Process Access

## Description
Detects various indicators of Microsoft Connection Manager Profile Installer execution

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains: cmlua.dll
```

## MITRE ATT&CK
- T1218.003
- T1559.001

## False Positives
- Legitimate CMSTP use (unlikely in modern enterprise environments)

## References
- https://web.archive.org/web/20190720093911/http://www.endurant.io/cmstp/detecting-cmstp-enabled-code-execution-and-uac-bypass-with-sysmon/

## Metadata
- **Author:** Nik Seetharaman
- **Date:** 2018-07-16
- **Rule ID:** `3b4b232a-af90-427c-a22f-30b0c0837b95`
- **Source file:** `windows/process_access/proc_access_win_cmstp_execution_by_access.yml`
