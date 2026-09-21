---
tags:
  - mitre/attack/tool
---

# Koadic (`S0250`)

[Koadic](https://attack.mitre.org/software/S0250) is a Windows post-exploitation framework and penetration testing tool that is publicly available on GitHub. [Koadic](https://attack.mitre.org/software/S0250) has several options for staging payloads and creating implants, and performs most of its operations using Windows Script Host.[^fn4][^fn3][^fn2]



# Platform(s)

- Windows

# Techniques Used

## System Network Configuration Discovery

[Koadic](https://attack.mitre.org/software/S0250) can retrieve the contents of the IP routing table as well as information about the Windows domain.[\[Github Koadic\]](https://github.com/offsecginger/koadic)[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## System Information Discovery

[Koadic](https://attack.mitre.org/software/S0250) can obtain the OS version and build, computer name, and processor architecture from a compromised host.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Visual Basic

[Koadic](https://attack.mitre.org/software/S0250) performs most of its operations using Windows Script Host (VBScript) and runs arbitrary shellcode .[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Visual Basic (T1059.005)|Visual Basic]]

## Mshta

[Koadic](https://attack.mitre.org/software/S0250) can use mshta to serve additional payloads and to help schedule tasks for persistence.[\[Github Koadic\]](https://github.com/offsecginger/koadic)[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf) 

- *Technique:* [[../Techniques/Mshta (T1218.005)|Mshta]]

## Dynamic-link Library Injection

[Koadic](https://attack.mitre.org/software/S0250) can perform process injection by using a reflective DLL.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Dynamic-link Library Injection (T1055.001)|Dynamic-link Library Injection]]

## Regsvr32

[Koadic](https://attack.mitre.org/software/S0250) can use Regsvr32 to execute additional payloads.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Regsvr32 (T1218.010)|Regsvr32]]

## System Owner/User Discovery

[Koadic](https://attack.mitre.org/software/S0250) can identify logged in users across the domain and views user sessions.[\[Github Koadic\]](https://github.com/offsecginger/koadic)[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Hidden Window

[Koadic](https://attack.mitre.org/software/S0250) has used the command <code>Powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden</code> to hide its window.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]

## Security Account Manager

[Koadic](https://attack.mitre.org/software/S0250) can gather hashed passwords by dumping SAM/SECURITY hive.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Security Account Manager (T1003.002)|Security Account Manager]]

## Ingress Tool Transfer

[Koadic](https://attack.mitre.org/software/S0250) can download additional files and tools.[\[Github Koadic\]](https://github.com/offsecginger/koadic)[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Web Protocols

[Koadic](https://attack.mitre.org/software/S0250) has used HTTP for C2 communications.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Windows Management Instrumentation

[Koadic](https://attack.mitre.org/software/S0250) can use WMI to execute commands.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## PowerShell

[Koadic](https://attack.mitre.org/software/S0250) has used PowerShell to establish persistence.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf) 

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Clipboard Data

[Koadic](https://attack.mitre.org/software/S0250) can retrieve the current content of the user clipboard.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Clipboard Data (T1115)|Clipboard Data]]

## Bypass User Account Control

[Koadic](https://attack.mitre.org/software/S0250) has 2 methods for elevating integrity. It can bypass UAC through `eventvwr.exe` and `sdclt.exe`.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Network Service Discovery

[Koadic](https://attack.mitre.org/software/S0250) can scan for open TCP ports on the target network.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Remote Desktop Protocol

[Koadic](https://attack.mitre.org/software/S0250) can enable remote desktop on the victim's machine.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Remote Desktop Protocol (T1021.001)|Remote Desktop Protocol]]

## Windows Command Shell

[Koadic](https://attack.mitre.org/software/S0250) can open an interactive command-shell to perform command line functions on victim machines. [Koadic](https://attack.mitre.org/software/S0250) performs most of its operations using Windows Script Host (Jscript) and to run arbitrary shellcode.[\[Github Koadic\]](https://github.com/offsecginger/koadic)[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## File and Directory Discovery

[Koadic](https://attack.mitre.org/software/S0250) can obtain a list of directories.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Registry Run Keys / Startup Folder

[Koadic](https://attack.mitre.org/software/S0250) has added persistence to the `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run` Registry key.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## NTDS

[Koadic](https://attack.mitre.org/software/S0250) can gather hashed passwords by gathering domain controller hashes from NTDS.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/NTDS (T1003.003)|NTDS]]

## Service Execution

[Koadic](https://attack.mitre.org/software/S0250) can run a command on another machine using [PsExec](https://attack.mitre.org/software/S0029).[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Data from Local System

[Koadic](https://attack.mitre.org/software/S0250) can download files off the target system to send back to the server.[\[Github Koadic\]](https://github.com/offsecginger/koadic)[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Asymmetric Cryptography

[Koadic](https://attack.mitre.org/software/S0250) can use SSL and TLS for communications.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Network Share Discovery

[Koadic](https://attack.mitre.org/software/S0250) can scan local network for open SMB.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Network Share Discovery (T1135)|Network Share Discovery]]

## Rundll32

[Koadic](https://attack.mitre.org/software/S0250) can use Rundll32 to execute additional payloads.[\[Github Koadic\]](https://github.com/offsecginger/koadic)

- *Technique:* [[../Techniques/Rundll32 (T1218.011)|Rundll32]]

## Scheduled Task

[Koadic](https://attack.mitre.org/software/S0250) has used scheduled tasks to add persistence.[\[MalwareBytes LazyScripter Feb 2021\]](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf) 

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]


# External References(s)

- [S0250](https://attack.mitre.org/software/S0250)

[^fn2]: [Jazi, H. (2021, February). LazyScripter: From Empire to double RAT. Retrieved November 17, 2024.](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)
[^fn3]: [Lee, B., Falcone, R. (2018, June 06). Sofacy Group’s Parallel Attacks. Retrieved June 18, 2018.](https://researchcenter.paloaltonetworks.com/2018/06/unit42-sofacy-groups-parallel-attacks/)
[^fn4]: [Magius, J., et al. (2017, July 19). Koadic. Retrieved September 27, 2024.](https://github.com/offsecginger/koadic)