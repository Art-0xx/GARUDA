---
type: detection_rule
title: "Disable of ETW Trace - Powershell"
rule_id: 115fdba9-f017-42e6-84cf-d5573bf2ddf8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070, attack.t1685]
---

# Disable of ETW Trace - Powershell

## Description
Detects usage of powershell cmdlets to disable or remove ETW trace sessions

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection_pwsh_remove:
  ScriptBlockText|contains: 'Remove-EtwTraceProvider '
selection_pwsh_set:
  ScriptBlockText|contains|all:
  - 'Set-EtwTraceProvider '
  - '0x11'
```

## MITRE ATT&CK
- T1070
- T1685

## False Positives
- Unknown

## References
- https://medium.com/palantir/tampering-with-windows-event-tracing-background-offense-and-defense-4be7ac62ac63

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `115fdba9-f017-42e6-84cf-d5573bf2ddf8`
- **Source file:** `windows/powershell/powershell_script/posh_ps_etw_trace_evasion.yml`
