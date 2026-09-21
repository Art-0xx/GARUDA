---
mitre_data:
  id: T1546.010
  linker_tags:
  - mitre/attack/linker/privilege_escalation/appinit_dlls
  - mitre/attack/linker/persistence/appinit_dlls
  name: AppInit DLLs
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# AppInit DLLs (`T1546.010`)

Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppInit DLLs loaded into processes. Dynamic-link libraries (DLLs) that are specified in the <code>AppInit_DLLs</code> value in the Registry keys <code>HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Windows</code> or <code>HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Windows NT\CurrentVersion\Windows</code> are loaded by user32.dll into every process that loads user32.dll. In practice this is nearly every program, since user32.dll is a very common library. [^fn1]

Similar to Process Injection, these values can be abused to obtain elevated privileges by causing a malicious DLL to be loaded and run in the context of separate processes on the computer. [^fn2] Malicious AppInit DLLs may also provide persistence by continuously being triggered by API activity. 

The AppInit DLL functionality is disabled in Windows 8 and later versions when secure boot is enabled. [^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.010](https://attack.mitre.org/techniques/T1546/010)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
[^fn2]: [Microsoft. (2006, October). Working with the AppInit_DLLs registry value. Retrieved July 15, 2015.](https://support.microsoft.com/en-us/kb/197571)
[^fn3]: [Microsoft. (n.d.). AppInit DLLs and Secure Boot. Retrieved July 15, 2015.](https://msdn.microsoft.com/en-us/library/dn280412)