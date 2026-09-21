---
type: detection_rule
title: "Malicious DLL File Dropped in the Teams or OneDrive Folder"
rule_id: 1908fcc1-1b92-4272-8214-0fbaf2fa5163
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Malicious DLL File Dropped in the Teams or OneDrive Folder

## Description
Detects creation of a malicious DLL file in the location where the OneDrive or Team applications
Upon execution of the Teams or OneDrive application, the dropped malicious DLL file ("iphlpapi.dll") is sideloaded

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains|all:
  - iphlpapi.dll
  - \AppData\Local\Microsoft
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://blog.cyble.com/2022/07/27/targeted-attacks-being-carried-out-via-dll-sideloading/

## Metadata
- **Author:** frack113
- **Date:** 2022-08-12
- **Rule ID:** `1908fcc1-1b92-4272-8214-0fbaf2fa5163`
- **Source file:** `windows/file/file_event/file_event_win_iphlpapi_dll_sideloading.yml`
