---
type: detection_rule
title: "Potentially Suspicious DMP/HDMP File Creation"
rule_id: aba15bdd-657f-422a-bab3-ac2d2a0d6f1c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious DMP/HDMP File Creation

## Description
Detects the creation of a file with the ".dmp"/".hdmp" extension by a shell or scripting application such as "cmd", "powershell", etc. Often created by software during a crash. Memory dumps can sometimes contain sensitive information such as credentials. It's best to determine the source of the crash.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  TargetFilename|endswith:
  - .dmp
  - .dump
  - .hdmp
```

## False Positives
- Some administrative PowerShell or VB scripts might have the ability to collect dumps and move them to other folders which might trigger a false positive.

## References
- https://learn.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-07
- **Rule ID:** `aba15bdd-657f-422a-bab3-ac2d2a0d6f1c`
- **Source file:** `windows/file/file_event/file_event_win_dump_file_susp_creation.yml`
