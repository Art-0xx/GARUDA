---
mitre_data:
  id: T1529
  linker_tags:
  - mitre/attack/linker/impact/system_shutdown_reboot
  name: System Shutdown/Reboot
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# System Shutdown/Reboot (`T1529`)

Adversaries may shutdown/reboot systems to interrupt access to, or aid in the destruction of, those systems. Operating systems may contain commands to initiate a shutdown/reboot of a machine or network device. In some cases, these commands may also be used to initiate a shutdown/reboot of a remote computer or network device via [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) (e.g. <code>reload</code>).[^fn5][^fn2] They may also include shutdown/reboot of a virtual machine via hypervisor / cloud consoles or command line tools.

Shutting down or rebooting systems may disrupt access to computer resources for legitimate users while also impeding incident response/recovery.

Adversaries may also use Windows API functions, such as `InitializeSystemShutdownExW` or `ExitWindowsEx`, to force a system to shut down or reboot.[^fn9][^fn7] Alternatively, the `NtRaiseHardError`or `ZwRaiseHardError` Windows API functions with the `ResponseOption` parameter set to `OptionShutdownSystem` may deliver a “blue screen of death” (BSOD) to a system.[^fn8][^fn6][^fn3] In order to leverage these API functions, an adversary may need to acquire `SeShutdownPrivilege` (e.g., via [Access Token Manipulation](https://attack.mitre.org/techniques/T1134)).[^fn7]
 In some cases, the system may not be able to boot again. 

Adversaries may attempt to shutdown/reboot a system after impacting it in other ways, such as [Disk Structure Wipe](https://attack.mitre.org/techniques/T1561/002) or [Inhibit System Recovery](https://attack.mitre.org/techniques/T1490), to hasten the intended effects on system availability.[^fn1][^fn4]


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/Remcos|Remcos]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1529](https://attack.mitre.org/techniques/T1529)

[^fn1]: [Chiu, A. (2016, June 27). New Ransomware Variant "Nyetya" Compromises Systems Worldwide. Retrieved March 26, 2019.](https://blog.talosintelligence.com/2017/06/worldwide-ransomware-variant.html)
[^fn2]: [CISA. (2018, April 20). Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved February 14, 2022.](https://www.cisa.gov/uscert/ncas/alerts/TA18-106A)
[^fn3]: [lzcapp. (n.d.). Retrieved September 22, 2025.](https://github.com/lzcapp/NotMe-BSOD)
[^fn4]: [Mercer, W. and Rascagneres, P. (2018, February 12). Olympic Destroyer Takes Aim At Winter Olympics. Retrieved March 14, 2019.](https://blog.talosintelligence.com/2018/02/olympic-destroyer.html)
[^fn5]: [Microsoft. (2017, October 15). Shutdown. Retrieved October 4, 2019.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown)
[^fn6]: [NtDoc. (n.d.). NtRaiseHardError - NtDoc. Retrieved September 22, 2025.](https://ntdoc.m417z.com/ntraiseharderror)
[^fn7]: [Or Chechik, Tom Fakterman, Daniel Frank & Assaf Dahan. (2023, November 6). Agonizing Serpens (Aka Agrius) Targeting the Israeli Higher Education and Tech Sectors. Retrieved May 22, 2024.](https://unit42.paloaltonetworks.com/agonizing-serpens-targets-israeli-tech-higher-ed-sectors/)
[^fn8]: [SecurityNews. (2024, July 12). Disarming DarkGate: A Deep Dive into Thwarting the Latest DarkGate Variant. Retrieved September 22, 2025.](https://www.sonicwall.com/blog/disarming-darkgate-a-deep-dive-into-thwarting-the-latest-darkgate-variant)
[^fn9]: [William Thomas, Adrian Liviu Arsene, Farid Hendi. (2022, February 25). CrowdStrike Falcon® Protects from New Wiper Malware Used in Ukraine Cyberattacks. Retrieved September 22, 2025.](https://www.crowdstrike.com/en-us/blog/how-crowdstrike-falcon-protects-against-wiper-malware-used-in-ukraine-attacks/)