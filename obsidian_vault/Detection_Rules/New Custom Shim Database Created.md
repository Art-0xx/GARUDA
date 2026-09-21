---
type: detection_rule
title: "New Custom Shim Database Created"
rule_id: ee63c85c-6d51-4d12-ad09-04e25877a947
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.009]
---

# New Custom Shim Database Created

## Description
Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims.
The Microsoft Windows Application Compatibility Infrastructure/Framework (Application Shim) was created to allow for backward compatibility of software as the operating system codebase changes over time.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains:
  - :\Windows\apppatch\Custom\
  - :\Windows\apppatch\CustomSDB\
```

## MITRE ATT&CK
- T1547.009

## False Positives
- Legitimate custom SHIM installations will also trigger this rule

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.011/T1546.011.md#atomic-test-2---new-shim-database-files-created-in-the-default-shim-database-directory
- https://www.mandiant.com/resources/blog/fin7-shim-databases-persistence
- https://liberty-shell.com/sec/2020/02/25/shim-persistence/
- https://andreafortuna.org/2018/11/12/process-injection-and-persistence-using-application-shimming/

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-29
- **Rule ID:** `ee63c85c-6d51-4d12-ad09-04e25877a947`
- **Source file:** `windows/file/file_event/file_event_win_creation_new_shim_database.yml`
