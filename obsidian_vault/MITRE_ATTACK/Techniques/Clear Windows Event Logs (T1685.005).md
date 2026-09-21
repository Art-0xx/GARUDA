---
mitre_data:
  id: T1685.005
  linker_tags:
  - mitre/attack/linker/defense_impairment/clear_windows_event_logs
  name: Clear Windows Event Logs
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Clear Windows Event Logs (`T1685.005`)

Adversaries may clear Windows Event Logs to hide the activity of an intrusion. Windows Event Logs are a record of a computer's alerts and notifications. There are three system-defined sources of events: System, Application, and Security, with five event types: Error, Warning, Information, Success Audit, and Failure Audit.

With administrator privileges, the event logs can be cleared with the following utility commands:

* `wevtutil cl system`
* `wevtutil cl application`
* `wevtutil cl security`

These logs may also be cleared through other mechanisms, such as the event viewer GUI or [PowerShell](https://attack.mitre.org/techniques/T1059/001). For example, adversaries may use the PowerShell command `Remove-EventLog -LogName Security` to delete the Security EventLog and after reboot, disable future logging. Note: events may still be generated and logged in the .evtx file between the time the command is run and the reboot.[^fn1]

Adversaries may also attempt to clear logs by directly deleting the stored log files within `C:\Windows\System32\winevt\logs\`.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

# Tool(s)

- [[../Tools/Pupy|Pupy]]
- [[../Tools/Wevtutil|Wevtutil]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685.005](https://attack.mitre.org/techniques/T1685/005)

[^fn1]: [Heiligenstein, L. (n.d.). REP-25: Disable Windows Event Logging. Retrieved April 7, 2022.](https://ptylu.github.io/content/report/report.html?report=25)