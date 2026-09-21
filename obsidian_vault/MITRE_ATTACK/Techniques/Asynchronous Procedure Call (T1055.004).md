---
mitre_data:
  id: T1055.004
  linker_tags:
  - mitre/attack/linker/stealth/asynchronous_procedure_call
  - mitre/attack/linker/privilege_escalation/asynchronous_procedure_call
  name: Asynchronous Procedure Call
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Asynchronous Procedure Call (`T1055.004`)

Adversaries may inject malicious code into processes via the asynchronous procedure call (APC) queue in order to evade process-based defenses as well as possibly elevate privileges. APC injection is a method of executing arbitrary code in the address space of a separate live process. 

APC injection is commonly performed by attaching malicious code to the APC Queue [^fn4] of a process's thread. Queued APC functions are executed when the thread enters an alterable state.[^fn4] A handle to an existing victim process is first created with native Windows API calls such as <code>OpenThread</code>. At this point <code>QueueUserAPC</code> can be used to invoke a function (such as <code>LoadLibrayA</code> pointing to a malicious DLL). 

A variation of APC injection, dubbed "Early Bird injection", involves creating a suspended process in which malicious code can be written and executed before the process' entry point (and potentially subsequent anti-malware hooks) via an APC. [^fn1] AtomBombing [^fn2] is another variation that utilizes APCs to invoke malicious code previously written to the global atom table.[^fn3]

Running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. Execution via APC injection may also evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.004](https://attack.mitre.org/techniques/T1055/004)

[^fn1]: [Gavriel, H. & Erbesfeld, B. (2018, April 11). New ‘Early Bird’ Code Injection Technique Discovered. Retrieved May 24, 2018.](https://www.cyberbit.com/blog/endpoint-security/new-early-bird-code-injection-technique-discovered/)
[^fn2]: [Liberman, T. (2016, October 27). ATOMBOMBING: BRAND NEW CODE INJECTION FOR WINDOWS. Retrieved December 8, 2017.](https://blog.ensilo.com/atombombing-brand-new-code-injection-for-windows)
[^fn3]: [Microsoft. (n.d.). About Atom Tables. Retrieved December 8, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms649053.aspx)
[^fn4]: [Microsoft. (n.d.). Asynchronous Procedure Calls. Retrieved December 8, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms681951.aspx)