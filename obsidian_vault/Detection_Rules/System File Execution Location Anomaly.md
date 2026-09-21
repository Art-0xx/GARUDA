---
type: detection_rule
title: "System File Execution Location Anomaly"
rule_id: e4a6b256-3e47-40fc-89d2-7a477edd6915
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# System File Execution Location Anomaly

## Description
Detects the execution of a Windows system binary that is usually located in the system folder from an uncommon location.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  Image|startswith:
  - C:\$WINDOWS.~BT\
  - C:\$WinREAgent\
  - C:\Windows\SoftwareDistribution\
  - C:\Windows\System32\
  - C:\Windows\SystemTemp\
  - C:\Windows\SysWOW64\
  - C:\Windows\uus\
  - C:\Windows\WinSxS\
filter_main_powershell:
  Image|contains:
  - C:\Program Files\PowerShell\7\
  - C:\Program Files\PowerShell\7-preview\
  - C:\Program Files\WindowsApps\Microsoft.PowerShellPreview
  - \AppData\Local\Microsoft\WindowsApps\Microsoft.PowerShellPreview
  Image|endswith: \pwsh.exe
filter_main_wsl_appdata:
  Image|contains: \AppData\Local\Microsoft\WindowsApps\
  Image|endswith: \wsl.exe
  Image|startswith: C:\Users\
filter_main_wsl_programfiles:
  Image|endswith: \wsl.exe
  Image|startswith:
  - C:\Program Files\WindowsApps\MicrosoftCorporationII.WindowsSubsystemForLinux
  - C:\Program Files\WSL\
filter_optional_system32:
  Image|contains: \SystemRoot\System32\
selection:
  Image|endswith:
  - \atbroker.exe
  - \audiodg.exe
  - \bcdedit.exe
  - \bitsadmin.exe
  - \certreq.exe
  - \certutil.exe
  - \cmstp.exe
  - \conhost.exe
  - \consent.exe
  - \cscript.exe
  - \csrss.exe
  - \dashost.exe
  - \defrag.exe
  - \dfrgui.exe
  - \dism.exe
  - \dllhost.exe
  - \dllhst3g.exe
  - \dwm.exe
  - \eventvwr.exe
  - \fsquirt.exe
  - \finger.exe
  - \logonui.exe
  - \LsaIso.exe
  - \lsass.exe
  - \lsm.exe
  - \msiexec.exe
  - \ntoskrnl.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \runonce.exe
  - \RuntimeBroker.exe
  - \schtasks.exe
  - \services.exe
  - \sihost.exe
  - \smartscreen.exe
  - \smss.exe
  - \spoolsv.exe
  - \svchost.exe
  - \taskhost.exe
  - \taskhostw.exe
  - \Taskmgr.exe
  - \userinit.exe
  - \werfault.exe
  - \werfaultsecure.exe
  - \wininit.exe
  - \winlogon.exe
  - \winver.exe
  - \wlanext.exe
  - \wmic.exe
  - \wscript.exe
  - \wsl.exe
  - \wsmprovhost.exe
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://twitter.com/GelosSnake/status/934900723426439170
- https://asec.ahnlab.com/en/39828/
- https://www.splunk.com/en_us/blog/security/inno-setup-malware-redline-stealer-campaign.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Patrick Bareiss, Anton Kutepov, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2017-11-27
- **Rule ID:** `e4a6b256-3e47-40fc-89d2-7a477edd6915`
- **Source file:** `windows/process_creation/proc_creation_win_susp_system_exe_anomaly.yml`
