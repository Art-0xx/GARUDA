---
type: detection_rule
title: "Potential CommandLine Obfuscation Using Unicode Characters From Suspicious Image"
rule_id: 584bca0f-3608-4402-80fd-4075ff6072e3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027]
---

# Potential CommandLine Obfuscation Using Unicode Characters From Suspicious Image

## Description
Detects potential commandline obfuscation using unicode characters.
Adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
  - \wscript.exe
  OriginalFileName:
  - Cmd.EXE
  - cscript.exe
  - PowerShell.EXE
  - PowerShell_ISE.EXE
  - pwsh.dll
  - wscript.exe
selection_special_chars:
  CommandLine|contains:
  - "\u02E3"
  - "\u02EA"
  - "\u02E2"
  - "\u2215"
  - "\u2044"
  - "\u2015"
  - "\u2014"
  - "\_"
  - "\xAF"
  - "\xAE"
  - "\xB6"
  - "\u2800"
```

## MITRE ATT&CK
- T1027

## False Positives
- Unknown

## References
- https://www.wietzebeukema.nl/blog/windows-command-line-obfuscation
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1027/T1027.md#atomic-test-6---dlp-evasion-via-sensitive-data-in-vba-macro-over-http

## Metadata
- **Author:** frack113, Florian Roth (Nextron Systems), Josh Nickels
- **Date:** 2024-09-02
- **Rule ID:** `584bca0f-3608-4402-80fd-4075ff6072e3`
- **Source file:** `windows/process_creation/proc_creation_win_susp_cli_obfuscation_unicode_img.yml`
