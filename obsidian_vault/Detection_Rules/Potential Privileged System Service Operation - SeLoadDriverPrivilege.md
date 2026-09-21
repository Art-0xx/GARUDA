---
type: detection_rule
title: "Potential Privileged System Service Operation - SeLoadDriverPrivilege"
rule_id: f63508a0-c809-4435-b3be-ed819394d612
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Potential Privileged System Service Operation - SeLoadDriverPrivilege

## Description
Detects the usage of the 'SeLoadDriverPrivilege' privilege. This privilege is required to load or unload a device driver.
With this privilege, the user can dynamically load and unload device drivers or other code in to kernel mode.
This user right does not apply to Plug and Play device drivers.
If you exclude privileged users/admins and processes, which are allowed to do so, you are maybe left with bad programs trying to load malicious kernel drivers.
This will detect Ghost-In-The-Logs (https://github.com/bats3c/Ghost-In-The-Logs) and the usage of Sysinternals and various other tools. So you have to work with a whitelist to find the bad stuff.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection_1 and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_exact:
  ProcessName:
  - C:\Windows\explorer.exe
  - C:\Windows\HelpPane.exe
  - C:\Windows\ImmersiveControlPanel\SystemSettings.exe
  - C:\Windows\System32\Dism.exe
  - C:\Windows\System32\fltMC.exe
  - C:\Windows\System32\mmc.exe
  - C:\Windows\System32\rundll32.exe
  - C:\Windows\System32\RuntimeBroker.exe
  - C:\Windows\System32\ShellHost.exe
  - C:\Windows\System32\svchost.exe
  - C:\Windows\System32\SystemSettingsBroker.exe
  - C:\Windows\System32\wimserv.exe
filter_main_startswith:
  ProcessName|startswith: C:\Program Files\WindowsApps\Microsoft
filter_optional_dropbox:
  ProcessName|endswith: \Dropbox.exe
  ProcessName|startswith:
  - C:\Program Files (x86)\Dropbox\
  - C:\Program Files\Dropbox\
filter_optional_others:
  ProcessName|endswith:
  - \AppData\Local\Microsoft\Teams\current\Teams.exe
  - \Google\Chrome\Application\chrome.exe
  - \procexp.exe
  - \procexp64.exe
  - \procexp64a.exe
  - \procmon.exe
  - \procmon64.exe
  - \procmon64a.exe
selection_1:
  EventID: 4673
  PrivilegeList: SeLoadDriverPrivilege
  Service: '-'
```

## MITRE ATT&CK
- T1685

## False Positives
- Other legimate tools loading drivers. Including but not limited to, Sysinternals, CPU-Z, AVs etc. A baseline needs to be created according to the used products and allowed tools. A good thing to do is to try and exclude users who are allowed to load drivers.

## References
- https://web.archive.org/web/20230331181619/https://blog.dylan.codes/evading-sysmon-and-windows-event-logging/
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4673

## Metadata
- **Author:** xknow (@xknow_infosec), xorxes (@xor_xes)
- **Date:** 2019-04-08
- **Rule ID:** `f63508a0-c809-4435-b3be-ed819394d612`
- **Source file:** `windows/builtin/security/win_security_user_driver_loaded.yml`
