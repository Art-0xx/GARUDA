---
type: detection_rule
title: "Suspicious Csi.exe Usage"
rule_id: 40b95d31-1afc-469e-8d34-9a3a667d058e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1072, attack.t1218]
---

# Suspicious Csi.exe Usage

## Description
Csi.exe is a signed binary from Microsoft that comes with Visual Studio and provides C# interactive capabilities. It can be used to run C# code from a file passed as a parameter in command line. Early version of this utility provided with Microsoft “Roslyn” Community Technology Preview was named 'rcsi.exe'

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  Company: Microsoft Corporation
selection_img:
- Image|endswith:
  - \csi.exe
  - \rcsi.exe
- OriginalFileName:
  - csi.exe
  - rcsi.exe
```

## MITRE ATT&CK
- T1072
- T1218

## False Positives
- Legitimate usage by software developers

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Csi/
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Rcsi/
- https://enigma0x3.net/2016/11/21/bypassing-application-whitelisting-by-using-rcsi-exe/
- https://twitter.com/Z3Jpa29z/status/1317545798981324801

## Metadata
- **Author:** Konstantin Grishchenko, oscd.community
- **Date:** 2020-10-17
- **Rule ID:** `40b95d31-1afc-469e-8d34-9a3a667d058e`
- **Source file:** `windows/process_creation/proc_creation_win_csi_execution.yml`
