---
mitre_data:
  id: T1546.009
  linker_tags:
  - mitre/attack/linker/privilege_escalation/appcert_dlls
  - mitre/attack/linker/persistence/appcert_dlls
  name: AppCert DLLs
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# AppCert DLLs (`T1546.009`)

Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppCert DLLs loaded into processes. Dynamic-link libraries (DLLs) that are specified in the <code>AppCertDLLs</code> Registry key under <code>HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\</code> are loaded into every process that calls the ubiquitously used application programming interface (API) functions <code>CreateProcess</code>, <code>CreateProcessAsUser</code>, <code>CreateProcessWithLoginW</code>, <code>CreateProcessWithTokenW</code>, or <code>WinExec</code>. [^fn1]

Similar to [Process Injection](https://attack.mitre.org/techniques/T1055), this value can be abused to obtain elevated privileges by causing a malicious DLL to be loaded and run in the context of separate processes on the computer. Malicious AppCert DLLs may also provide persistence by continuously being triggered by API activity. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.009](https://attack.mitre.org/techniques/T1546/009)
- [Microsoft. (2007, October 24). Windows Sysinternals - AppCertDlls. Retrieved November 17, 2024.](https://web.archive.org/web/20130401232752/https://forum.sysinternals.com/appcertdlls_topic12546.html)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)