---
type: detection_rule
title: "Run PowerShell Script from Redirected Input Stream"
rule_id: c83bf4b5-cdf0-437c-90fa-43d734f7c476
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Run PowerShell Script from Redirected Input Stream

## Description
Detects PowerShell script execution via input stream redirect

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|re: \s-\s*<
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://github.com/LOLBAS-Project/LOLBAS/blob/4db780e0f0b2e2bb8cb1fa13e09196da9b9f1834/yml/LOLUtilz/OSBinaries/Powershell.yml
- https://twitter.com/Moriarty_Meng/status/984380793383370752

## Metadata
- **Author:** Moriarty Meng (idea), Anton Kutepov (rule), oscd.community
- **Date:** 2020-10-17
- **Rule ID:** `c83bf4b5-cdf0-437c-90fa-43d734f7c476`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_run_script_from_input_stream.yml`
