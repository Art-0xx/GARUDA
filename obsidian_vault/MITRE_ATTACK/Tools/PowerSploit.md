---
tags:
  - mitre/attack/tool
---

# PowerSploit (`S0194`)

[PowerSploit](https://attack.mitre.org/software/S0194) is an open source, offensive security framework comprised of [PowerShell](https://attack.mitre.org/techniques/T1059/001) modules and scripts that perform a wide range of tasks related to penetration testing such as code execution, persistence, bypassing anti-virus, recon, and exfiltration. [^fn2] [^fn1] [^fn3]



# Platform(s)

- Windows

# Techniques Used

## Path Interception by PATH Environment Variable

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Privesc-PowerUp modules that can discover and exploit path interception opportunities in the PATH environment variable.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Path Interception by PATH Environment Variable (T1574.007)|Path Interception by PATH Environment Variable]]

## Keylogging

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Get-Keystrokes</code> Exfiltration module can log keystrokes.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Reflective Code Loading

[PowerSploit](https://attack.mitre.org/software/S0194) reflectively loads a Windows PE file into a process.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Reflective Code Loading (T1620)|Reflective Code Loading]]

## Credentials in Registry

[PowerSploit](https://attack.mitre.org/software/S0194) has several modules that search the Windows Registry for stored credentials: <code>Get-UnattendedInstallFile</code>, <code>Get-Webconfig</code>, <code>Get-ApplicationHost</code>, <code>Get-SiteListPassword</code>, <code>Get-CachedGPPPassword</code>, and <code>Get-RegistryAutoLogon</code>.[\[Pentestlab Stored Credentials\]](https://pentestlab.blog/2017/04/19/stored-credentials/)

- *Technique:* [[../Techniques/Credentials in Registry (T1552.002)|Credentials in Registry]]

## Indicator Removal from Tools

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Find-AVSignature</code> AntivirusBypass module can be used to locate single byte anti-virus signatures.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Indicator Removal from Tools (T1027.005)|Indicator Removal from Tools]]

## Audio Capture

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Get-MicrophoneAudio</code> Exfiltration module can record system microphone audio.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Audio Capture (T1123)|Audio Capture]]

## Windows Management Instrumentation

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Invoke-WmiCommand</code> CodeExecution module uses WMI to execute and retrieve the output from a [PowerShell](https://attack.mitre.org/techniques/T1086) payload.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Path Interception by Unquoted Path

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Privesc-PowerUp modules that can discover and exploit unquoted path vulnerabilities.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Path Interception by Unquoted Path (T1574.009)|Path Interception by Unquoted Path]]

## Query Registry

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Privesc-PowerUp modules that can query Registry keys for potential opportunities.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Query Registry (T1012)|Query Registry]]

## Data from Local System

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Exfiltration modules that can access data from local files, volumes, and processes.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Group Policy Preferences

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Exfiltration modules that can harvest credentials from Group Policy Preferences.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Group Policy Preferences (T1552.006)|Group Policy Preferences]]

## Dynamic-link Library Injection

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of CodeExecution modules that inject code (DLL, shellcode) into a process.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Dynamic-link Library Injection (T1055.001)|Dynamic-link Library Injection]]

## Command Obfuscation

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of ScriptModification modules that compress and encode scripts and payloads.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Command Obfuscation (T1027.010)|Command Obfuscation]]

## Access Token Manipulation

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Invoke-TokenManipulation</code> Exfiltration module can be used to manipulate tokens.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

## Windows Service

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Privesc-PowerUp modules that can discover and replace/modify service binaries, paths, and configs.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Windows Service (T1543.003)|Windows Service]]

## Screen Capture

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Get-TimedScreenshot</code> Exfiltration module can take screenshots at regular intervals.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Registry Run Keys / Startup Folder

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>New-UserPersistenceOption</code> Persistence argument can be used to establish via the <code>HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run</code> Registry key.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## Scheduled Task

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>New-UserPersistenceOption</code> Persistence argument can be used to establish via a [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053).[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]

## DLL

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Privesc-PowerUp modules that can discover and exploit DLL hijacking opportunities in services and processes.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/DLL (T1574.001)|DLL]]

## Path Interception by Search Order Hijacking

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Privesc-PowerUp modules that can discover and exploit search order hijacking vulnerabilities.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Path Interception by Search Order Hijacking (T1574.008)|Path Interception by Search Order Hijacking]]

## Kerberoasting

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Invoke-Kerberoast</code> module can request service tickets and return crackable ticket hashes.[\[PowerSploit Invoke Kerberoast\]](https://powersploit.readthedocs.io/en/latest/Recon/Invoke-Kerberoast/)[\[Harmj0y Kerberoast Nov 2016\]](https://blog.harmj0y.net/powershell/kerberoasting-without-mimikatz/)

- *Technique:* [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

## Local Account

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Get-ProcessTokenGroup</code> Privesc-PowerUp module can enumerate all SIDs associated with its current token.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Local Account (T1087.001)|Local Account]]

## Security Support Provider

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Install-SSP</code> Persistence module can be used to establish by installing a SSP DLL.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Security Support Provider (T1547.005)|Security Support Provider]]

## Process Discovery

[PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Get-ProcessTokenPrivilege</code> Privesc-PowerUp module can enumerate privileges for a given process.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Windows Credential Manager

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Exfiltration modules that can harvest credentials from Windows vault credential objects.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Windows Credential Manager (T1555.004)|Windows Credential Manager]]

## PowerShell

[PowerSploit](https://attack.mitre.org/software/S0194) modules are written in and executed via [PowerShell](https://attack.mitre.org/techniques/T1086).[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Domain Trust Discovery

[PowerSploit](https://attack.mitre.org/software/S0194) has modules such as <code>Get-NetDomainTrust</code> and <code>Get-NetForestTrust</code> to enumerate domain and forest trusts.[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## LSASS Memory

[PowerSploit](https://attack.mitre.org/software/S0194) contains a collection of Exfiltration modules that can harvest credentials using [Mimikatz](https://attack.mitre.org/software/S0002).[\[GitHub PowerSploit May 2012\]](https://github.com/PowerShellMafia/PowerSploit)[\[PowerSploit Documentation\]](http://powersploit.readthedocs.io)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]


# External References(s)

- [S0194](https://attack.mitre.org/software/S0194)

[^fn1]: [Graeber, M. (2014, July 8). PowerSploit. Retrieved February 6, 2018.](http://www.powershellmagazine.com/2014/07/08/powersploit/)
[^fn2]: [PowerShellMafia. (2012, May 26). PowerSploit - A PowerShell Post-Exploitation Framework. Retrieved February 6, 2018.](https://github.com/PowerShellMafia/PowerSploit)
[^fn3]: [PowerSploit. (n.d.). PowerSploit. Retrieved February 6, 2018.](http://powersploit.readthedocs.io)