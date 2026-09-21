---
mitre_data:
  id: T1546.012
  linker_tags:
  - mitre/attack/linker/privilege_escalation/image_file_execution_options_injection
  - mitre/attack/linker/persistence/image_file_execution_options_injection
  name: Image File Execution Options Injection
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Image File Execution Options Injection (`T1546.012`)

Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by Image File Execution Options (IFEO) debuggers. IFEOs enable a developer to attach a debugger to an application. When a process is created, a debugger present in an application’s IFEO will be prepended to the application’s name, effectively launching the new process under the debugger (e.g., <code>C:\dbg\ntsd.exe -g  notepad.exe</code>).[^fn6]

IFEOs can be set directly via the Registry or in Global Flags via the GFlags tool.[^fn4] IFEOs are represented as <code>Debugger</code> values in the Registry under <code>HKLM\SOFTWARE{\Wow6432Node}\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\<executable></code> where <code>&lt;executable&gt;</code> is the binary on which the debugger is attached.[^fn6]

IFEOs can also enable an arbitrary monitor program to be launched when a specified program silently exits (i.e. is prematurely terminated by itself or a second, non kernel-mode process).[^fn3][^fn5] Similar to debuggers, silent exit monitoring can be enabled through GFlags and/or by directly modifying IFEO and silent process exit Registry values in <code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SilentProcessExit\</code>.[^fn3][^fn5]

Similar to [Accessibility Features](https://attack.mitre.org/techniques/T1546/008), on Windows Vista and later as well as Windows Server 2008 and later, a Registry key may be modified that configures "cmd.exe," or another program that provides backdoor access, as a "debugger" for an accessibility program (ex: utilman.exe). After the Registry is modified, pressing the appropriate key combination at the login screen while at the keyboard or when connected with [Remote Desktop Protocol](https://attack.mitre.org/techniques/T1021/001) will cause the "debugger" program to be executed with SYSTEM privileges.[^fn8]

Similar to [Process Injection](https://attack.mitre.org/techniques/T1055), these values may also be abused to obtain privilege escalation by causing a malicious executable to be loaded and run in the context of separate processes on the computer.[^fn2] Installing IFEO mechanisms may also provide Persistence via continuous triggered invocation.

Malware may also use IFEO to impair defenses by registering invalid debuggers that redirect and effectively disable various system and security applications.[^fn1][^fn7]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.012](https://attack.mitre.org/techniques/T1546/012)

[^fn1]: [FSecure. (n.d.). Backdoor - W32/Hupigon.EMV - Threat Description. Retrieved December 18, 2017.](https://www.f-secure.com/v-descs/backdoor_w32_hupigon_emv.shtml)
[^fn2]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
[^fn3]: [Marshall, D. & Griffin, S. (2017, November 28). Monitoring Silent Process Exit. Retrieved June 27, 2018.](https://docs.microsoft.com/windows-hardware/drivers/debugger/registry-entries-for-silent-process-exit)
[^fn4]: [Microsoft. (2017, May 23). GFlags Overview. Retrieved December 18, 2017.](https://docs.microsoft.com/windows-hardware/drivers/debugger/gflags-overview)
[^fn5]: [Moe, O. (2018, April 10). Persistence using GlobalFlags in Image File Execution Options - Hidden from Autoruns.exe. Retrieved June 27, 2018.](https://oddvar.moe/2018/04/10/persistence-using-globalflags-in-image-file-execution-options-hidden-from-autoruns-exe/)
[^fn6]: [Shanbhag, M. (2010, March 24). Image File Execution Options (IFEO). Retrieved December 18, 2017.](https://blogs.msdn.microsoft.com/mithuns/2010/03/24/image-file-execution-options-ifeo/)
[^fn7]: [Symantec. (2008, June 28). Trojan.Ushedix. Retrieved December 18, 2017.](https://www.symantec.com/security_response/writeup.jsp?docid=2008-062807-2501-99&tabid=2)
[^fn8]: [Tilbury, C. (2014, August 28). Registry Analysis with CrowdResponse. Retrieved November 17, 2024.](https://web.archive.org/web/20200730053039/https://www.crowdstrike.com/blog/registry-analysis-with-crowdresponse/)