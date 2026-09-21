---
type: detection_rule
title: "Potential Registry Persistence Attempt Via DbgManagedDebugger"
rule_id: 9827ae57-3802-418f-994b-d5ecf5cd974b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574]
---

# Potential Registry Persistence Attempt Via DbgManagedDebugger

## Description
Detects the addition of the "Debugger" value to the "DbgManagedDebugger" key in order to achieve persistence. Which will get invoked when an application crashes

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Details: '"C:\Windows\system32\vsjitdebugger.exe" PID %d APPDOM %d EXTEXT "%s" EVTHDL
    %d'
selection:
  TargetObject|endswith: \Microsoft\.NETFramework\DbgManagedDebugger
```

## MITRE ATT&CK
- T1574

## False Positives
- Legitimate use of the key to setup a debugger. Which is often the case on developers machines

## References
- https://www.hexacorn.com/blog/2013/09/19/beyond-good-ol-run-key-part-4/
- https://github.com/last-byte/PersistenceSniper

## Metadata
- **Author:** frack113
- **Date:** 2022-08-07
- **Rule ID:** `9827ae57-3802-418f-994b-d5ecf5cd974b`
- **Source file:** `windows/registry/registry_set/registry_set_dbgmanageddebugger_persistence.yml`
