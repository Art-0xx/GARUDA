---
type: detection_rule
title: "Uncommon Extension In Keyboard Layout IME File Registry Value"
rule_id: b888e3f2-224d-4435-b00b-9dd66e9ea1f1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Uncommon Extension In Keyboard Layout IME File Registry Value

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
condition: selection and not 1 of filter_main_*
filter_main_known_extension:
  Details|endswith: .ime
selection:
  TargetObject|contains|all:
  - \Control\Keyboard Layouts\
  - Ime File
```

## MITRE ATT&CK
- T1685

## False Positives
- IMEs are essential for languages that have more characters than can be represented on a standard keyboard, such as Chinese, Japanese, and Korean.

## References
- https://www.linkedin.com/pulse/guntior-story-advanced-bootkit-doesnt-rely-windows-disk-baranov-wue8e/

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-11-21
- **Rule ID:** `b888e3f2-224d-4435-b00b-9dd66e9ea1f1`
- **Source file:** `windows/registry/registry_set/registry_set_ime_non_default_extension.yml`
