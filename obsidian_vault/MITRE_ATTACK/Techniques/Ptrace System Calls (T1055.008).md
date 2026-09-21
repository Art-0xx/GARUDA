---
mitre_data:
  id: T1055.008
  linker_tags:
  - mitre/attack/linker/stealth/ptrace_system_calls
  - mitre/attack/linker/privilege_escalation/ptrace_system_calls
  name: Ptrace System Calls
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Ptrace System Calls (`T1055.008`)

Adversaries may inject malicious code into processes via ptrace (process trace) system calls in order to evade process-based defenses as well as possibly elevate privileges. Ptrace system call injection is a method of executing arbitrary code in the address space of a separate live process. 

Ptrace system call injection involves attaching to and modifying a running process. The ptrace system call enables a debugging process to observe and control another process (and each individual thread), including changing memory and register values.[^fn3] Ptrace system call injection is commonly performed by writing arbitrary code into a running process (ex: <code>malloc</code>) then invoking that memory with <code>PTRACE_SETREGS</code> to set the register containing the next instruction to execute. Ptrace system call injection can also be done with <code>PTRACE_POKETEXT</code>/<code>PTRACE_POKEDATA</code>, which copy data to a specific address in the target processes’ memory (ex: the current address of the next instruction). [^fn3][^fn2] 

Ptrace system call injection may not be possible targeting processes that are non-child processes and/or have higher-privileges.[^fn1] 

Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via ptrace system call injection may also evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.008](https://attack.mitre.org/techniques/T1055/008)

[^fn1]: [Colgan, T. (2015, August 15). Linux-Inject. Retrieved February 21, 2020.](https://github.com/gaffe23/linux-inject/blob/master/slides_BHArsenal2015.pdf)
[^fn2]: [Jain, S. (2018, July 25). Code injection in running process using ptrace. Retrieved February 21, 2020.](https://medium.com/@jain.sm/code-injection-in-running-process-using-ptrace-d3ea7191a4be)
[^fn3]: [Kerrisk, M. (2020, February 9). PTRACE(2) - Linux Programmer's Manual. Retrieved February 21, 2020.](http://man7.org/linux/man-pages/man2/ptrace.2.html)