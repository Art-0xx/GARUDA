---
type: detection_rule
title: "Malicious PE Execution by Microsoft Visual Studio Debugger"
rule_id: 15c7904e-6ad1-4a45-9b46-5fb25df37fd2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Malicious PE Execution by Microsoft Visual Studio Debugger

## Description
There is an option for a MS VS Just-In-Time Debugger "vsjitdebugger.exe" to launch specified executable and attach a debugger.
This option may be used adversaries to execute malicious code by signed verified binary.
The debugger is installed alongside with Microsoft Visual Studio package.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not (reduction1 or reduction2)
reduction1:
  Image|endswith: \vsimmersiveactivatehelper*.exe
reduction2:
  Image|endswith: \devenv.exe
selection:
  ParentImage|endswith: \vsjitdebugger.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- The process spawned by vsjitdebugger.exe is uncommon.

## References
- https://twitter.com/pabraeken/status/990758590020452353
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Vsjitdebugger/
- https://learn.microsoft.com/en-us/visualstudio/debugger/debug-using-the-just-in-time-debugger?view=vs-2019

## Metadata
- **Author:** Agro (@agro_sev), Ensar Şamil (@sblmsrsn), oscd.community
- **Date:** 2020-10-14
- **Rule ID:** `15c7904e-6ad1-4a45-9b46-5fb25df37fd2`
- **Source file:** `windows/process_creation/proc_creation_win_susp_use_of_vsjitdebugger_bin.yml`
