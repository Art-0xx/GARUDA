---
mitre_data:
  id: T1055.005
  linker_tags:
  - mitre/attack/linker/stealth/thread_local_storage
  - mitre/attack/linker/privilege_escalation/thread_local_storage
  name: Thread Local Storage
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Thread Local Storage (`T1055.005`)

Adversaries may inject malicious code into processes via thread local storage (TLS) callbacks in order to evade process-based defenses as well as possibly elevate privileges. TLS callback injection is a method of executing arbitrary code in the address space of a separate live process. 

TLS callback injection involves manipulating pointers inside a portable executable (PE) to redirect a process to malicious code before reaching the code's legitimate entry point. TLS callbacks are normally used by the OS to setup and/or cleanup data used by threads. Manipulating TLS callbacks may be performed by allocating and writing to specific offsets within a process’ memory space using other [Process Injection](https://attack.mitre.org/techniques/T1055) techniques such as [Process Hollowing](https://attack.mitre.org/techniques/T1055/012).[^fn1]

Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via TLS callback injection may also evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.005](https://attack.mitre.org/techniques/T1055/005)

[^fn1]: [Vaish, A. & Nemes, S. (2017, November 28). Newly Observed Ursnif Variant Employs Malicious TLS Callback Technique to Achieve Process Injection. Retrieved December 18, 2017.](https://www.fireeye.com/blog/threat-research/2017/11/ursnif-variant-malicious-tls-callback-technique.html)