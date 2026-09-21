---
mitre_data:
  id: T1547.010
  linker_tags:
  - mitre/attack/linker/persistence/port_monitors
  - mitre/attack/linker/privilege_escalation/port_monitors
  name: Port Monitors
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Port Monitors (`T1547.010`)

Adversaries may use port monitors to run an adversary supplied DLL during system boot for persistence or privilege escalation. A port monitor can be set through the <code>AddMonitor</code> API call to set a DLL to be loaded at startup.[^fn2] This DLL can be located in <code>C:\Windows\System32</code> and will be loaded and run by the print spooler service, `spoolsv.exe`, under SYSTEM level permissions on boot.[^fn1] 

Alternatively, an arbitrary DLL can be loaded if permissions allow writing a fully-qualified pathname for that DLL to the `Driver` value of an existing or new arbitrarily named subkey of <code>HKLM\SYSTEM\CurrentControlSet\Control\Print\Monitors</code>. The Registry key contains entries for the following:

* Local Port
* Standard TCP/IP Port
* USB Monitor
* WSD Port



# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.010](https://attack.mitre.org/techniques/T1547/010)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Bloxham, B. (n.d.). Getting Windows to Play with Itself &#91;PowerPoint slides&#93;. Retrieved November 12, 2014.](https://www.defcon.org/images/defcon-22/dc-22-presentations/Bloxham/DEFCON-22-Brady-Bloxham-Windows-API-Abuse-UPDATED.pdf)
[^fn2]: [Microsoft. (n.d.). AddMonitor function. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/printdocs/addmonitor)