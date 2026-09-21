---
type: detection_rule
title: "Suspicious UltraVNC Execution"
rule_id: 871b9555-69ca-4993-99d3-35a59f9f3599
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.005]
---

# Suspicious UltraVNC Execution

## Description
Detects suspicious UltraVNC command line flag combination that indicate a auto reconnect upon execution, e.g. startup (as seen being used by Gamaredon threat group)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - '-autoreconnect '
  - '-connect '
  - '-id:'
```

## MITRE ATT&CK
- T1021.005

## False Positives
- Unknown

## References
- https://web.archive.org/web/20220224045756/https://www.ria.ee/sites/default/files/content-editors/kuberturve/tale_of_gamaredon_infection.pdf
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/shuckworm-gamaredon-espionage-ukraine
- https://unit42.paloaltonetworks.com/unit-42-title-gamaredon-group-toolset-evolution
- https://uvnc.com/docs/uvnc-viewer/52-ultravnc-viewer-commandline-parameters.html

## Metadata
- **Author:** Bhabesh Raj
- **Date:** 2022-03-04
- **Rule ID:** `871b9555-69ca-4993-99d3-35a59f9f3599`
- **Source file:** `windows/process_creation/proc_creation_win_ultravnc_susp_execution.yml`
