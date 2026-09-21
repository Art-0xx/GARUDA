---
type: detection_rule
title: "Potential Renamed Rundll32 Execution"
rule_id: 2569ed8c-1147-498a-9b8c-2ad3656b10ed
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Renamed Rundll32 Execution

## Description
Detects when 'DllRegisterServer' is called in the commandline and the image is not rundll32. This could mean that the 'rundll32' utility has been renamed in order to avoid detection

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith: \rundll32.exe
selection:
  CommandLine|contains: DllRegisterServer
```

## False Positives
- Unlikely

## References
- https://twitter.com/swisscom_csirt/status/1331634525722521602?s=20
- https://app.any.run/tasks/f74c5157-8508-4ac6-9805-d63fe7b0d399/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-22
- **Rule ID:** `2569ed8c-1147-498a-9b8c-2ad3656b10ed`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_rundll32_dllregisterserver.yml`
