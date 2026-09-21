---
type: detection_rule
title: "Potential Persistence Via App Paths Default Property"
rule_id: 707e097c-e20f-4f67-8807-1f72ff4500d6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.012]
---

# Potential Persistence Via App Paths Default Property

## Description
Detects changes to the "Default" property for keys located in the \Software\Microsoft\Windows\CurrentVersion\App Paths\ registry. Which might be used as a method of persistence
The entries found under App Paths are used primarily for the following purposes.
First, to map an application's executable file name to that file's fully qualified path.
Second, to prepend information to the PATH environment variable on a per-application, per-process basis.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains:
  - \Users\Public
  - \AppData\Local\Temp\
  - \Windows\Temp\
  - \Desktop\
  - \Downloads\
  - '%temp%'
  - '%tmp%'
  - iex
  - Invoke-
  - rundll32
  - regsvr32
  - mshta
  - cscript
  - wscript
  - .bat
  - .hta
  - .dll
  - .ps1
  TargetObject|contains: \SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths
  TargetObject|endswith:
  - (Default)
  - Path
```

## MITRE ATT&CK
- T1546.012

## False Positives
- Legitimate applications registering their binary from on of the suspicious locations mentioned above (tune it)

## References
- https://www.hexacorn.com/blog/2013/01/19/beyond-good-ol-run-key-part-3/
- https://learn.microsoft.com/en-us/windows/win32/shell/app-registration

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-10
- **Rule ID:** `707e097c-e20f-4f67-8807-1f72ff4500d6`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_app_paths.yml`
