---
mitre_data:
  id: T1053.005
  linker_tags:
  - mitre/attack/linker/execution/scheduled_task
  - mitre/attack/linker/persistence/scheduled_task
  - mitre/attack/linker/privilege_escalation/scheduled_task
  name: Scheduled Task
  related_tactics:
  - execution
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Scheduled Task (`T1053.005`)

Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code. There are multiple ways to access the Task Scheduler in Windows. The [schtasks](https://attack.mitre.org/software/S0111) utility can be run directly on the command line, or the Task Scheduler can be opened through the GUI within the Administrator Tools section of the Control Panel.[^fn11] In some cases, adversaries have used a .NET wrapper for the Windows Task Scheduler, and alternatively, adversaries have used the Windows netapi32 library and [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047) (WMI) to create a scheduled task. Adversaries may also utilize the Powershell Cmdlet `Invoke-CimMethod`, which leverages WMI class `PS_ScheduledTask` to create a scheduled task via an XML path.[^fn7]

An adversary may use Windows Task Scheduler to execute programs at system startup or on a scheduled basis for persistence. The Windows Task Scheduler can also be abused to conduct remote Execution as part of Lateral Movement and/or to run a process under the context of a specified account (such as SYSTEM). Similar to [System Binary Proxy Execution](https://attack.mitre.org/techniques/T1218), adversaries have also abused the Windows Task Scheduler to potentially mask one-time execution under signed/trusted system processes.[^fn1]

Adversaries may also create "hidden" scheduled tasks (i.e. [Hide Artifacts](https://attack.mitre.org/techniques/T1564)) that may not be visible to defender tools and manual queries used to enumerate tasks. Specifically, an adversary may hide a task from `schtasks /query` and the Task Scheduler by deleting the associated Security Descriptor (SD) registry value (where deletion of this value must be completed using SYSTEM permissions).[^fn10][^fn4] Adversaries may also employ alternate methods to hide tasks, such as altering the metadata (e.g., `Index` value) within associated registry keys.[^fn2] 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Scheduled Task_Job (T1053)|Scheduled Task/Job]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/MCMD|MCMD]]
- [[../Tools/IronNetInjector|IronNetInjector]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/schtasks|schtasks]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1053.005](https://attack.mitre.org/techniques/T1053/005)
- [Loobeek, L. (2017, December 8). leoloobeek Status. Retrieved September 12, 2024.](https://x.com/leoloobeek/status/939248813465853953)
- [Microsoft. (2017, May 28). Audit Other Object Access Events. Retrieved June 27, 2019.](https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/audit-other-object-access-events)
- [Microsoft. (n.d.). General Task Registration. Retrieved December 12, 2017.](https://technet.microsoft.com/library/dd315590.aspx)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)
- [Satyajit321. (2015, November 3). Scheduled Tasks History Retention settings. Retrieved December 12, 2017.](https://social.technet.microsoft.com/Forums/en-US/e5bca729-52e7-4fcb-ba12-3225c564674c/scheduled-tasks-history-retention-settings?forum=winserver8gen)

[^fn1]: [Campbell, B. et al. (2022, March 21). Serpent, No Swiping! New Backdoor Targets French Entities with Unique Attack Chain. Retrieved April 11, 2022.](https://www.proofpoint.com/us/blog/threat-insight/serpent-no-swiping-new-backdoor-targets-french-entities-unique-attack-chain)
[^fn2]: [Harshal Tupsamudre. (2022, June 20). Defending Against Scheduled Tasks. Retrieved July 5, 2022.](https://blog.qualys.com/vulnerabilities-threat-research/2022/06/20/defending-against-scheduled-task-attacks-in-windows-environments)
[^fn4]: [Microsoft Threat Intelligence Team & Detection and Response Team . (2022, April 12). Tarrask malware uses scheduled tasks for defense evasion. Retrieved June 1, 2022.](https://www.microsoft.com/security/blog/2022/04/12/tarrask-malware-uses-scheduled-tasks-for-defense-evasion/)
[^fn7]: [Red Canary - Atomic Red Team. (n.d.). T1053.005 - Scheduled Task/Job: Scheduled Task. Retrieved June 19, 2024.](https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1053.005/T1053.005.md)
[^fn10]: [Sittikorn S. (2022, April 15). Removal Of SD Value to Hide Schedule Task - Registry. Retrieved June 1, 2022.](https://github.com/SigmaHQ/sigma/blob/master/rules/windows/registry/registry_delete/registry_delete_schtasks_hide_task_via_sd_value_removal.yml)
[^fn11]: [Stack Overflow. (n.d.). How to find the location of the Scheduled Tasks folder. Retrieved June 19, 2024.](https://stackoverflow.com/questions/2913816/how-to-find-the-location-of-the-scheduled-tasks-folder)