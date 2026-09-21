---
mitre_data:
  id: T1218
  linker_tags:
  - mitre/attack/linker/stealth/system_binary_proxy_execution
  name: System Binary Proxy Execution
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# System Binary Proxy Execution (`T1218`)

Adversaries may bypass process and/or signature-based defenses by proxying execution of malicious content with signed, or otherwise trusted, binaries. Binaries used in this technique are often Microsoft-signed files, indicating that they have been either downloaded from Microsoft or are already native in the operating system.[^fn2] Binaries signed with trusted digital certificates can typically execute on Windows systems protected by digital signature validation. Several Microsoft signed binaries that are default on Windows installations can be used to proxy execution of other files or commands.

Similarly, on Linux systems adversaries may abuse trusted binaries such as <code>split</code> to proxy execution of malicious commands.[^fn3][^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Rundll32 (T1218.011)|Rundll32]]
- [[../Techniques/Mavinject (T1218.013)|Mavinject]]
- [[../Techniques/InstallUtil (T1218.004)|InstallUtil]]
- [[../Techniques/Msiexec (T1218.007)|Msiexec]]
- [[../Techniques/CMSTP (T1218.003)|CMSTP]]
- [[../Techniques/Control Panel (T1218.002)|Control Panel]]
- [[../Techniques/Electron Applications (T1218.015)|Electron Applications]]
- [[../Techniques/Odbcconf (T1218.008)|Odbcconf]]
- [[../Techniques/Verclsid (T1218.012)|Verclsid]]
- [[../Techniques/Mshta (T1218.005)|Mshta]]
- [[../Techniques/Compiled HTML File (T1218.001)|Compiled HTML File]]
- [[../Techniques/Regsvr32 (T1218.010)|Regsvr32]]
- [[../Techniques/Regsvcs_Regasm (T1218.009)|Regsvcs/Regasm]]
- [[../Techniques/MMC (T1218.014)|MMC]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218](https://attack.mitre.org/techniques/T1218)

[^fn1]: [GTFOBins. (2020, November 13). split. Retrieved April 18, 2022.](https://gtfobins.github.io/gtfobins/split/)
[^fn2]: [Oddvar Moe et al. (2022, February).  Living Off The Land Binaries, Scripts and Libraries. Retrieved March 7, 2022.](https://github.com/LOLBAS-Project/LOLBAS#criteria)
[^fn3]: [Torbjorn Granlund, Richard M. Stallman. (2020, March null). split(1) — Linux manual page. Retrieved March 25, 2022.](https://man7.org/linux/man-pages/man1/split.1.html)