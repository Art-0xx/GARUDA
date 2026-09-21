---
type: detection_rule
title: "Suspicious Path In Keyboard Layout IME File Registry Value"
rule_id: 9d8f9bb8-01af-4e15-a3a2-349071530530
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Suspicious Path In Keyboard Layout IME File Registry Value

## Description
Detects usage of Windows Input Method Editor (IME) keyboard layout feature, which allows an attacker to load a DLL into the process after sending the WM_INPUTLANGCHANGEREQUEST message.
Before doing this, the client needs to register the DLL in a special registry key that is assumed to implement this keyboard layout. This registry key should store a value named "Ime File" with a DLL path.
IMEs are essential for languages that have more characters than can be represented on a standard keyboard, such as Chinese, Japanese, and Korean.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_registry and 1 of selection_folders_*
selection_folders_1:
  Details|contains:
  - :\Perflogs\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \AppData\Roaming\
  - \Temporary Internet
selection_folders_2:
- Details|contains|all:
  - :\Users\
  - \Favorites\
- Details|contains|all:
  - :\Users\
  - \Favourites\
- Details|contains|all:
  - :\Users\
  - \Contacts\
selection_registry:
  TargetObject|contains|all:
  - \Control\Keyboard Layouts\
  - Ime File
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://www.linkedin.com/pulse/guntior-story-advanced-bootkit-doesnt-rely-windows-disk-baranov-wue8e/

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-11-21
- **Rule ID:** `9d8f9bb8-01af-4e15-a3a2-349071530530`
- **Source file:** `windows/registry/registry_set/registry_set_ime_suspicious_paths.yml`
