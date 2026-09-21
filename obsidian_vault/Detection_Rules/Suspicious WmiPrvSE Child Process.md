---
type: detection_rule
title: "Suspicious WmiPrvSE Child Process"
rule_id: 8a582fe2-0882-4b89-a82a-da6b2dc32937
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1204.002, attack.t1218.010]
---

# Suspicious WmiPrvSE Child Process

## Description
Detects suspicious and uncommon child processes of WmiPrvSE

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_children_* and not 1 of filter_main_*
filter_main_msiexec:
  CommandLine|contains: '/i '
  Image|endswith: \msiexec.exe
filter_main_werfault:
  Image|endswith: \WerFault.exe
filter_main_wmiprvse:
  Image|endswith: \WmiPrvSE.exe
selection_children_1:
  Image|endswith:
  - \certutil.exe
  - \cscript.exe
  - \mshta.exe
  - \msiexec.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \verclsid.exe
  - \wscript.exe
selection_children_2:
  CommandLine|contains:
  - cscript
  - mshta
  - powershell
  - pwsh
  - regsvr32
  - rundll32
  - wscript
  Image|endswith: \cmd.exe
selection_parent:
  ParentImage|endswith: \wbem\WmiPrvSE.exe
```

## MITRE ATT&CK
- T1047
- T1204.002
- T1218.010

## False Positives
- Unknown

## References
- https://thedfirreport.com/2021/03/29/sodinokibi-aka-revil-ransomware/
- https://github.com/vadim-hunter/Detection-Ideas-Rules/blob/02bcbfc2bfb8b4da601bb30de0344ae453aa1afe/Threat%20Intelligence/The%20DFIR%20Report/20210329_Sodinokibi_(aka_REvil)_Ransomware.yaml
- https://blog.osarmor.com/319/onenote-attachment-delivers-asyncrat-malware/
- https://twitter.com/ForensicITGuy/status/1334734244120309760

## Metadata
- **Author:** Vadim Khrykov (ThreatIntel), Cyb3rEng, Florian Roth (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `8a582fe2-0882-4b89-a82a-da6b2dc32937`
- **Source file:** `windows/process_creation/proc_creation_win_wmiprvse_susp_child_processes.yml`
