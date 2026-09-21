---
tags:
  - mitre/attack/tool
---

# SILENTTRINITY (`S0692`)

[SILENTTRINITY](https://attack.mitre.org/software/S0692) is an open source remote administration and post-exploitation framework primarily written in Python that includes stagers written in Powershell, C, and Boo. [SILENTTRINITY](https://attack.mitre.org/software/S0692) was used in a 2019 campaign against Croatian government agencies by unidentified cyber actors.[^fn3][^fn2]



# Platform(s)

- Windows

# Techniques Used

## Group Policy Preferences

[SILENTTRINITY](https://attack.mitre.org/software/S0692) has a module that can extract cached GPP passwords.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo) 

- *Technique:* [[../Techniques/Group Policy Preferences (T1552.006)|Group Policy Preferences]]

## Reflective Code Loading

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can run a .NET executable within the memory of a sacrificial process by loading the CLR.[\[Github_SILENTTRINITY\]](https://github.com/byt3bl33d3r/SILENTTRINITY)  

- *Technique:* [[../Techniques/Reflective Code Loading (T1620)|Reflective Code Loading]]

## Domain Groups

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use `System.DirectoryServices` namespace to retrieve domain group information.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## Ingress Tool Transfer

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can load additional files and tools, including [Mimikatz](https://attack.mitre.org/software/S0002).[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Change Default File Association

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can conduct an image hijack of an `.msc` file extension as part of its UAC bypass process.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Change Default File Association (T1546.001)|Change Default File Association]]

## Clipboard Data

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can monitor Clipboard text and can use `System.Windows.Forms.Clipboard.GetText()` to collect data from the clipboard.[\[Github_SILENTTRINITY\]](https://github.com/byt3bl33d3r/SILENTTRINITY)  

- *Technique:* [[../Techniques/Clipboard Data (T1115)|Clipboard Data]]

## Indicator Removal

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can remove artifacts from the compromised host, including created Registry keys.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

## LSASS Memory

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can create a memory dump of LSASS via the `MiniDumpWriteDump Win32` API call.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Network Share Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can enumerate shares on a compromised host.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Network Share Discovery (T1135)|Network Share Discovery]]

## Hidden Window

[SILENTTRINITY](https://attack.mitre.org/software/S0692) has the ability to set its window state to hidden.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]

## Windows Service

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can establish persistence by creating a new service.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Windows Service (T1543.003)|Windows Service]]

## Local Groups

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can obtain a list of local groups and members.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Local Groups (T1069.001)|Local Groups]]

## Disable or Modify Tools

[SILENTTRINITY](https://attack.mitre.org/software/S0692)'s `amsiPatch.py` module can disable Antimalware Scan Interface (AMSI) functions.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

## Screen Capture

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can take a screenshot of the current desktop.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Windows Management Instrumentation

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use WMI for lateral movement.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Process Injection

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can inject shellcode directly into Excel.exe or a specific process.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Modify Registry

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can modify registry keys, including to enable or disable Remote Desktop Protocol (RDP).[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## System Time Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can collect start time information from a compromised host.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/System Time Discovery (T1124)|System Time Discovery]]

## Windows Management Instrumentation Event Subscription

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can create a WMI Event to execute a payload for persistence.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Windows Management Instrumentation Event Subscription (T1546.003)|Windows Management Instrumentation Event Subscription]]

## Token Impersonation/Theft

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can find a process owned by a specific user and impersonate the associated token.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Token Impersonation_Theft (T1134.001)|Token Impersonation/Theft]]

## Modify Authentication Process

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can create a backdoor in KeePass using a malicious config file and in TortoiseSVN using a registry hook.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

## Query Registry

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use the `GetRegValue` function to check Registry keys within `HKCU\Software\Policies\Microsoft\Windows\Installer\AlwaysInstallElevated` and `HKLM\Software\Policies\Microsoft\Windows\Installer\AlwaysInstallElevated`. It also contains additional modules that can check software AutoRun values and use the Win32 namespace to get values from HKCU, HKLM, HKCR, and HKCC hives.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Query Registry (T1012)|Query Registry]]

## Downgrade Attack

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can downgrade NTLM to capture NTLM hashes.[\[Github_SILENTTRINITY\]](https://github.com/byt3bl33d3r/SILENTTRINITY) 

- *Technique:* [[../Techniques/Downgrade Attack (T1689)|Downgrade Attack]]

## Domain Account

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use `System.Security.AccessControl` namespaces to retrieve domain user information.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)  

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Remote System Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can enumerate and collect the properties of domain computers.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## Prevent Command History Logging

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can bypass ScriptBlock logging to execute unmanaged PowerShell code from memory.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Prevent Command History Logging (T1690)|Prevent Command History Logging]]

## File Deletion

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can remove files from the compromised host.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/File Deletion (T1070.004)|File Deletion]]

