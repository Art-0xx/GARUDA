---
type: detection_rule
title: "Add Debugger Entry To AeDebug For Persistence"
rule_id: 092af964-4233-4373-b4ba-d86ea2890288
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Add Debugger Entry To AeDebug For Persistence

## Description
Detects when an attacker adds a new "Debugger" value to the "AeDebug" key in order to achieve persistence which will get invoked when an application crashes

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Details: '"C:\WINDOWS\system32\vsjitdebugger.exe" -p %ld -e %ld -j 0x%p'
selection:
  Details|endswith: .dll
  TargetObject|contains: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AeDebug\Debugger
```

## False Positives
- Legitimate use of the key to setup a debugger. Which is often the case on developers machines

## References
- https://persistence-info.github.io/Data/aedebug.html
- https://learn.microsoft.com/en-us/windows/win32/debug/configuring-automatic-debugging

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `092af964-4233-4373-b4ba-d86ea2890288`
- **Source file:** `windows/registry/registry_set/registry_set_aedebug_persistence.yml`
