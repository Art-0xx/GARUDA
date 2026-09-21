---
type: detection_rule
title: "Potential Defense Evasion Via Rename Of Highly Relevant Binaries"
rule_id: 0ba1da6d-b6ce-4366-828c-18826c9de23e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# Potential Defense Evasion Via Rename Of Highly Relevant Binaries

## Description
Detects the execution of a renamed binary often used by attackers or malware leveraging new Sysmon OriginalFileName datapoint.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith:
  - \certutil.exe
  - \cmstp.exe
  - \cscript.exe
  - \ie4uinit.exe
  - \finger.exe
  - \mshta.exe
  - \msiexec.exe
  - \msxsl.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \psexec.exe
  - \psexec64.exe
  - \psexec64a.exe
  - \PSEXESVC.exe
  - \pwsh.exe
  - \reg.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wermgr.exe
  - \wmic.exe
  - \wscript.exe
selection:
- Description: Execute processes remotely
- Product: Sysinternals PsExec
- Description|startswith:
  - Windows PowerShell
  - pwsh
- OriginalFileName:
  - certutil.exe
  - cmstp.exe
  - cscript.exe
  - IE4UINIT.EXE
  - finger.exe
  - mshta.exe
  - msiexec.exe
  - msxsl.exe
  - powershell_ise.exe
  - powershell.exe
  - psexec.c
  - psexec.exe
  - psexesvc.exe
  - pwsh.dll
  - reg.exe
  - regsvr32.exe
  - rundll32.exe
  - WerMgr
  - wmic.exe
  - wscript.exe
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Custom applications use renamed binaries adding slight change to binary name. Typically this is easy to spot and add to whitelist
- PsExec installed via Windows Store doesn't contain original filename field (False negative)

## References
- https://mgreen27.github.io/posts/2019/05/12/BinaryRename.html
- https://mgreen27.github.io/posts/2019/05/29/BinaryRename2.html
- https://www.trendmicro.com/vinfo/hk-en/security/news/cybercrime-and-digital-threats/megacortex-ransomware-spotted-attacking-enterprise-networks
- https://twitter.com/christophetd/status/1164506034720952320
- https://threatresearch.ext.hp.com/svcready-a-new-loader-reveals-itself/

## Metadata
- **Author:** Matthew Green - @mgreen27, Florian Roth (Nextron Systems), frack113
- **Date:** 2019-06-15
- **Rule ID:** `0ba1da6d-b6ce-4366-828c-18826c9de23e`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_binary_highly_relevant.yml`
