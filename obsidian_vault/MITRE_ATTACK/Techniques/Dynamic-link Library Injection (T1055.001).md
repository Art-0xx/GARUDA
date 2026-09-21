---
mitre_data:
  id: T1055.001
  linker_tags:
  - mitre/attack/linker/stealth/dynamic-link_library_injection
  - mitre/attack/linker/privilege_escalation/dynamic-link_library_injection
  name: Dynamic-link Library Injection
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Dynamic-link Library Injection (`T1055.001`)

Adversaries may inject dynamic-link libraries (DLLs) into processes in order to evade process-based defenses as well as possibly elevate privileges. DLL injection is a method of executing arbitrary code in the address space of a separate live process.  

DLL injection is commonly performed by writing the path to a DLL in the virtual address space of the target process before loading the DLL by invoking a new thread. The write can be performed with native Windows API calls such as <code>VirtualAllocEx</code> and <code>WriteProcessMemory</code>, then invoked with <code>CreateRemoteThread</code> (which calls the <code>LoadLibrary</code> API responsible for loading the DLL). [^fn3] 

Variations of this method such as reflective DLL injection (writing a self-mapping DLL into a process) and memory module (map DLL when writing into process) overcome the address relocation issue as well as the additional APIs to invoke execution (since these methods load and execute the files in memory by manually preforming the function of <code>LoadLibrary</code>).[^fn2][^fn3] 

Another variation of this method, often referred to as Module Stomping/Overloading or DLL Hollowing, may be leveraged to conceal injected code within a process. This method involves loading a legitimate DLL into a remote process then manually overwriting the module's <code>AddressOfEntryPoint</code> before starting a new thread in the target process.[^fn4] This variation allows attackers to hide malicious injected code by potentially backing its execution with a legitimate DLL file on disk.[^fn1] 

Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via DLL injection may also evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/IronNetInjector|IronNetInjector]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.001](https://attack.mitre.org/techniques/T1055/001)

[^fn1]: [Aliz Hammond. (2019, August 15). Hiding Malicious Code with "Module Stomping": Part 1. Retrieved July 14, 2022.](https://blog.f-secure.com/hiding-malicious-code-with-module-stomping/)
[^fn2]: [Desimone, J. (2017, June 13). Hunting in Memory. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/hunting-memory)
[^fn3]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
[^fn4]: [Red Teaming Experiments. (n.d.). Module Stomping for Shellcode Injection. Retrieved July 14, 2022.](https://www.ired.team/offensive-security/code-injection-process-injection/modulestomping-dll-hollowing-shellcode-injection)