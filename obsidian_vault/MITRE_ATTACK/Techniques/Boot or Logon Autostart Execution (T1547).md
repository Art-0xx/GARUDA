---
mitre_data:
  id: T1547
  linker_tags:
  - mitre/attack/linker/persistence/boot_or_logon_autostart_execution
  - mitre/attack/linker/privilege_escalation/boot_or_logon_autostart_execution
  name: Boot or Logon Autostart Execution
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Boot or Logon Autostart Execution (`T1547`)

Adversaries may configure system settings to automatically execute a program during system boot or logon to maintain persistence or gain higher-level privileges on compromised systems. Operating systems may have mechanisms for automatically running a program on system boot or account logon.[^fn3][^fn2][^fn4][^fn1][^fn5] These mechanisms may include automatically executing programs that are placed in specially designated directories or are referenced by repositories that store configuration information, such as the Windows Registry. An adversary may achieve the same goal by modifying or extending features of the kernel.

Since some boot or logon autostart programs run with higher privileges, an adversary may leverage these to elevate privileges.


# Platform(s)

- Linux
- macOS
- Windows
- Network Devices

# Sub-Technique(s)

- [[../Techniques/Active Setup (T1547.014)|Active Setup]]
- [[../Techniques/Print Processors (T1547.012)|Print Processors]]
- [[../Techniques/Port Monitors (T1547.010)|Port Monitors]]
- [[../Techniques/Shortcut Modification (T1547.009)|Shortcut Modification]]
- [[../Techniques/Security Support Provider (T1547.005)|Security Support Provider]]
- [[../Techniques/Time Providers (T1547.003)|Time Providers]]
- [[../Techniques/Winlogon Helper DLL (T1547.004)|Winlogon Helper DLL]]
- [[../Techniques/Login Items (T1547.015)|Login Items]]
- [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]
- [[../Techniques/Kernel Modules and Extensions (T1547.006)|Kernel Modules and Extensions]]
- [[../Techniques/Authentication Package (T1547.002)|Authentication Package]]
- [[../Techniques/XDG Autostart Entries (T1547.013)|XDG Autostart Entries]]
- [[../Techniques/Re-opened Applications (T1547.007)|Re-opened Applications]]
- [[../Techniques/LSASS Driver (T1547.008)|LSASS Driver]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547](https://attack.mitre.org/techniques/T1547)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Langendorf, S. (2013, September 24). Windows Registry Persistence, Part 2: The Run Keys and Search-Order. Retrieved November 17, 2024.](https://web.archive.org/web/20160214140250/http://blog.cylance.com/windows-registry-persistence-part-2-the-run-keys-and-search-order)
[^fn2]: [Microsoft. (n.d.). Authentication Packages. Retrieved March 1, 2017.](https://msdn.microsoft.com/library/windows/desktop/aa374733.aspx)
[^fn3]: [Microsoft. (n.d.). Run and RunOnce Registry Keys. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/setupapi/run-and-runonce-registry-keys)
[^fn4]: [Microsoft. (n.d.). Time Provider. Retrieved March 26, 2018.](https://msdn.microsoft.com/library/windows/desktop/ms725475.aspx)
[^fn5]: [Pomerantz, O., Salzman, P.. (2003, April 4). The Linux Kernel Module Programming Guide. Retrieved April 6, 2018.](https://www.tldp.org/LDP/lkmpg/2.4/lkmpg.pdf)