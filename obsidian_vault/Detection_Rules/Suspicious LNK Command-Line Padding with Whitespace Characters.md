---
type: detection_rule
title: "Suspicious LNK Command-Line Padding with Whitespace Characters"
rule_id: dd8756e7-a3a0-4768-b47e-8f545d1a751c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002]
---

# Suspicious LNK Command-Line Padding with Whitespace Characters

## Description
Detects exploitation of LNK file command-line length discrepancy, where attackers hide malicious commands beyond the 260-character UI limit while the actual command-line argument field supports 4096 characters using whitespace padding (e.g., 0x20, 0x09-0x0D).
Adversaries insert non-printable whitespace characters (e.g., Line Feed \x0A, Carriage Return \x0D) to pad the visible section of the LNK file, pushing malicious commands past the UI-visible boundary.
The hidden payload, executed at runtime but invisible in Windows Explorer properties, enables stealthy execution and evasion—commonly used for social engineering attacks.
This rule flags suspicious use of such padding observed in real-world attacks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
- CommandLine|contains:
  - '                 '
  - \u0009
  - \u000A
  - \u0011
  - \u0012
  - \u0013
  - \u000B
  - \u000C
  - \u000D
- CommandLine|re: \n\n\n\n\n\n
selection_img:
- ParentImage|endswith: \explorer.exe
- ParentCommandLine|contains: .lnk
```

## MITRE ATT&CK
- T1204.002

## False Positives
- Unknown

## References
- https://syedhasan010.medium.com/forensics-analysis-of-an-lnk-file-da68a98b8415
- https://thehackernews.com/2025/03/unpatched-windows-zero-day-flaw.html
- https://www.trendmicro.com/en_us/research/25/c/windows-shortcut-zero-day-exploit.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-03-19
- **Rule ID:** `dd8756e7-a3a0-4768-b47e-8f545d1a751c`
- **Source file:** `windows/process_creation/proc_creation_win_susp_lnk_exec_hidden_cmd.yml`
