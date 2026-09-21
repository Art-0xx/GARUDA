---
type: detection_rule
title: "Execute Pcwrun.EXE To Leverage Follina"
rule_id: 6004abd0-afa4-4557-ba90-49d172e0a299
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Execute Pcwrun.EXE To Leverage Follina

## Description
Detects indirect command execution via Program Compatibility Assistant "pcwrun.exe" leveraging the follina (CVE-2022-30190) vulnerability

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ../
  Image|endswith: \pcwrun.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unlikely

## References
- https://twitter.com/nas_bench/status/1535663791362519040

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-13
- **Rule ID:** `6004abd0-afa4-4557-ba90-49d172e0a299`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_pcwrun_follina.yml`
