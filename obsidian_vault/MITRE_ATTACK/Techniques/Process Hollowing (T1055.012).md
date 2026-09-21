---
mitre_data:
  id: T1055.012
  linker_tags:
  - mitre/attack/linker/stealth/process_hollowing
  - mitre/attack/linker/privilege_escalation/process_hollowing
  name: Process Hollowing
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Process Hollowing (`T1055.012`)

Adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. Process hollowing is a method of executing arbitrary code in the address space of a separate live process.  

Process hollowing is commonly performed by creating a process in a suspended state then unmapping/hollowing its memory, which can then be replaced with malicious code. A victim process can be created with native Windows API calls such as <code>CreateProcess</code>, which includes a flag to suspend the processes primary thread. At this point the process can be unmapped using APIs calls such as <code>ZwUnmapViewOfSection</code> or <code>NtUnmapViewOfSection</code>  before being written to, realigned to the injected code, and resumed via <code>VirtualAllocEx</code>, <code>WriteProcessMemory</code>, <code>SetThreadContext</code>, then <code>ResumeThread</code> respectively.[^fn2][^fn1]

This is very similar to [Thread Local Storage](https://attack.mitre.org/techniques/T1055/005) but creates a new process rather than targeting an existing process. This behavior will likely not result in elevated privileges since the injected process was spawned from (and thus inherits the security context) of the injecting process. However, execution via process hollowing may also evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.012](https://attack.mitre.org/techniques/T1055/012)

[^fn1]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
[^fn2]: [Leitch, J. (n.d.). Process Hollowing. Retrieved September 12, 2024.](https://new.dc414.org/wp-content/uploads/2011/01/Process-Hollowing.pdf)