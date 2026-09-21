---
mitre_data:
  id: T1218.004
  linker_tags:
  - mitre/attack/linker/stealth/installutil
  name: InstallUtil
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# InstallUtil (`T1218.004`)

Adversaries may use InstallUtil to proxy execution of code through a trusted Windows utility. InstallUtil is a command-line utility that allows for installation and uninstallation of resources by executing specific installer components specified in .NET binaries. [^fn2] The InstallUtil binary may also be digitally signed by Microsoft and located in the .NET directories on a Windows system: <code>C:\Windows\Microsoft.NET\Framework\v<version>\InstallUtil.exe</code> and <code>C:\Windows\Microsoft.NET\Framework64\v<version>\InstallUtil.exe</code>.

InstallUtil may also be used to bypass application control through use of attributes within the binary that execute the class decorated with the attribute <code>[System.ComponentModel.RunInstaller(true)]</code>. [^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tool(s)

- [[../Tools/Covenant|Covenant]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.004](https://attack.mitre.org/techniques/T1218/004)

[^fn1]: [LOLBAS. (n.d.). Installutil.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Installutil/)
[^fn2]: [Microsoft. (n.d.). Installutil.exe (Installer Tool). Retrieved July 1, 2016.](https://msdn.microsoft.com/en-us/library/50614e95.aspx)