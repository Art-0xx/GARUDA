---
type: detection_rule
title: "Suspicious Child Process Of Manage Engine ServiceDesk"
rule_id: cea2b7ea-792b-405f-95a1-b903ea06458f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1102]
---

# Suspicious Child Process Of Manage Engine ServiceDesk

## Description
Detects suspicious child processes of the "Manage Engine ServiceDesk Plus" Java web service

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_net:
  CommandLine|contains: ' stop'
  Image|endswith:
  - \net.exe
  - \net1.exe
selection:
  Image|endswith:
  - \AppVLP.exe
  - \bash.exe
  - \bitsadmin.exe
  - \calc.exe
  - \certutil.exe
  - \cscript.exe
  - \curl.exe
  - \forfiles.exe
  - \mftrace.exe
  - \mshta.exe
  - \net.exe
  - \net1.exe
  - \notepad.exe
  - \powershell.exe
  - \pwsh.exe
  - \query.exe
  - \reg.exe
  - \schtasks.exe
  - \scrcons.exe
  - \sh.exe
  - \systeminfo.exe
  - \whoami.exe
  - \wmic.exe
  - \wscript.exe
  ParentImage|contains|all:
  - \ManageEngine\ServiceDesk\
  - \java.exe
```

## MITRE ATT&CK
- T1102

## False Positives
- Legitimate sub processes started by Manage Engine ServiceDesk Pro

## References
- https://www.horizon3.ai/manageengine-cve-2022-47966-technical-deep-dive/
- https://github.com/horizon3ai/CVE-2022-47966/blob/3a51c6b72ebbd87392babd955a8fbeaee2090b35/CVE-2022-47966.py
- https://blog.viettelcybersecurity.com/saml-show-stopper/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2023-01-18
- **Rule ID:** `cea2b7ea-792b-405f-95a1-b903ea06458f`
- **Source file:** `windows/process_creation/proc_creation_win_java_manageengine_susp_child_process.yml`
