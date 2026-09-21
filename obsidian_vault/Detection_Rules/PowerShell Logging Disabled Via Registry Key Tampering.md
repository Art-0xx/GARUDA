---
type: detection_rule
title: "PowerShell Logging Disabled Via Registry Key Tampering"
rule_id: fecfd1a1-cc78-4313-a1ea-2ee2e8ec27a7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.001, attack.t1112]
---

# PowerShell Logging Disabled Via Registry Key Tampering

## Description
Detects changes to the registry for the currently logged-in user. In order to disable PowerShell module logging, script block logging or transcription and script execution logging

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000000)
  TargetObject|contains:
  - \Microsoft\Windows\PowerShell\
  - \Microsoft\PowerShellCore\
  TargetObject|endswith:
  - \ModuleLogging\EnableModuleLogging
  - \ScriptBlockLogging\EnableScriptBlockLogging
  - \ScriptBlockLogging\EnableScriptBlockInvocationLogging
  - \Transcription\EnableTranscripting
  - \Transcription\EnableInvocationHeader
  - \EnableScripts
```

## MITRE ATT&CK
- T1564.001
- T1112

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1112/T1112.md#atomic-test-32---windows-powershell-logging-disabled

## Metadata
- **Author:** frack113
- **Date:** 2022-04-02
- **Rule ID:** `fecfd1a1-cc78-4313-a1ea-2ee2e8ec27a7`
- **Source file:** `windows/registry/registry_set/registry_set_powershell_logging_disabled.yml`
