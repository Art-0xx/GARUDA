---
mitre_data:
  id: T1218.007
  linker_tags:
  - mitre/attack/linker/stealth/msiexec
  name: Msiexec
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Msiexec (`T1218.007`)

Adversaries may abuse msiexec.exe to proxy execution of malicious payloads. Msiexec.exe is the command-line utility for the Windows Installer and is thus commonly associated with executing installation packages (.msi).[^fn3] The Msiexec.exe binary may also be digitally signed by Microsoft.

Adversaries may abuse msiexec.exe to launch local or network accessible MSI files. Msiexec.exe can also execute DLLs.[^fn2][^fn1] Since it may be signed and native on Windows systems, msiexec.exe can be used to bypass application control solutions that do not account for its potential abuse. Msiexec.exe execution may also be elevated to SYSTEM privileges if the <code>AlwaysInstallElevated</code> policy is enabled.[^fn4]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tool(s)

- [[../Tools/RemoteUtilities|RemoteUtilities]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.007](https://attack.mitre.org/techniques/T1218/007)

[^fn1]: [Co, M. and Sison, G. (2018, February 8). Attack Using Windows Installer msiexec.exe leads to LokiBot. Retrieved April 18, 2019.](https://blog.trendmicro.com/trendlabs-security-intelligence/attack-using-windows-installer-msiexec-exe-leads-lokibot/)
[^fn2]: [LOLBAS. (n.d.). Msiexec.exe. Retrieved April 18, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Msiexec/)
[^fn3]: [Microsoft. (2017, October 15). msiexec. Retrieved January 24, 2020.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/msiexec)
[^fn4]: [Microsoft. (2018, May 31). AlwaysInstallElevated. Retrieved December 14, 2020.](https://docs.microsoft.com/en-us/windows/win32/msi/alwaysinstallelevated)