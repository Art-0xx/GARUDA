---
mitre_data:
  id: T1685.001
  linker_tags:
  - mitre/attack/linker/defense_impairment/disable_or_modify_windows_event_log
  name: Disable or Modify Windows Event Log
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Disable or Modify Windows Event Log (`T1685.001`)

Adversaries may disable or modify the Windows Event Log to limit data that can be leveraged for detections and audits. Windows Event Log records user and system activity such as login attempts and process creation.[^fn2] This data is used by security tools and analysts to generate detections. 

The EventLog service maintains event logs from various system components and applications. By default, the service automatically starts when a system powers on. An audit policy, maintained by the Local Security Policy (secpol.msc), defines which system events the EventLog service logs. Security audit policy settings can be changed by running secpol.msc, then navigating to `Security Settings\Local Policies\Audit Policy` for basic audit policy settings or `Security Settings\Advanced Audit Policy Configuration` for advanced audit policy settings.[^fn4][^fn5] `auditpol.exe` may also be used to set audit policies.[^fn6]

Adversaries may target system-wide logging or just that of a particular application. For example, the Windows EventLog service may be disabled using the `Set-Service -Name EventLog -Status Stopped` or `sc config eventlog start=disabled` commands (followed by manually stopping the service using `Stop-Service -Name EventLog`). Additionally, the service may be disabled by modifying the "Start" value in `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog` then restarting the system for the change to take effect.[^fn1][^fn3]

There are several ways to disable the EventLog service via registry key modification. Without Administrator privileges, adversaries may modify the "Start" value in the key `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WMI\Autologger\EventLog-Security`, then reboot the system to disable the Security EventLog.[^fn7] With Administrator privilege, adversaries may modify the same values in `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WMI\Autologger\EventLog-System` and `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WMI\Autologger\EventLog-Application` to disable the entire EventLog.

Additionally, adversaries may use `auditpol` and its sub-commands in a command prompt to disable auditing or clear the audit policy. To enable or disable a specified setting or audit category, adversaries may use the `/success` or `/failure` parameters. For example, `auditpol /set /category:"Account Logon" /success:disable /failure:disable` turns off auditing for the Account Logon category.[^fn9] To clear the audit policy, adversaries may run the following lines: `auditpol /clear /y` or `auditpol /remove /allusers`.[^fn8]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

# Tool(s)

- [[../Tools/Wevtutil|Wevtutil]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685.001](https://attack.mitre.org/techniques/T1685/001)

[^fn1]: [ dmcxblue. (n.d.). Disable Windows Event Logging. Retrieved September 10, 2021.](https://dmcxblue.gitbook.io/red-team-notes-2-0/red-team-techniques/defense-evasion/t1562-impair-defenses/disable-windows-event-logging)
[^fn2]: [Core Technologies. (2021, May 24). Essential Windows Services: EventLog / Windows Event Log. Retrieved September 14, 2021.](https://www.coretechnologies.com/blog/windows-services/eventlog/)
[^fn3]: [Heiligenstein, L. (n.d.). REP-25: Disable Windows Event Logging. Retrieved April 7, 2022.](https://ptylu.github.io/content/report/report.html?report=25)
[^fn4]: [Microsoft. (n.d.). Retrieved April 15, 2026.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/audit-policy)
[^fn5]: [Microsoft. (n.d.). Retrieved April 15, 2026.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/advanced-security-audit-policy-settings)
[^fn6]: [Microsoft. (n.d.). Retrieved April 15, 2026.](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/auditpol)
[^fn7]: [Naceri, A. (2021, November 7). Windows Server 2019 file overwrite bug. Retrieved April 7, 2022.](https://web.archive.org/web/20211107115646/https://twitter.com/klinix5/status/1457316029114327040)
[^fn8]: [redcanaryco. (2021, September 3). T1562.002 - Disable Windows Event Logging. Retrieved September 13, 2021.](https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1562.002/T1562.002.md)
[^fn9]: [STRONTIC. (n.d.). auditpol.exe. Retrieved September 9, 2021.](https://strontic.github.io/xcyclopedia/library/auditpol.exe-214E0EA1F7F7C27C82D23F183F9D23F1.html)