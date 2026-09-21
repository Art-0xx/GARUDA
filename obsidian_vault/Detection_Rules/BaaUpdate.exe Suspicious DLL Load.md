---
type: detection_rule
title: "BaaUpdate.exe Suspicious DLL Load"
rule_id: 6e8fe0a8-ba0b-4a93-8f9e-82657e7a5984
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1021.003]
---

# BaaUpdate.exe Suspicious DLL Load

## Description
Detects BitLocker Access Agent Update Utility (baaupdate.exe) loading DLLs from suspicious locations that are publicly writable which could indicate an attempt to lateral movement via BitLocker DCOM & COM Hijacking.
This technique abuses COM Classes configured as INTERACTIVE USER to spawn processes in the context of the logged-on user's session. Specifically, it targets the BDEUILauncher Class (CLSID ab93b6f1-be76-4185-a488-a9001b105b94)
which can launch BaaUpdate.exe, which is vulnerable to COM Hijacking when started with input parameters. This allows attackers to execute code in the user's context without needing to steal credentials or use additional techniques to compromise the account.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|contains:
  - :\Perflogs\
  - :\Users\Default\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \AppData\Roaming\
  - \Contacts\
  - \Favorites\
  - \Favourites\
  - \Links\
  - \Music\
  - \Pictures\
  - \ProgramData\
  - \Temporary Internet
  - \Videos\
  ImageLoaded|endswith: .dll
  Image|endswith: \BaaUpdate.exe
```

## MITRE ATT&CK
- T1218
- T1021.003

## False Positives
- Unknown

## References
- https://github.com/rtecCyberSec/BitlockMove

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-18
- **Rule ID:** `6e8fe0a8-ba0b-4a93-8f9e-82657e7a5984`
- **Source file:** `windows/image_load/image_load_susp_baaupdate_dll_load.yml`
