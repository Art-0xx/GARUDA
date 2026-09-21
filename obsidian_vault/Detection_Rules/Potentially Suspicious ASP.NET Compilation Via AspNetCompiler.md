---
type: detection_rule
title: "Potentially Suspicious ASP.NET Compilation Via AspNetCompiler"
rule_id: 9f50fe98-fe5c-4a2d-86c7-fad7f63ed622
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127]
---

# Potentially Suspicious ASP.NET Compilation Via AspNetCompiler

## Description
Detects execution of "aspnet_compiler.exe" with potentially suspicious paths for compilation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - \Users\Public\
  - \AppData\Local\Temp\
  - \AppData\Local\Roaming\
  - :\Temp\
  - :\Windows\Temp\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
  Image|contains:
  - :\Windows\Microsoft.NET\Framework\
  - :\Windows\Microsoft.NET\Framework64\
  - :\Windows\Microsoft.NET\FrameworkArm\
  - :\Windows\Microsoft.NET\FrameworkArm64\
  Image|endswith: \aspnet_compiler.exe
```

## MITRE ATT&CK
- T1127

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Aspnet_Compiler/
- https://ijustwannared.team/2020/08/01/the-curious-case-of-aspnet_compiler-exe/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-14
- **Rule ID:** `9f50fe98-fe5c-4a2d-86c7-fad7f63ed622`
- **Source file:** `windows/process_creation/proc_creation_win_aspnet_compiler_susp_paths.yml`
