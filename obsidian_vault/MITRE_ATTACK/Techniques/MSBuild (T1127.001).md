---
mitre_data:
  id: T1127.001
  linker_tags:
  - mitre/attack/linker/stealth/msbuild
  - mitre/attack/linker/execution/msbuild
  name: MSBuild
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# MSBuild (`T1127.001`)

Adversaries may use MSBuild to proxy execution of code through a trusted Windows utility. MSBuild.exe (Microsoft Build Engine) is a software build platform used by Visual Studio. It handles XML formatted project files that define requirements for loading and building various platforms and configurations.[^fn3]

Adversaries can abuse MSBuild to proxy execution of malicious code. The inline task capability of MSBuild that was introduced in .NET version 4 allows for C# or Visual Basic code to be inserted into an XML project file.[^fn3][^fn2] MSBuild will compile and execute the inline task. MSBuild.exe is a signed Microsoft binary, so when it is used this way it can execute arbitrary code and bypass application control defenses that are configured to allow MSBuild.exe execution.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Trusted Developer Utilities Proxy Execution (T1127)|Trusted Developer Utilities Proxy Execution]]

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1127.001](https://attack.mitre.org/techniques/T1127/001)

[^fn1]: [LOLBAS. (n.d.). Msbuild.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Msbuild/)
[^fn2]: [Microsoft. (2017, September 21). MSBuild inline tasks. Retrieved March 5, 2021.](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-inline-tasks?view=vs-2019#code-element)
[^fn3]: [Microsoft. (n.d.). MSBuild1. Retrieved November 30, 2016.](https://msdn.microsoft.com/library/dd393574.aspx)