---
mitre_data:
  id: T1218.003
  linker_tags:
  - mitre/attack/linker/stealth/cmstp
  name: CMSTP
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# CMSTP (`T1218.003`)

Adversaries may abuse CMSTP to proxy execution of malicious code. The Microsoft Connection Manager Profile Installer (CMSTP.exe) is a command-line program used to install Connection Manager service profiles. [^fn2] CMSTP.exe accepts an installation information file (INF) as a parameter and installs a service profile leveraged for remote access connections.

Adversaries may supply CMSTP.exe with INF files infected with malicious commands. [^fn1] Similar to [Regsvr32](https://attack.mitre.org/techniques/T1218/010) / ”Squiblydoo”, CMSTP.exe may be abused to load and execute DLLs [^fn3]  and/or COM scriptlets (SCT) from remote servers. [^fn6] [^fn4] [^fn5] This execution may also bypass AppLocker and other application control defenses since CMSTP.exe is a legitimate binary that may be signed by Microsoft.

CMSTP.exe can also be abused to [Bypass User Account Control](https://attack.mitre.org/techniques/T1548/002) and execute arbitrary commands from a malicious INF through an auto-elevated COM interface. [^fn3] [^fn4] [^fn5]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.003](https://attack.mitre.org/techniques/T1218/003)

[^fn1]: [Carr, N. (2018, January 31). Here is some early bad cmstp.exe... Retrieved September 12, 2024.](https://x.com/ItsReallyNick/status/958789644165894146)
[^fn2]: [Microsoft. (2009, October 8). How Connection Manager Works. Retrieved April 11, 2018.](https://docs.microsoft.com/previous-versions/windows/it-pro/windows-server-2003/cc786431(v=ws.10))
[^fn3]: [Moe, O. (2017, August 15). Research on CMSTP.exe. Retrieved April 11, 2018.](https://msitpros.com/?p=3960)
[^fn4]: [Moe, O. (2018, March 1). Ultimate AppLocker Bypass List. Retrieved April 10, 2018.](https://github.com/api0cradle/UltimateAppLockerByPassList)
[^fn5]: [Seetharaman, N. (2018, July 7). Detecting CMSTP-Enabled Code Execution and UAC Bypass With Sysmon.. Retrieved November 17, 2024.](https://web.archive.org/web/20190316220149/http://www.endurant.io/cmstp/detecting-cmstp-enabled-code-execution-and-uac-bypass-with-sysmon/)
[^fn6]: [Tyrer, N. (2018, January 30). CMSTP.exe - remote .sct execution applocker bypass. Retrieved September 12, 2024.](https://x.com/NickTyrer/status/958450014111633408)