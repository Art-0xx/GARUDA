---
type: detection_rule
title: "Suspicious VBoxDrvInst.exe Parameters"
rule_id: b7b19cb6-9b32-4fc4-a108-73f19acfe262
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Suspicious VBoxDrvInst.exe Parameters

## Description
Detect VBoxDrvInst.exe run with parameters allowing processing INF file.
This allows to create values in the registry and install drivers.
For example one could use this technique to obtain persistence via modifying one of Run or RunOnce registry keys

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - driver
  - executeinf
  Image|endswith: \VBoxDrvInst.exe
```

## MITRE ATT&CK
- T1112

## False Positives
- Legitimate use of VBoxDrvInst.exe utility by VirtualBox Guest Additions installation process

## References
- https://github.com/LOLBAS-Project/LOLBAS/blob/4db780e0f0b2e2bb8cb1fa13e09196da9b9f1834/yml/LOLUtilz/OtherBinaries/VBoxDrvInst.yml
- https://twitter.com/pabraeken/status/993497996179492864

## Metadata
- **Author:** Konstantin Grishchenko, oscd.community
- **Date:** 2020-10-06
- **Rule ID:** `b7b19cb6-9b32-4fc4-a108-73f19acfe262`
- **Source file:** `windows/process_creation/proc_creation_win_virtualbox_vboxdrvinst_execution.yml`
