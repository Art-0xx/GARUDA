---
type: detection_rule
title: "Potential DLL Sideloading Of Non-Existent DLLs From System Folders"
rule_id: 6b98b92b-4f00-4f62-b4fe-4d1920215771
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Potential DLL Sideloading Of Non-Existent DLLs From System Folders

## Description
Detects loading of specific system DLL files that are usually not present on the system (or at least not in system directories) but may be loaded by legitimate processes, potentially indicating phantom DLL hijacking attempts.
Phantom DLL hijacking involves placing malicious DLLs with names of non-existent system binaries in locations where legitimate applications may search for them, leading to execution of the malicious DLLs.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_ms_signed:
  Signature: Microsoft Windows
  SignatureStatus: Valid
  Signed: 'true'
selection:
  ImageLoaded|endswith:
  - :\Windows\System32\axeonoffhelper.dll
  - :\Windows\System32\cdpsgshims.dll
  - :\Windows\System32\oci.dll
  - :\Windows\System32\offdmpsvc.dll
  - :\Windows\System32\shellchromeapi.dll
  - :\Windows\System32\TSMSISrv.dll
  - :\Windows\System32\TSVIPSrv.dll
  - :\Windows\System32\wbem\wbemcomn.dll
  - :\Windows\System32\WLBSCTRL.dll
  - :\Windows\System32\wow64log.dll
  - :\Windows\System32\WptsExtensions.dll
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- http://remoteawesomethoughts.blogspot.com/2019/05/windows-10-task-schedulerservice.html
- https://clement.notin.org/blog/2020/09/12/CVE-2020-7315-McAfee-Agent-DLL-injection/
- https://decoded.avast.io/martinchlumecky/png-steganography/
- https://github.com/Wh04m1001/SysmonEoP
- https://itm4n.github.io/cdpsvc-dll-hijacking/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), SBousseaden
- **Date:** 2022-12-09
- **Rule ID:** `6b98b92b-4f00-4f62-b4fe-4d1920215771`
- **Source file:** `windows/image_load/image_load_side_load_non_existent_dlls.yml`
