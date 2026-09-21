---
type: detection_rule
title: "Creation Of Non-Existent System DLL"
rule_id: df6ecb8b-7822-4f4b-b412-08f524b4576c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Creation Of Non-Existent System DLL

## Description
Detects creation of specific system DLL files that are  usually not present on the system (or at least not in system directories) but may be loaded by legitimate processes.
Phantom DLL hijacking involves placing malicious DLLs with names of non-existent system binaries in locations where legitimate applications may search for them, leading to execution of the malicious DLLs.
Thus, the creation of such DLLs may indicate preparation for phantom DLL hijacking attacks.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
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
  - \SprintCSP.dll
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- http://remoteawesomethoughts.blogspot.com/2019/05/windows-10-task-schedulerservice.html
- https://clement.notin.org/blog/2020/09/12/CVE-2020-7315-McAfee-Agent-DLL-injection/
- https://decoded.avast.io/martinchlumecky/png-steganography/
- https://github.com/blackarrowsec/redteam-research/tree/26e6fc0c0d30d364758fa11c2922064a9a7fd309/LPE%20via%20StorSvc
- https://github.com/Wh04m1001/SysmonEoP

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), fornotes
- **Date:** 2022-12-01
- **Rule ID:** `df6ecb8b-7822-4f4b-b412-08f524b4576c`
- **Source file:** `windows/file/file_event/file_event_win_create_non_existent_dlls.yml`
