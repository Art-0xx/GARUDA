---
type: detection_rule
title: "Renamed AutoIt Execution"
rule_id: f4264e47-f522-4c38-a420-04525d5b880f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027]
---

# Renamed AutoIt Execution

## Description
Detects the execution of a renamed AutoIt2.exe or AutoIt3.exe.
AutoIt is a scripting language and automation tool for Windows systems. While primarily used for legitimate automation tasks, it can be misused in cyber attacks.
Attackers can leverage AutoIt to create and distribute malware, including keyloggers, spyware, and botnets. A renamed AutoIt executable is particularly suspicious.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_main_*
filter_main_legit_name:
  Image|endswith:
  - \AutoIt.exe
  - \AutoIt2.exe
  - \AutoIt3_x64.exe
  - \AutoIt3.exe
selection_1:
  CommandLine|contains:
  - ' /AutoIt3ExecuteScript'
  - ' /ErrorStdOut'
selection_2:
  Hashes|contains:
  - IMPHASH=FDC554B3A8683918D731685855683DDF
  - IMPHASH=CD30A61B60B3D60CECDB034C8C83C290
  - IMPHASH=F8A00C72F2D667D2EDBB234D0C0AE000
selection_3:
  OriginalFileName:
  - AutoIt3.exe
  - AutoIt2.exe
  - AutoIt.exe
```

## MITRE ATT&CK
- T1027

## False Positives
- Unknown

## References
- https://twitter.com/malmoeb/status/1665463817130725378?s=12&t=C0_T_re0wRP_NfKa27Xw9w
- https://www.autoitscript.com/site/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2023-06-04
- **Rule ID:** `f4264e47-f522-4c38-a420-04525d5b880f`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_autoit.yml`
