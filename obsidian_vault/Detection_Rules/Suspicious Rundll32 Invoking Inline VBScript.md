---
type: detection_rule
title: "Suspicious Rundll32 Invoking Inline VBScript"
rule_id: 1cc50f3f-1fc8-4acf-b2e9-6f172e1fdebd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Suspicious Rundll32 Invoking Inline VBScript

## Description
Detects suspicious process related to rundll32 based on command line that invokes inline VBScript as seen being used by UNC2452

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
  - rundll32.exe
  - Execute
  - RegRead
  - window.close
```

## MITRE ATT&CK
- T1055

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-03-05
- **Rule ID:** `1cc50f3f-1fc8-4acf-b2e9-6f172e1fdebd`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_inline_vbs.yml`
