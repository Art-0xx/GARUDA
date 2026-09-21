---
type: detection_rule
title: "VBScript Payload Stored in Registry"
rule_id: 46490193-1b22-4c29-bdd6-5bf63907216f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# VBScript Payload Stored in Registry

## Description
Detects VBScript content stored into registry keys as seen being used by UNC2452 group

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter*
filter:
  TargetObject|contains: Software\Microsoft\Windows\CurrentVersion\Run
filter_dotnet:
  Details|contains:
  - \Microsoft.NET\Primary Interop Assemblies\Microsoft.mshtml.dll
  - <\Microsoft.mshtml,fileVersion=
  - _mshtml_dll_
  - <\Microsoft.mshtml,culture=
  Image|endswith: \msiexec.exe
  TargetObject|contains: \SOFTWARE\Microsoft\Windows\CurrentVersion\Installer\UserData\
selection:
  Details|contains:
  - 'vbscript:'
  - 'jscript:'
  - mshtml,
  - RunHTMLApplication
  - Execute(
  - CreateObject
  - window.close
  TargetObject|contains: Software\Microsoft\Windows\CurrentVersion
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-03-05
- **Rule ID:** `46490193-1b22-4c29-bdd6-5bf63907216f`
- **Source file:** `windows/registry/registry_set/registry_set_vbs_payload_stored.yml`
