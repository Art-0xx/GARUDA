---
type: detection_rule
title: "Virtualbox Driver Installation or Starting of VMs"
rule_id: bab049ca-7471-4828-9024-38279a4c04da
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.006, attack.t1564]
---

# Virtualbox Driver Installation or Starting of VMs

## Description
Adversaries can carry out malicious operations using a virtual instance to avoid detection. This rule is built to detect the registration of the Virtualbox driver or start of a Virtualbox VM.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  CommandLine|contains:
  - VBoxRT.dll,RTR3Init
  - VBoxC.dll
  - VBoxDrv.sys
selection_2:
  CommandLine|contains:
  - startvm
  - controlvm
```

## MITRE ATT&CK
- T1564.006
- T1564

## False Positives
- This may have false positives on hosts where Virtualbox is legitimately being used for operations

## References
- https://news.sophos.com/en-us/2020/05/21/ragnar-locker-ransomware-deploys-virtual-machine-to-dodge-security/
- https://threatpost.com/maze-ransomware-ragnar-locker-virtual-machine/159350/

## Metadata
- **Author:** Janantha Marasinghe
- **Date:** 2020-09-26
- **Rule ID:** `bab049ca-7471-4828-9024-38279a4c04da`
- **Source file:** `windows/process_creation/proc_creation_win_virtualbox_execution.yml`
