---
type: detection_rule
title: "Disable Windows Defender Functionalities Via Registry Keys"
rule_id: 0eb46774-f1ab-4a74-8238-1155855f2263
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Disable Windows Defender Functionalities Via Registry Keys

## Description
Detects when attackers or tools disable Windows Defender functionalities via the Windows registry

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_main and 1 of selection_dword_* and not 1 of filter_optional_*
filter_optional_symantec:
  Image|endswith: \sepWscSvc64.exe
  Image|startswith: C:\Program Files\Symantec\Symantec Endpoint Protection\
selection_dword_0:
  Details: DWORD (0x00000000)
  TargetObject|endswith:
  - \DisallowExploitProtectionOverride
  - \Features\TamperProtection
  - \MpEngine\MpEnablePus
  - \PUAProtection
  - \Signature Update\ForceUpdateFromMU
  - \SpyNet\SpynetReporting
  - \SpyNet\SubmitSamplesConsent
  - \Windows Defender Exploit Guard\Controlled Folder Access\EnableControlledFolderAccess
selection_dword_1:
  Details: DWORD (0x00000001)
  TargetObject|endswith:
  - \DisableAntiSpyware
  - \DisableAntiVirus
  - \DisableBehaviorMonitoring
  - \DisableBlockAtFirstSeen
  - \DisableEnhancedNotifications
  - \DisableIntrusionPreventionSystem
  - \DisableIOAVProtection
  - \DisableOnAccessProtection
  - \DisableRealtimeMonitoring
  - \DisableScanOnRealtimeEnable
  - \DisableScriptScanning
selection_main:
  TargetObject|contains:
  - \SOFTWARE\Microsoft\Windows Defender\
  - \SOFTWARE\Policies\Microsoft\Windows Defender Security Center\
  - \SOFTWARE\Policies\Microsoft\Windows Defender\
```

## MITRE ATT&CK
- T1685

## False Positives
- Administrator actions via the Windows Defender interface
- Third party Antivirus

## References
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://gist.github.com/anadr/7465a9fde63d41341136949f14c21105
- https://admx.help/?Category=Windows_7_2008R2&Policy=Microsoft.Policies.WindowsDefender::SpyNetReporting
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker
- https://www.tenforums.com/tutorials/32236-enable-disable-microsoft-defender-pua-protection-windows-10-a.html

## Metadata
- **Author:** AlertIQ, Ján Trenčanský, frack113, Nasreddine Bencherchali, Swachchhanda Shrawan Poudel
- **Date:** 2022-08-01
- **Rule ID:** `0eb46774-f1ab-4a74-8238-1155855f2263`
- **Source file:** `windows/registry/registry_set/registry_set_windows_defender_tamper.yml`
