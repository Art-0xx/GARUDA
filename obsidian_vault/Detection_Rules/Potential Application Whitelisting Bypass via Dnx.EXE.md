---
type: detection_rule
title: "Potential Application Whitelisting Bypass via Dnx.EXE"
rule_id: 81ebd28b-9607-4478-bf06-974ed9d53ed7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1027.004]
---

# Potential Application Whitelisting Bypass via Dnx.EXE

## Description
Detects the execution of Dnx.EXE. The Dnx utility allows for the execution of C# code.
Attackers might abuse this in order to bypass application whitelisting.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \dnx.exe
```

## MITRE ATT&CK
- T1218
- T1027.004

## False Positives
- Legitimate use of dnx.exe by legitimate user

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Csi/
- https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/

## Metadata
- **Author:** Beyu Denis, oscd.community
- **Date:** 2019-10-26
- **Rule ID:** `81ebd28b-9607-4478-bf06-974ed9d53ed7`
- **Source file:** `windows/process_creation/proc_creation_win_dnx_execute_csharp_code.yml`
