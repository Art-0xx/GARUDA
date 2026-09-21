---
mitre_data:
  id: T1055.011
  linker_tags:
  - mitre/attack/linker/stealth/extra_window_memory_injection
  - mitre/attack/linker/privilege_escalation/extra_window_memory_injection
  name: Extra Window Memory Injection
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Extra Window Memory Injection (`T1055.011`)

Adversaries may inject malicious code into process via Extra Window Memory (EWM) in order to evade process-based defenses as well as possibly elevate privileges. EWM injection is a method of executing arbitrary code in the address space of a separate live process. 

Before creating a window, graphical Windows-based processes must prescribe to or register a windows class, which stipulate appearance and behavior (via windows procedures, which are functions that handle input/output of data).[^fn4] Registration of new windows classes can include a request for up to 40 bytes of EWM to be appended to the allocated memory of each instance of that class. This EWM is intended to store data specific to that window and has specific application programming interface (API) functions to set and get its value. [^fn5] [^fn6]

Although small, the EWM is large enough to store a 32-bit pointer and is often used to point to a windows procedure. Malware may possibly utilize this memory location in part of an attack chain that includes writing code to shared sections of the process’s memory, placing a pointer to the code in EWM, then invoking execution by returning execution control to the address in the process’s EWM.

Execution granted through EWM injection may allow access to both the target process's memory and possibly elevated privileges. Writing payloads to shared sections also avoids the use of highly monitored API calls such as <code>WriteProcessMemory</code> and <code>CreateRemoteThread</code>.[^fn1] More sophisticated malware samples may also potentially bypass protection mechanisms such as data execution prevention (DEP) by triggering a combination of windows procedures and other system functions that will rewrite the malicious payload inside an executable portion of the target process.  [^fn2] [^fn3]

Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via EWM injection may also evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.011](https://attack.mitre.org/techniques/T1055/011)

[^fn1]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
[^fn2]: [MalwareTech. (2013, August 13). PowerLoader Injection – Something truly amazing. Retrieved December 16, 2017.](https://www.malwaretech.com/2013/08/powerloader-injection-something-truly.html)
[^fn3]: [Matrosov, A. (2013, March 19). Gapz and Redyms droppers based on Power Loader code. Retrieved December 16, 2017.](https://www.welivesecurity.com/2013/03/19/gapz-and-redyms-droppers-based-on-power-loader-code/)
[^fn4]: [Microsoft. (n.d.). About Window Classes. Retrieved December 16, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms633574.aspx)
[^fn5]: [Microsoft. (n.d.). GetWindowLong function. Retrieved December 16, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms633584.aspx)
[^fn6]: [Microsoft. (n.d.). SetWindowLong function. Retrieved December 16, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms633591.aspx)