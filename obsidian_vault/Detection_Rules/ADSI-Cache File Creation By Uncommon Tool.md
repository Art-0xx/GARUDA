---
type: detection_rule
title: "ADSI-Cache File Creation By Uncommon Tool"
rule_id: 75bf09fa-1dd7-4d18-9af9-dd9e492562eb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1001.003]
---

# ADSI-Cache File Creation By Uncommon Tool

## Description
Detects the creation of an "Active Directory Schema Cache File" (.sch) file by an uncommon tool.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
- Image|endswith:
  - :\Program Files\Cylance\Desktop\CylanceSvc.exe
  - :\Windows\CCM\CcmExec.exe
  - :\windows\system32\dllhost.exe
  - :\Windows\system32\dsac.exe
  - :\Windows\system32\efsui.exe
  - :\windows\system32\mmc.exe
  - :\windows\system32\svchost.exe
  - :\Windows\System32\wbem\WmiPrvSE.exe
  - :\windows\system32\WindowsPowerShell\v1.0\powershell.exe
- Image|contains:
  - :\Windows\ccmsetup\autoupgrade\ccmsetup
  - :\Program Files\SentinelOne\Sentinel Agent
filter_main_office:
  Image|contains|all:
  - :\Program Files\
  - \Microsoft Office
  Image|endswith: \OUTLOOK.EXE
filter_optional_citrix:
  Image|endswith: :\Program Files\Citrix\Receiver StoreFront\Services\DefaultDomainServices\Citrix.DeliveryServices.DomainServices.ServiceHost.exe
filter_optional_ldapwhoami:
  Image|endswith: \LANDesk\LDCLient\ldapwhoami.exe
selection:
  TargetFilename|contains: \Local\Microsoft\Windows\SchCache\
  TargetFilename|endswith: .sch
```

## MITRE ATT&CK
- T1001.003

## False Positives
- Other legimate tools, which do ADSI (LDAP) operations, e.g. any remoting activity by MMC, Powershell, Windows etc.

## References
- https://medium.com/@ivecodoe/detecting-ldapfragger-a-newly-released-cobalt-strike-beacon-using-ldap-for-c2-communication-c274a7f00961
- https://blog.fox-it.com/2020/03/19/ldapfragger-command-and-control-over-ldap-attributes/
- https://github.com/fox-it/LDAPFragger

## Metadata
- **Author:** xknow @xknow_infosec, Tim Shelton
- **Date:** 2019-03-24
- **Rule ID:** `75bf09fa-1dd7-4d18-9af9-dd9e492562eb`
- **Source file:** `windows/file/file_event/file_event_win_adsi_cache_creation_by_uncommon_tool.yml`
