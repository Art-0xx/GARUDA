---
mitre_data:
  id: T1569.002
  linker_tags:
  - mitre/attack/linker/execution/service_execution
  name: Service Execution
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Service Execution (`T1569.002`)

Adversaries may abuse the Windows service control manager to execute malicious commands or payloads. The Windows service control manager (<code>services.exe</code>) is an interface to manage and manipulate services.[^fn1] The service control manager is accessible to users via GUI components as well as system utilities such as <code>sc.exe</code> and [Net](https://attack.mitre.org/software/S0039).

[PsExec](https://attack.mitre.org/software/S0029) can also be used to execute commands or payloads via a temporary Windows service created through the service control manager API.[^fn2] Tools such as [PsExec](https://attack.mitre.org/software/S0029) and <code>sc.exe</code> can accept remote servers as arguments and may be used to conduct remote execution.

Adversaries may leverage these mechanisms to execute malicious content. This can be done by either executing a new or modified service. This technique is the execution used in conjunction with [Windows Service](https://attack.mitre.org/techniques/T1543/003) during service persistence or privilege escalation.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Services (T1569)|System Services]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/Impacket|Impacket]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/xCmd|xCmd]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Winexe|Winexe]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/PsExec|PsExec]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1569.002](https://attack.mitre.org/techniques/T1569/002)

[^fn1]: [Microsoft. (2018, May 31). Service Control Manager. Retrieved March 28, 2020.](https://docs.microsoft.com/windows/win32/services/service-control-manager)
[^fn2]: [Russinovich, M. (2014, May 2). Windows Sysinternals PsExec v2.11. Retrieved May 13, 2015.](https://technet.microsoft.com/en-us/sysinternals/bb897553.aspx)