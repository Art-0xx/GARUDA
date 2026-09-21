---
type: detection_rule
title: "Potential DLL Injection Via AccCheckConsole"
rule_id: 0f6da907-5854-4be6-859a-e9958747b0aa
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential DLL Injection Via AccCheckConsole

## Description
Detects the execution "AccCheckConsole" a command-line tool for verifying the accessibility implementation of an application's UI.
One of the tests that this checker can run are called "verification routine", which tests for things like Consistency, Navigation, etc.
The tool allows a user to provide a DLL that can contain a custom "verification routine". An attacker can build such DLLs and pass it via the CLI, which would then be loaded in the context of the "AccCheckConsole" utility.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' -hwnd'
  - ' -process '
  - ' -window '
selection_img:
- Image|endswith: \AccCheckConsole.exe
- OriginalFileName: AccCheckConsole.exe
```

## False Positives
- Legitimate use of the UI Accessibility Checker

## References
- https://gist.github.com/bohops/2444129419c8acf837aedda5f0e7f340
- https://twitter.com/bohops/status/1477717351017680899?s=12
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/AccCheckConsole/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-06
- **Rule ID:** `0f6da907-5854-4be6-859a-e9958747b0aa`
- **Source file:** `windows/process_creation/proc_creation_win_acccheckconsole_execution.yml`
