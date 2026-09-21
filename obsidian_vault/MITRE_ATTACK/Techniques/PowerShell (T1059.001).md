---
mitre_data:
  id: T1059.001
  linker_tags:
  - mitre/attack/linker/execution/powershell
  name: PowerShell
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# PowerShell (`T1059.001`)

Adversaries may abuse PowerShell commands and scripts for execution. PowerShell is a powerful interactive command-line interface and scripting environment included in the Windows operating system.[^fn7] Adversaries can use PowerShell to perform a number of actions, including discovery of information and execution of code. Examples include the <code>Start-Process</code> cmdlet which can be used to run an executable and the <code>Invoke-Command</code> cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use PowerShell to connect to remote systems).

PowerShell may also be used to download and run executables from the Internet, which can be executed from disk or in memory without touching disk.

A number of PowerShell-based offensive testing tools are available, including [Empire](https://attack.mitre.org/software/S0363),  [PowerSploit](https://attack.mitre.org/software/S0194), [PoshC2](https://attack.mitre.org/software/S0378), and PSAttack.[^fn4]

PowerShell commands/scripts can also be executed without directly invoking the <code>powershell.exe</code> binary through interfaces to PowerShell's underlying <code>System.Management.Automation</code> assembly DLL exposed through the .NET framework and Windows Common Language Interface (CLI).[^fn8][^fn2][^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/Empire|Empire]]
- [[../Tools/ConnectWise|ConnectWise]]
- [[../Tools/Donut|Donut]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.001](https://attack.mitre.org/techniques/T1059/001)
- [Dunwoody, M. (2016, February 11). GREATER VISIBILITY THROUGH POWERSHELL LOGGING. Retrieved February 16, 2016.](https://www.fireeye.com/blog/threat-research/2016/02/greater_visibilityt.html)
- [Hastings, M. (2014, July 16). Investigating PowerShell Attacks. Retrieved December 1, 2021.](https://powershellmagazine.com/2014/07/16/investigating-powershell-attacks/)
- [Malware Archaeology. (2016, June). WINDOWS POWERSHELL LOGGING CHEAT SHEET - Win 7/Win 2008 or later. Retrieved June 24, 2016.](http://www.malwarearchaeology.com/s/Windows-PowerShell-Logging-Cheat-Sheet-ver-June-2016-v2.pdf)

[^fn1]: [Babinec, K. (2014, April 28). Executing PowerShell scripts from C#. Retrieved April 22, 2019.](https://blogs.msdn.microsoft.com/kebab/2014/04/28/executing-powershell-scripts-from-c/)
[^fn2]: [Christensen, L.. (2015, December 28). The Evolution of Offensive PowerShell Invocation. Retrieved December 8, 2018.](https://web.archive.org/web/20190508170150/https://silentbreaksecurity.com/powershell-jobs-without-powershell-exe/)
[^fn4]: [Haight, J. (2016, April 21). PS>Attack. Retrieved September 27, 2024.](https://github.com/Exploit-install/PSAttack-1)
[^fn7]: [Microsoft. (n.d.). Windows PowerShell Scripting. Retrieved April 28, 2016.](https://technet.microsoft.com/en-us/scriptcenter/dd742419.aspx)
[^fn8]: [Warner, J.. (2015, January 6). Inexorable PowerShell – A Red Teamer’s Tale of Overcoming Simple AppLocker Policies. Retrieved December 8, 2018.](https://web.archive.org/web/20160327101330/http://www.sixdub.net/?p=367)