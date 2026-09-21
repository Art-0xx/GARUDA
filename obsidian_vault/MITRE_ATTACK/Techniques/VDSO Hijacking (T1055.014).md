---
mitre_data:
  id: T1055.014
  linker_tags:
  - mitre/attack/linker/stealth/vdso_hijacking
  - mitre/attack/linker/privilege_escalation/vdso_hijacking
  name: VDSO Hijacking
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# VDSO Hijacking (`T1055.014`)

Adversaries may inject malicious code into processes via VDSO hijacking in order to evade process-based defenses as well as possibly elevate privileges. Virtual dynamic shared object (vdso) hijacking is a method of executing arbitrary code in the address space of a separate live process. 

VDSO hijacking involves redirecting calls to dynamically linked shared libraries. Memory protections may prevent writing executable code to a process via [Ptrace System Calls](https://attack.mitre.org/techniques/T1055/008). However, an adversary may hijack the syscall interface code stubs mapped into a process from the vdso shared object to execute syscalls to open and map a malicious shared object. This code can then be invoked by redirecting the execution flow of the process via patched memory address references stored in a process' global offset table (which store absolute addresses of mapped library functions).[^fn3][^fn1][^fn4][^fn2]

Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via VDSO hijacking may also evade detection from security products since the execution is masked under a legitimate process.  


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.014](https://attack.mitre.org/techniques/T1055/014)

[^fn1]: [backtrace. (2016, April 22). ELF SHARED LIBRARY INJECTION FORENSICS. Retrieved November 17, 2024.](https://web.archive.org/web/20210205211142/https://backtrace.io/blog/backtrace/elf-shared-library-injection-forensics/)
[^fn2]: [Drysdale, D. (2014, July 16). Anatomy of a system call, part 2. Retrieved June 16, 2020.](https://lwn.net/Articles/604515/)
[^fn3]: [O'Neill, R. (2009, May). Modern Day ELF Runtime infection via GOT poisoning. Retrieved March 15, 2020.](https://web.archive.org/web/20150711051625/http://vxer.org/lib/vrn00.html)
[^fn4]: [Petersson, J. (2005, August 14). What is linux-gate.so.1?. Retrieved June 16, 2020.](https://web.archive.org/web/20051013084246/http://www.trilithium.com/johan/2005/08/linux-gate/)