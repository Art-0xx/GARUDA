---
mitre_data:
  id: T1047
  linker_tags:
  - mitre/attack/linker/execution/windows_management_instrumentation
  name: Windows Management Instrumentation
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Windows Management Instrumentation (`T1047`)

Adversaries may abuse Windows Management Instrumentation (WMI) to execute malicious commands and payloads. WMI is designed for programmers and is the infrastructure for management data and operations on Windows systems.[^fn4] WMI is an administration feature that provides a uniform environment to access Windows system components.

The WMI service enables both local and remote access, though the latter is facilitated by [Remote Services](https://attack.mitre.org/techniques/T1021) such as [Distributed Component Object Model](https://attack.mitre.org/techniques/T1021/003) and [Windows Remote Management](https://attack.mitre.org/techniques/T1021/006).[^fn4] Remote WMI over DCOM operates using port 135, whereas WMI over WinRM operates over port 5985 when using HTTP and 5986 for HTTPS.[^fn4] [^fn2]

An adversary can use WMI to interact with local and remote systems and use it as a means to execute various behaviors, such as gathering information for [Discovery](https://attack.mitre.org/tactics/TA0007) as well as [Execution](https://attack.mitre.org/tactics/TA0002) of commands and payloads.[^fn2] For example, `wmic.exe` can be abused by an adversary to delete shadow copies with the command `wmic.exe Shadowcopy Delete` (i.e., [Inhibit System Recovery](https://attack.mitre.org/techniques/T1490)).[^fn3]

**Note:** `wmic.exe` is deprecated as of January of 2024, with the WMIC feature being “disabled by default” on Windows 11+. WMIC will be removed from subsequent Windows releases and replaced by [PowerShell](https://attack.mitre.org/techniques/T1059/001) as the primary WMI interface.[^fn5] In addition to PowerShell and tools like `wbemtool.exe`, COM APIs can also be used to programmatically interact with WMI via C++, .NET, VBScript, etc.[^fn5]


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Impacket|Impacket]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1047](https://attack.mitre.org/techniques/T1047)
- [Ballenthin, W., et al. (2015). Windows Management Instrumentation (WMI) Offense, Defense, and Forensics. Retrieved March 30, 2016.](https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf)

[^fn2]: [Mandiant. (n.d.). Retrieved February 13, 2024.](https://www.mandiant.com/resources/reports)
[^fn3]: [Microsoft. (2022, June 13). BlackCat. Retrieved February 13, 2024.](https://www.microsoft.com/en-us/security/blog/2022/06/13/the-many-lives-of-blackcat-ransomware/)
[^fn4]: [Microsoft. (2023, March 7). Retrieved February 13, 2024.](https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page?redirectedfrom=MSDN)
[^fn5]: [Microsoft. (2024, January 26). WMIC Deprecation. Retrieved February 13, 2024.](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/wmi-command-line-wmic-utility-deprecation-next-steps/ba-p/4039242)

# Vault Links

 - [[LOLBins/OSBinaries/wbemtest.exe.md|LOLBins/OSBinaries/wbemtest.exe]]