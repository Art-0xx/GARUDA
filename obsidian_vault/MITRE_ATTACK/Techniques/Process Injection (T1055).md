---
mitre_data:
  id: T1055
  linker_tags:
  - mitre/attack/linker/stealth/process_injection
  - mitre/attack/linker/privilege_escalation/process_injection
  name: Process Injection
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Process Injection (`T1055`)

Adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. Process injection is a method of executing arbitrary code in the address space of a separate live process. Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via process injection may also evade detection from security products since the execution is masked under a legitimate process. 

There are many different ways to inject code into a process, many of which abuse legitimate functionalities. These implementations exist for every major OS but are typically platform specific. 

More sophisticated samples may perform multiple process injections to segment modules and further evade detection, utilizing named pipes or other inter-process communication (IPC) mechanisms as a communication channel. 


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Extra Window Memory Injection (T1055.011)|Extra Window Memory Injection]]
- [[../Techniques/Thread Execution Hijacking (T1055.003)|Thread Execution Hijacking]]
- [[../Techniques/Process Doppelgänging (T1055.013)|Process Doppelgänging]]
- [[../Techniques/Asynchronous Procedure Call (T1055.004)|Asynchronous Procedure Call]]
- [[../Techniques/Portable Executable Injection (T1055.002)|Portable Executable Injection]]
- [[../Techniques/VDSO Hijacking (T1055.014)|VDSO Hijacking]]
- [[../Techniques/Process Hollowing (T1055.012)|Process Hollowing]]
- [[../Techniques/Proc Memory (T1055.009)|Proc Memory]]
- [[../Techniques/Thread Local Storage (T1055.005)|Thread Local Storage]]
- [[../Techniques/Ptrace System Calls (T1055.008)|Ptrace System Calls]]
- [[../Techniques/ListPlanting (T1055.015)|ListPlanting]]
- [[../Techniques/Dynamic-link Library Injection (T1055.001)|Dynamic-link Library Injection]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Donut|Donut]]
- [[../Tools/IronNetInjector|IronNetInjector]]
- [[../Tools/HTRAN|HTRAN]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055](https://attack.mitre.org/techniques/T1055)
