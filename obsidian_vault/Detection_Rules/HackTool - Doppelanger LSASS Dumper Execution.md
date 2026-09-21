---
type: detection_rule
title: "HackTool - Doppelanger LSASS Dumper Execution"
rule_id: d474c8fe-bb69-4ea0-b7d9-f682b56d52d3
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - Doppelanger LSASS Dumper Execution

## Description
Detects the execution of the Doppelanger hacktool which is used to dump LSASS memory via process cloning while evading common detection methods

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \Doppelganger.exe
- Hashes|contains:
  - IMPHASH=AB94D5217896ADCD765A06B2D52F0AEB
  - IMPHASH=65F0EA61156EE0C2A35421926F0C7F78
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://labs.yarix.com/2025/06/doppelganger-an-advanced-lsass-dumper-with-process-cloning/
- https://github.com/vari-sh/RedTeamGrimoire/tree/668e0357072546065729ad623f8c02f7be21bb08/Doppelganger

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-01
- **Rule ID:** `d474c8fe-bb69-4ea0-b7d9-f682b56d52d3`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_doppelganger.yml`
