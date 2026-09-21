---
type: detection_rule
title: "Suspicious Windows Defender Registry Key Tampering Via Reg.EXE"
rule_id: 452bce90-6fb0-43cc-97a5-affc283139b3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Suspicious Windows Defender Registry Key Tampering Via Reg.EXE

## Description
Detects the usage of "reg.exe" to tamper with different Windows Defender registry keys in order to disable some important features related to protection and detection

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_root_* and 1 of selection_dword_*
selection_dword_0:
  CommandLine|contains:
  - DisallowExploitProtectionOverride
  - EnableControlledFolderAccess
  - MpEnablePus
  - PUAProtection
  - SpynetReporting
  - SubmitSamplesConsent
  - TamperProtection
  CommandLine|contains|all:
  - ' add '
  - d 0
selection_dword_1:
  CommandLine|contains:
  - DisableAccess
  - DisableAntiSpyware
  - DisableAntiSpywareRealtimeProtection
  - DisableAntiVirus
  - DisableAntiVirusSignatures
  - DisableArchiveScanning
  - DisableBehaviorMonitoring
  - DisableBlockAtFirstSeen
  - DisableCloudProtection
  - DisableConfig
  - DisableEnhancedNotifications
  - DisableIntrusionPreventionSystem
  - DisableIOAVProtection
  - DisableNetworkProtection
  - DisableOnAccessProtection
  - DisablePrivacyMode
  - DisableRealtimeMonitoring
  - DisableRoutinelyTakingAction
  - DisableScanOnRealtimeEnable
  - DisableScriptScanning
  - DisableSecurityCenter
  - Notification_Suppress
  - SignatureDisableUpdateOnStartupWithoutEngine
  CommandLine|contains|all:
  - ' add '
  - d 1
selection_root_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_root_path:
  CommandLine|contains:
  - SOFTWARE\Microsoft\Windows Defender\
  - SOFTWARE\Policies\Microsoft\Windows Defender Security Center
  - SOFTWARE\Policies\Microsoft\Windows Defender\
```

## MITRE ATT&CK
- T1685

## False Positives
- Rare legitimate use by administrators to test software (should always be investigated)

## References
- https://thedfirreport.com/2022/03/21/apt35-automates-initial-access-using-proxyshell/
- https://github.com/swagkarna/Defeat-Defender-V1.2.0/tree/ae4059c4276da6f6303b8f53cdff085ecae88a91
- https://www.elevenforum.com/t/video-guide-how-to-completely-disable-microsoft-defender-antivirus.14608/page-2
- https://tria.ge/241231-j9yatstqbm/behavioral1

## Metadata
- **Author:** Florian Roth (Nextron Systems), Swachchhanda Shrawan Poudel, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-03-22
- **Rule ID:** `452bce90-6fb0-43cc-97a5-affc283139b3`
- **Source file:** `windows/process_creation/proc_creation_win_reg_windows_defender_tamper.yml`
