---
mitre_data:
  id: T1546.003
  linker_tags:
  - mitre/attack/linker/privilege_escalation/windows_management_instrumentation_event_subscription
  - mitre/attack/linker/persistence/windows_management_instrumentation_event_subscription
  name: Windows Management Instrumentation Event Subscription
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Windows Management Instrumentation Event Subscription (`T1546.003`)

Adversaries may establish persistence and elevate privileges by executing malicious content triggered by a Windows Management Instrumentation (WMI) event subscription. WMI can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. Examples of events that may be subscribed to are the wall clock time, user login, or the computer's uptime.[^fn6]

Adversaries may use the capabilities of WMI to subscribe to an event and execute arbitrary code when that event occurs, providing persistence on a system.[^fn3][^fn1] Adversaries may also compile WMI scripts – using `mofcomp.exe`  –into Windows Management Object (MOF) files (.mof extension) that can be used to create a malicious subscription.[^fn2][^fn9]

WMI subscription execution is proxied by the WMI Provider Host process (WmiPrvSe.exe) and thus may result in elevated SYSTEM privileges.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PoshC2|PoshC2]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.003](https://attack.mitre.org/techniques/T1546/003)
- [French, D. (2018, October 9). Detecting & Removing an Attacker’s WMI Persistence. Retrieved October 11, 2019.](https://medium.com/threatpunter/detecting-removing-wmi-persistence-60ccbb7dff96)
- [French, D., Murphy, B. (2020, March 24). Adversary tradecraft 101: Hunting for persistence using Elastic Security (Part 1). Retrieved December 21, 2020.](https://www.elastic.co/blog/hunting-for-persistence-using-elastic-security-part-1)
- [Microsoft. (n.d.). Retrieved January 24, 2020.](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/register-wmievent?view=powershell-5.1)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Ballenthin, W., et al. (2015). Windows Management Instrumentation (WMI) Offense, Defense, and Forensics. Retrieved March 30, 2016.](https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf)
[^fn2]: [Dell SecureWorks Counter Threat Unit™ (CTU) Research Team. (2016, March 28). A Novel WMI Persistence Implementation. Retrieved March 30, 2016.](https://www.secureworks.com/blog/wmi-persistence)
[^fn3]: [Devon Kerr. (2015). There's Something About WMI. Retrieved November 17, 2024.](https://web.archive.org/web/20221203203722/https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/sans-dfir-2015.pdf)
[^fn6]: [Mandiant. (2015, February 24). M-Trends 2015: A View from the Front Lines. Retrieved November 17, 2024.](https://web.archive.org/web/20160629094859/https://www2.fireeye.com/rs/fireye/images/rpt-m-trends-2015.pdf)
[^fn9]: [Satran, M. (2018, May 30). Managed Object Format (MOF). Retrieved January 24, 2020.](https://docs.microsoft.com/en-us/windows/win32/wmisdk/managed-object-format--mof-)