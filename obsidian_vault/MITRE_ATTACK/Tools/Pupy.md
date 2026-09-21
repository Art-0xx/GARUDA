---
tags:
  - mitre/attack/tool
---

# Pupy (`S0192`)

[Pupy](https://attack.mitre.org/software/S0192) is an open source, cross-platform (Windows, Linux, OSX, Android) remote administration and post-exploitation tool. [^fn1] It is written in Python and can be generated as a payload in several different ways (Windows exe, Python file, PowerShell oneliner/file, Linux elf, APK, Rubber Ducky, etc.). [^fn1] [Pupy](https://attack.mitre.org/software/S0192) is publicly available on GitHub. [^fn1]



# Platform(s)

- Linux
- Windows
- macOS
- Android

# Techniques Used

## Service Execution

[Pupy](https://attack.mitre.org/software/S0192) uses [PsExec](https://attack.mitre.org/software/S0029) to execute a payload or commands on a remote host.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Network Service Discovery

[Pupy](https://attack.mitre.org/software/S0192) has a built-in module for port scanning.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Screen Capture

[Pupy](https://attack.mitre.org/software/S0192) can drop a mouse-logger that will take small screenshots around at each click and then send back to the server.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Credentials In Files

[Pupy](https://attack.mitre.org/software/S0192) can use Lazagne for harvesting credentials.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Ingress Tool Transfer

[Pupy](https://attack.mitre.org/software/S0192) can upload and download to/from a victim machine.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Network Share Discovery

[Pupy](https://attack.mitre.org/software/S0192) can list local and remote shared drives and folders over SMB.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Network Share Discovery (T1135)|Network Share Discovery]]

## Asymmetric Cryptography

[Pupy](https://attack.mitre.org/software/S0192)'s default encryption for its C2 communication channel is SSL, but it also has transport options for RSA and AES.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Bypass User Account Control

[Pupy](https://attack.mitre.org/software/S0192) can bypass Windows UAC through either DLL hijacking, eventvwr, or appPaths.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## PowerShell

[Pupy](https://attack.mitre.org/software/S0192) has a module for loading and executing PowerShell scripts.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## System Owner/User Discovery

[Pupy](https://attack.mitre.org/software/S0192) can enumerate local information for Linux hosts and find currently logged on users for Windows hosts.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Domain Account

[Pupy](https://attack.mitre.org/software/S0192) can user PowerView to execute “net user” commands and create domain accounts.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Domain Account (T1136.002)|Domain Account]]

## Exfiltration Over C2 Channel

[Pupy](https://attack.mitre.org/software/S0192) can send screenshots files, keylogger data, files, and recorded audio back to the C2 server.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## Credentials from Web Browsers

[Pupy](https://attack.mitre.org/software/S0192) can use Lazagne for harvesting credentials.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## Audio Capture

[Pupy](https://attack.mitre.org/software/S0192) can record sound with the microphone.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Audio Capture (T1123)|Audio Capture]]

## Dynamic-link Library Injection

[Pupy](https://attack.mitre.org/software/S0192) can migrate into another process using reflective DLL injection.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Dynamic-link Library Injection (T1055.001)|Dynamic-link Library Injection]]

## System Network Configuration Discovery

[Pupy](https://attack.mitre.org/software/S0192) has built in commands to identify a host’s IP address and find out other network configuration settings by viewing connected sessions.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Local Email Collection

[Pupy](https://attack.mitre.org/software/S0192) can interact with a victim’s Outlook session and look through folders and emails.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Local Email Collection (T1114.001)|Local Email Collection]]

## Systemd Service

[Pupy](https://attack.mitre.org/software/S0192) can be used to establish persistence using a systemd service.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Systemd Service (T1543.002)|Systemd Service]]

## Local Account

[Pupy](https://attack.mitre.org/software/S0192) can user PowerView to execute “net user” commands and create local system accounts.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Local Account (T1136.001)|Local Account]]

## XDG Autostart Entries

[Pupy](https://attack.mitre.org/software/S0192) can use an XDG Autostart to establish persistence.[\[Red Canary Netwire Linux 2022\]](https://redcanary.com/blog/netwire-remote-access-trojan-on-linux/)

- *Technique:* [[../Techniques/XDG Autostart Entries (T1547.013)|XDG Autostart Entries]]

## File and Directory Discovery

[Pupy](https://attack.mitre.org/software/S0192) can walk through directories and recursively search for strings in files.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## System Information Discovery

[Pupy](https://attack.mitre.org/software/S0192) can grab a system’s information including the OS version, architecture, etc.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## LSASS Memory

[Pupy](https://attack.mitre.org/software/S0192) can execute Lazagne as well as [Mimikatz](https://attack.mitre.org/software/S0002) using PowerShell.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Keylogging

[Pupy](https://attack.mitre.org/software/S0192) uses a keylogger to capture keystrokes it then sends back to the server after it is stopped.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Web Protocols

[Pupy](https://attack.mitre.org/software/S0192) can communicate over HTTP for C2.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## System Checks

[Pupy](https://attack.mitre.org/software/S0192) has a module that checks a number of indicators on the system to determine if its running on a virtual machine.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/System Checks (T1497.001)|System Checks]]

## Remote Desktop Protocol

[Pupy](https://attack.mitre.org/software/S0192) can enable/disable RDP connection and can start a remote desktop session using a browser web socket client.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Remote Desktop Protocol (T1021.001)|Remote Desktop Protocol]]

## Pass the Ticket

[Pupy](https://attack.mitre.org/software/S0192) can also perform pass-the-ticket.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Pass the Ticket (T1550.003)|Pass the Ticket]]

## Name Resolution Poisoning and SMB Relay

[Pupy](https://attack.mitre.org/software/S0192) can sniff plaintext network credentials and use NBNS Spoofing to poison name services.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Name Resolution Poisoning and SMB Relay (T1557.001)|Name Resolution Poisoning and SMB Relay]]

## Local Account

[Pupy](https://attack.mitre.org/software/S0192) uses PowerView and Pywerview to perform discovery commands such as net user, net group, net local group, etc.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Local Account (T1087.001)|Local Account]]

## Python

[Pupy](https://attack.mitre.org/software/S0192) can use an add on feature when creating payloads that allows you to create custom Python scripts (“scriptlets”) to perform tasks offline (without requiring a session) such as sandbox detection, adding persistence, etc.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Python (T1059.006)|Python]]

## Video Capture

[Pupy](https://attack.mitre.org/software/S0192) can access a connected webcam and capture pictures.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]

## Clear Windows Event Logs

[Pupy](https://attack.mitre.org/software/S0192) has a module to clear event logs with PowerShell.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Clear Windows Event Logs (T1685.005)|Clear Windows Event Logs]]

## Token Impersonation/Theft

[Pupy](https://attack.mitre.org/software/S0192) can obtain a list of SIDs and provide the option for selecting process tokens to impersonate.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Token Impersonation_Theft (T1134.001)|Token Impersonation/Theft]]

## Archive via Utility

[Pupy](https://attack.mitre.org/software/S0192) can compress data with Zip before sending it over C2.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Archive via Utility (T1560.001)|Archive via Utility]]

## Registry Run Keys / Startup Folder

[Pupy](https://attack.mitre.org/software/S0192) adds itself to the startup folder or adds itself to the Registry key <code>SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code> for persistence.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## Cached Domain Credentials

[Pupy](https://attack.mitre.org/software/S0192) can use Lazagne for harvesting credentials.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Cached Domain Credentials (T1003.005)|Cached Domain Credentials]]

## LSA Secrets

[Pupy](https://attack.mitre.org/software/S0192) can use Lazagne for harvesting credentials.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]

## System Network Connections Discovery

[Pupy](https://attack.mitre.org/software/S0192) has a built-in utility command for <code>netstat</code>, can do net session through PowerView, and has an interactive shell which can be used to discover additional information.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Credentials from Password Stores

[Pupy](https://attack.mitre.org/software/S0192) can use Lazagne for harvesting credentials.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

## Process Discovery

[Pupy](https://attack.mitre.org/software/S0192) can list the running processes and get the process ID and parent process’s ID.[\[GitHub Pupy\]](https://github.com/n1nj4sec/pupy)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]


# External References(s)

- [S0192](https://attack.mitre.org/software/S0192)

[^fn1]: [Nicolas Verdier. (n.d.). Retrieved January 29, 2018.](https://github.com/n1nj4sec/pupy)