## Make and Impersonate Token

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can make tokens from known credentials.[\[Github_SILENTTRINITY\]](https://github.com/byt3bl33d3r/SILENTTRINITY) 

- *Technique:* [[../Techniques/Make and Impersonate Token (T1134.003)|Make and Impersonate Token]]

## Python

[SILENTTRINITY](https://attack.mitre.org/software/S0692) is written in Python and can use multiple Python scripts for execution on targeted systems.[\[GitHub SILENTTRINITY March 2022\]](https://github.com/byt3bl33d3r/SILENTTRINITY)[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Python (T1059.006)|Python]]

## Network Service Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can scan for open ports on a compromised machine.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## PowerShell

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use PowerShell to execute commands.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Credentials from Web Browsers

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can collect clear text web credentials for Internet Explorer/Edge.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## Native API

[SILENTTRINITY](https://attack.mitre.org/software/S0692) has the ability to leverage API including `GetProcAddress` and `LoadLibrary`.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Kerberoasting

[SILENTTRINITY](https://attack.mitre.org/software/S0692) contains a module to conduct Kerberoasting.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

## Component Object Model Hijacking

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can add a CLSID key for payload execution through `Registry.CurrentUser.CreateSubKey("Software\\Classes\\CLSID\\{" + clsid + "}\\InProcServer32")`.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Component Object Model Hijacking (T1546.015)|Component Object Model Hijacking]]

## Exfiltration Over C2 Channel

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can transfer files from an infected host to the C2 server.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## Windows Credential Manager

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can gather Windows Vault credentials.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo) 

- *Technique:* [[../Techniques/Windows Credential Manager (T1555.004)|Windows Credential Manager]]

## Distributed Component Object Model

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use `System` namespace methods to execute lateral movement using DCOM.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Distributed Component Object Model (T1021.003)|Distributed Component Object Model]]

## File and Directory Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) has several modules, such as `ls.py`, `pwd.py`, and `recentFiles.py`, to enumerate directories and files.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo) 

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Local Storage Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can collect information related to a compromised host, including a list of drives.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Local Storage Discovery (T1680)|Local Storage Discovery]]

## Bypass User Account Control

[SILENTTRINITY](https://attack.mitre.org/software/S0692) contains a number of modules that can bypass UAC, including through Window's Device Manager, Manage Optional Features, and an image hijack on the `.msc` file extension.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)   

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Component Object Model

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can insert malicious shellcode into Excel.exe using a `Microsoft.Office.Interop` object.[\[Github_SILENTTRINITY\]](https://github.com/byt3bl33d3r/SILENTTRINITY) 

- *Technique:* [[../Techniques/Component Object Model (T1559.001)|Component Object Model]]

## Windows Command Shell

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can use `cmd.exe` to enable lateral movement using DCOM.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Application Window Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can enumerate the active Window during keylogging through execution of `GetActiveWindowTitle`.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Application Window Discovery (T1010)|Application Window Discovery]]

## Windows Remote Management

[SILENTTRINITY](https://attack.mitre.org/software/S0692) tracks `TrustedHosts` and can move laterally to these targets via WinRM.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Windows Remote Management (T1021.006)|Windows Remote Management]]

## Registry Run Keys / Startup Folder

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can establish a LNK file in the startup folder for persistence.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## Process Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can enumerate processes, including properties to determine if they have the Common Language Runtime (CLR) loaded.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## GUI Input Capture

[SILENTTRINITY](https://attack.mitre.org/software/S0692)'s `credphisher.py` module can prompt a current user for their credentials.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/GUI Input Capture (T1056.002)|GUI Input Capture]]

## Keylogging

[SILENTTRINITY](https://attack.mitre.org/software/S0692) has a keylogging capability.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## System Owner/User Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can gather a list of logged on users.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo) 

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Security Software Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can determine if an anti-virus product is installed through the resolution of the service's virtual SID.[\[Security Affairs SILENTTRINITY July 2019\]](https://securityaffairs.co/wordpress/88021/apt/croatia-government-silenttrinity-malware.html)

- *Technique:* [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]

## System Information Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can collect information related to a compromised host, including OS version.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## System Service Discovery

[SILENTTRINITY](https://attack.mitre.org/software/S0692) can search for modifiable services that could be used for privilege escalation.[\[GitHub SILENTTRINITY Modules July 2019\]](https://github.com/byt3bl33d3r/SILENTTRINITY/tree/master/silenttrinity/core/teamserver/modules/boo)

- *Technique:* [[../Techniques/System Service Discovery (T1007)|System Service Discovery]]


# External References(s)

- [S0692](https://attack.mitre.org/software/S0692)

[^fn2]: [Paganini, P. (2019, July 7). Croatia government agencies targeted with news SilentTrinity malware. Retrieved March 23, 2022.](https://securityaffairs.co/wordpress/88021/apt/croatia-government-silenttrinity-malware.html)
[^fn3]: [Salvati, M (2019, August 6). SILENTTRINITY. Retrieved March 23, 2022.](https://github.com/byt3bl33d3r/SILENTTRINITY)