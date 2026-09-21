---
mitre_data:
  id: T1218.013
  linker_tags:
  - mitre/attack/linker/stealth/mavinject
  name: Mavinject
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Mavinject (`T1218.013`)

Adversaries may abuse mavinject.exe to proxy execution of malicious code. Mavinject.exe is the Microsoft Application Virtualization Injector, a Windows utility that can inject code into external processes as part of Microsoft Application Virtualization (App-V).[^fn2]

Adversaries may abuse mavinject.exe to inject malicious DLLs into running processes (i.e. [Dynamic-link Library Injection](https://attack.mitre.org/techniques/T1055/001)), allowing for arbitrary code execution (ex. <code>C:\Windows\system32\mavinject.exe PID /INJECTRUNNING PATH_DLL</code>).[^fn1][^fn4] Since mavinject.exe may be digitally signed by Microsoft, proxying execution via this method may evade detection by security products because the execution is masked under a legitimate process. 

In addition to [Dynamic-link Library Injection](https://attack.mitre.org/techniques/T1055/001), Mavinject.exe can also be abused to perform import descriptor injection via its  <code>/HMODULE</code> command-line parameter (ex. <code>mavinject.exe PID /HMODULE=BASE_ADDRESS PATH_DLL ORDINAL_NUMBER</code>). This command would inject an import table entry consisting of the specified DLL into the module at the given base address.[^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.013](https://attack.mitre.org/techniques/T1218/013)

[^fn1]: [Fernando Martinez. (2021, July 6). Lazarus campaign TTPs and evolution. Retrieved September 22, 2021.](https://cybersecurity.att.com/blogs/labs-research/lazarus-campaign-ttps-and-evolution)
[^fn2]: [LOLBAS. (n.d.). Mavinject.exe. Retrieved September 22, 2021.](https://lolbas-project.github.io/lolbas/Binaries/Mavinject/)
[^fn3]: [Matt Graeber. (2018, May 29). mavinject.exe Functionality Deconstructed. Retrieved September 22, 2021.](https://posts.specterops.io/mavinject-exe-functionality-deconstructed-c29ab2cf5c0e)
[^fn4]: [Reaqta. (2017, December 16). From False Positive to True Positive: the story of Mavinject.exe, the Microsoft Injector. Retrieved September 22, 2021.](https://reaqta.com/2017/12/mavinject-microsoft-injector/)