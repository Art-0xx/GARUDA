---
type: detection_rule
title: "DotNet CLR DLL Loaded By Scripting Applications"
rule_id: 4508a70e-97ef-4300-b62b-ff27992990ea
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# DotNet CLR DLL Loaded By Scripting Applications

## Description
Detects .NET CLR DLLs being loaded by scripting applications such as wscript or cscript. This could be an indication of potential suspicious execution.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|endswith:
  - \clr.dll
  - \mscoree.dll
  - \mscorlib.dll
  Image|endswith:
  - \cmstp.exe
  - \cscript.exe
  - \mshta.exe
  - \msxsl.exe
  - \regsvr32.exe
  - \wmic.exe
  - \wscript.exe
```

## MITRE ATT&CK
- T1055

## False Positives
- Unknown

## References
- https://github.com/tyranid/DotNetToJScript
- https://thewover.github.io/Introducing-Donut/
- https://web.archive.org/web/20230329154538/https://blog.menasec.net/2019/07/interesting-difr-traces-of-net-clr.html
- https://web.archive.org/web/20221026202428/https://gist.github.com/code-scrap/d7f152ffcdb3e0b02f7f394f5187f008

## Metadata
- **Author:** omkar72, oscd.community
- **Date:** 2020-10-14
- **Rule ID:** `4508a70e-97ef-4300-b62b-ff27992990ea`
- **Source file:** `windows/image_load/image_load_susp_script_dotnet_clr_dll_load.yml`
