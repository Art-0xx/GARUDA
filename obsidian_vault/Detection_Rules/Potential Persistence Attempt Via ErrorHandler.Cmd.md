---
type: detection_rule
title: "Potential Persistence Attempt Via ErrorHandler.Cmd"
rule_id: 15904280-565c-4b73-9303-3291f964e7f9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Attempt Via ErrorHandler.Cmd

## Description
Detects creation of a file named "ErrorHandler.cmd" in the "C:\WINDOWS\Setup\Scripts\" directory which could be used as a method of persistence
The content of C:\WINDOWS\Setup\Scripts\ErrorHandler.cmd is read whenever some tools under C:\WINDOWS\System32\oobe\ (e.g. Setup.exe) fail to run for any reason.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \WINDOWS\Setup\Scripts\ErrorHandler.cmd
```

## False Positives
- Unknown

## References
- https://www.hexacorn.com/blog/2022/01/16/beyond-good-ol-run-key-part-135/
- https://github.com/last-byte/PersistenceSniper

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-09
- **Rule ID:** `15904280-565c-4b73-9303-3291f964e7f9`
- **Source file:** `windows/file/file_event/file_event_win_errorhandler_persistence.yml`
