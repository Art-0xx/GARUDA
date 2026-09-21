---
mitre_data:
  id: T1574
  linker_tags:
  - mitre/attack/linker/stealth/hijack_execution_flow
  - mitre/attack/linker/execution/hijack_execution_flow
  name: Hijack Execution Flow
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Hijack Execution Flow (`T1574`)

Adversaries may execute their own malicious payloads by hijacking the way operating systems run programs. Hijacking execution flow can be for the purposes of persistence, since this hijacked execution may reoccur over time. Adversaries may also use these mechanisms to elevate privileges or evade defenses, such as application control or other restrictions on execution.

There are many ways an adversary may hijack the flow of execution, including by manipulating how the operating system locates programs to be executed. How the operating system locates libraries to be used by a program can also be intercepted. Locations where the operating system looks for programs/resources, such as file directories and in the case of Windows the Registry, could also be poisoned to include malicious payloads.


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Path Interception by PATH Environment Variable (T1574.007)|Path Interception by PATH Environment Variable]]
- [[../Techniques/Services Registry Permissions Weakness (T1574.011)|Services Registry Permissions Weakness]]
- [[../Techniques/DLL (T1574.001)|DLL]]
- [[../Techniques/AppDomainManager (T1574.014)|AppDomainManager]]
- [[../Techniques/Path Interception by Search Order Hijacking (T1574.008)|Path Interception by Search Order Hijacking]]
- [[../Techniques/Dynamic Linker Hijacking (T1574.006)|Dynamic Linker Hijacking]]
- [[../Techniques/Executable Installer File Permissions Weakness (T1574.005)|Executable Installer File Permissions Weakness]]
- [[../Techniques/Services File Permissions Weakness (T1574.010)|Services File Permissions Weakness]]
- [[../Techniques/KernelCallbackTable (T1574.013)|KernelCallbackTable]]
- [[../Techniques/Path Interception by Unquoted Path (T1574.009)|Path Interception by Unquoted Path]]
- [[../Techniques/Dylib Hijacking (T1574.004)|Dylib Hijacking]]
- [[../Techniques/COR_PROFILER (T1574.012)|COR_PROFILER]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574](https://attack.mitre.org/techniques/T1574)
