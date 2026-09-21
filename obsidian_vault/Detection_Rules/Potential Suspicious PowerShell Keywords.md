---
type: detection_rule
title: "Potential Suspicious PowerShell Keywords"
rule_id: 1f49f2ab-26bc-48b3-96cc-dcffbc93eadf
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Potential Suspicious PowerShell Keywords

## Description
Detects potentially suspicious keywords that could indicate the use of a PowerShell exploitation framework

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - System.Reflection.Assembly.Load($
  - '[System.Reflection.Assembly]::Load($'
  - '[Reflection.Assembly]::Load($'
  - System.Reflection.AssemblyName
  - Reflection.Emit.AssemblyBuilderAccess
  - Reflection.Emit.CustomAttributeBuilder
  - Runtime.InteropServices.UnmanagedType
  - Runtime.InteropServices.DllImportAttribute
  - SuspendThread
  - rundll32
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://posts.specterops.io/entering-a-covenant-net-command-and-control-e11038bcf462
- https://github.com/PowerShellMafia/PowerSploit/blob/d943001a7defb5e0d1657085a77a0e78609be58f/CodeExecution/Invoke-ReflectivePEInjection.ps1
- https://github.com/hlldz/Phant0m/blob/30c2935d8cf4aafda17ee2fab7cd0c4aa9a607c2/old/Invoke-Phant0m.ps1
- https://gist.github.com/MHaggis/0dbe00ad401daa7137c81c99c268cfb7

## Metadata
- **Author:** Florian Roth (Nextron Systems), Perez Diego (@darkquassar), Tuan Le (NCSGroup)
- **Date:** 2019-02-11
- **Rule ID:** `1f49f2ab-26bc-48b3-96cc-dcffbc93eadf`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_keywords.yml`
