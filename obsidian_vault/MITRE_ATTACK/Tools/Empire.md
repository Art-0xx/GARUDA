---
tags:
  - mitre/attack/tool
---

# Empire (`S0363`)

[Empire](https://attack.mitre.org/software/S0363) is an open-source, cross-platform remote administration and post-exploitation framework that is publicly available on GitHub. While the tool itself is primarily written in Python, the post-exploitation agents are written in pure [PowerShell](https://attack.mitre.org/techniques/T1059/001) for Windows and Python for Linux/macOS. [Empire](https://attack.mitre.org/software/S0363) was one of five tools singled out by a joint report on public hacking tools being widely used by adversaries.[^fn5][^fn3][^fn4]



# Platform(s)

- Linux
- macOS
- Windows

# Techniques Used

## Video Capture

[Empire](https://attack.mitre.org/software/S0363) can capture webcam data on Windows and macOS systems.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]

## Distributed Component Object Model

[Empire](https://attack.mitre.org/software/S0363) can utilize <code>Invoke-DCOM</code> to leverage remote COM execution for lateral movement.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Distributed Component Object Model (T1021.003)|Distributed Component Object Model]]

## Name Resolution Poisoning and SMB Relay

[Empire](https://attack.mitre.org/software/S0363) can use Inveigh to conduct name service poisoning for credential theft and associated relay attacks.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[GitHub Inveigh\]](https://github.com/Kevin-Robertson/Inveigh)

- *Technique:* [[../Techniques/Name Resolution Poisoning and SMB Relay (T1557.001)|Name Resolution Poisoning and SMB Relay]]

## System Network Configuration Discovery

[Empire](https://attack.mitre.org/software/S0363) can acquire network configuration information like DNS servers, public IP, and network proxies used by a host.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## PowerShell

[Empire](https://attack.mitre.org/software/S0363) leverages PowerShell for the majority of its client-side agent tasks. [Empire](https://attack.mitre.org/software/S0363) also contains the ability to conduct PowerShell remoting with the <code>Invoke-PSRemoting</code> module.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Domain Trust Discovery

[Empire](https://attack.mitre.org/software/S0363) has modules for enumerating domain trusts.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Keylogging

[Empire](https://attack.mitre.org/software/S0363) includes keylogging capabilities for Windows, Linux, and macOS systems.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Command Obfuscation

[Empire](https://attack.mitre.org/software/S0363) has the ability to obfuscate commands using <code>Invoke-Obfuscation</code>.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Command Obfuscation (T1027.010)|Command Obfuscation]]

## Local Account

[Empire](https://attack.mitre.org/software/S0363) has a module for creating a local user if permissions allow.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Local Account (T1136.001)|Local Account]]

## Screen Capture

[Empire](https://attack.mitre.org/software/S0363) is capable of capturing screenshots on Windows and macOS systems.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Network Service Discovery

[Empire](https://attack.mitre.org/software/S0363) can perform port scans from an infected host.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Credentials In Files

[Empire](https://attack.mitre.org/software/S0363) can use various modules to search for files containing passwords.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Archive Collected Data

[Empire](https://attack.mitre.org/software/S0363) can ZIP directories on the target system.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Archive Collected Data (T1560)|Archive Collected Data]]

## Group Policy Modification

[Empire](https://attack.mitre.org/software/S0363) can use <code>New-GPOImmediateTask</code> to modify a GPO that will install and execute a malicious [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053).[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Group Policy Modification (T1484.001)|Group Policy Modification]]

## Exfiltration Over C2 Channel

[Empire](https://attack.mitre.org/software/S0363) can send data gathered from a target through the command and control channel.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## System Information Discovery

[Empire](https://attack.mitre.org/software/S0363) can enumerate host system information like OS, architecture, domain name, applied patches, and more.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Clipboard Data

[Empire](https://attack.mitre.org/software/S0363) can harvest clipboard data on both Windows and macOS systems.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Clipboard Data (T1115)|Clipboard Data]]

## Exploitation for Privilege Escalation

[Empire](https://attack.mitre.org/software/S0363) can exploit vulnerabilities such as MS16-032 and MS16-135.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Exploitation for Privilege Escalation (T1068)|Exploitation for Privilege Escalation]]

## Automated Exfiltration

[Empire](https://attack.mitre.org/software/S0363) has the ability to automatically send collected data back to the threat actors' C2.[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/Automated Exfiltration (T1020)|Automated Exfiltration]]

## Accessibility Features

[Empire](https://attack.mitre.org/software/S0363) can leverage WMI debugging to remotely replace binaries like sethc.exe, Utilman.exe, and Magnify.exe with cmd.exe.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Accessibility Features (T1546.008)|Accessibility Features]]

## Automated Collection

[Empire](https://attack.mitre.org/software/S0363) can automatically gather the username, domain name, machine name, and other information from a compromised system.[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]

## Keychain

[Empire](https://attack.mitre.org/software/S0363) uses the command `/usr/bin/security dump-keychain -d` to read the keychain credential.[\[Empire Keychain Decrypt\]](https://github.com/EmpireProject/Empire/blob/08cbd274bef78243d7a8ed6443b8364acd1fc48b/lib/modules/python/collection/osx/keychaindump_decrypt.py)

- *Technique:* [[../Techniques/Keychain (T1555.001)|Keychain]]

## Group Policy Discovery

[Empire](https://attack.mitre.org/software/S0363) includes various modules for enumerating Group Policy.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Group Policy Discovery (T1615)|Group Policy Discovery]]

## Domain Account

[Empire](https://attack.mitre.org/software/S0363) can acquire local and domain user account information.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[SecureWorks August 2019\]](https://www.secureworks.com/blog/lyceum-takes-center-stage-in-middle-east-campaign)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Security Support Provider

[Empire](https://attack.mitre.org/software/S0363) can enumerate Security Support Providers (SSPs) as well as utilize [PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Install-SSP</code> and <code>Invoke-Mimikatz</code> to install malicious SSPs and log authentication events.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Security Support Provider (T1547.005)|Security Support Provider]]

## SSH

[Empire](https://attack.mitre.org/software/S0363) contains modules for executing commands over SSH as well as in-memory VNC agent injection.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/SSH (T1021.004)|SSH]]

## Kerberoasting

[Empire](https://attack.mitre.org/software/S0363) uses [PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Invoke-Kerberoast</code> to request service tickets and return crackable ticket hashes.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

## SID-History Injection

[Empire](https://attack.mitre.org/software/S0363) can add a SID-History to a user if on a domain controller.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/SID-History Injection (T1134.005)|SID-History Injection]]

## Path Interception by Unquoted Path

[Empire](https://attack.mitre.org/software/S0363) contains modules that can discover and exploit unquoted path vulnerabilities.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Path Interception by Unquoted Path (T1574.009)|Path Interception by Unquoted Path]]

## Registry Run Keys / Startup Folder

[Empire](https://attack.mitre.org/software/S0363) can modify the registry run keys <code>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run</code> and <code>HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run</code> for persistence.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## Network Share Discovery

[Empire](https://attack.mitre.org/software/S0363) can find shared drives on the local system.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Network Share Discovery (T1135)|Network Share Discovery]]

## Path Interception by Search Order Hijacking

[Empire](https://attack.mitre.org/software/S0363) contains modules that can discover and exploit search order hijacking vulnerabilities.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Path Interception by Search Order Hijacking (T1574.008)|Path Interception by Search Order Hijacking]]

## Golden Ticket

[Empire](https://attack.mitre.org/software/S0363) can leverage its implementation of [Mimikatz](https://attack.mitre.org/software/S0002) to obtain and use golden tickets.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Golden Ticket (T1558.001)|Golden Ticket]]

## Service Execution

[Empire](https://attack.mitre.org/software/S0363) can use [PsExec](https://attack.mitre.org/software/S0029) to execute a payload on a remote host.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Exfiltration to Code Repository

[Empire](https://attack.mitre.org/software/S0363) can use GitHub for data exfiltration.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Exfiltration to Code Repository (T1567.001)|Exfiltration to Code Repository]]

## File and Directory Discovery

[Empire](https://attack.mitre.org/software/S0363) includes various modules for finding files of interest on hosts and network shares.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Credential API Hooking

[Empire](https://attack.mitre.org/software/S0363) contains some modules that leverage API hooking to carry out tasks, such as netripper.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Credential API Hooking (T1056.004)|Credential API Hooking]]

## Path Interception by PATH Environment Variable

[Empire](https://attack.mitre.org/software/S0363) contains modules that can discover and exploit path interception opportunities in the PATH environment variable.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Path Interception by PATH Environment Variable (T1574.007)|Path Interception by PATH Environment Variable]]

## Native API

[Empire](https://attack.mitre.org/software/S0363) contains a variety of enumeration modules that have an option to use API calls to carry out tasks.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Windows Management Instrumentation

[Empire](https://attack.mitre.org/software/S0363) can use WMI to deliver a payload to a remote host.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire) 

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Process Injection

[Empire](https://attack.mitre.org/software/S0363) contains multiple modules for injecting into processes, such as <code>Invoke-PSInject</code>.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Pass the Hash

[Empire](https://attack.mitre.org/software/S0363) can perform pass the hash attacks.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Pass the Hash (T1550.002)|Pass the Hash]]

## Browser Information Discovery

[Empire](https://attack.mitre.org/software/S0363) has the ability to gather browser data such as bookmarks and visited sites.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Browser Information Discovery (T1217)|Browser Information Discovery]]

## MSBuild

[Empire](https://attack.mitre.org/software/S0363) can use built-in modules to abuse trusted utilities like MSBuild.exe.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)


- *Technique:* [[../Techniques/MSBuild (T1127.001)|MSBuild]]

## Private Keys

[Empire](https://attack.mitre.org/software/S0363) can use modules like <code>Invoke-SessionGopher</code> to extract private key and session information.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Private Keys (T1552.004)|Private Keys]]

## Exfiltration to Cloud Storage

[Empire](https://attack.mitre.org/software/S0363) can use Dropbox for data exfiltration.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Exfiltration to Cloud Storage (T1567.002)|Exfiltration to Cloud Storage]]

## Web Protocols

[Empire](https://attack.mitre.org/software/S0363) can conduct command and control over protocols like HTTP and HTTPS.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Access Token Manipulation

[Empire](https://attack.mitre.org/software/S0363) can use [PowerSploit](https://attack.mitre.org/software/S0194)'s <code>Invoke-TokenManipulation</code> to manipulate access tokens.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

## Network Sniffing

[Empire](https://attack.mitre.org/software/S0363) can be used to conduct packet captures on target hosts.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Network Sniffing (T1040)|Network Sniffing]]

## Local Email Collection

[Empire](https://attack.mitre.org/software/S0363) has the ability to collect emails on a target system.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Local Email Collection (T1114.001)|Local Email Collection]]

## Windows Command Shell

[Empire](https://attack.mitre.org/software/S0363) has modules for executing scripts.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Bidirectional Communication

[Empire](https://attack.mitre.org/software/S0363) can use Dropbox and GitHub for C2.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Bidirectional Communication (T1102.002)|Bidirectional Communication]]

## Credentials from Web Browsers

[Empire](https://attack.mitre.org/software/S0363) can use modules that extract passwords from common web browsers such as Firefox and Chrome.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## Security Software Discovery

[Empire](https://attack.mitre.org/software/S0363) can enumerate antivirus software on the target.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]

## Local Account

[Empire](https://attack.mitre.org/software/S0363) can acquire local and domain user account information.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Local Account (T1087.001)|Local Account]]

## Dylib Hijacking

[Empire](https://attack.mitre.org/software/S0363) has a dylib hijacker module that generates a malicious dylib given the path to a legitimate dylib of a vulnerable application.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Dylib Hijacking (T1574.004)|Dylib Hijacking]]

## System Network Connections Discovery

[Empire](https://attack.mitre.org/software/S0363) can enumerate the current network connections of a host.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Scheduled Task

[Empire](https://attack.mitre.org/software/S0363) has modules to interact with the Windows task scheduler.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]

## LSASS Memory

[Empire](https://attack.mitre.org/software/S0363) contains an implementation of [Mimikatz](https://attack.mitre.org/software/S0002) to gather credentials from memory.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Asymmetric Cryptography

[Empire](https://attack.mitre.org/software/S0363) can use TLS to encrypt its C2 channel.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Create Process with Token

[Empire](https://attack.mitre.org/software/S0363) can use <code>Invoke-RunAs</code> to make tokens.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Create Process with Token (T1134.002)|Create Process with Token]]

## Windows Service

[Empire](https://attack.mitre.org/software/S0363) can utilize built-in modules to modify service binaries and restore them to their original state.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Windows Service (T1543.003)|Windows Service]]

## Command and Scripting Interpreter

[Empire](https://attack.mitre.org/software/S0363) uses a command-line interface to interact with systems.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

## Process Discovery

[Empire](https://attack.mitre.org/software/S0363) can find information about processes running on local and remote systems.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Ingress Tool Transfer

[Empire](https://attack.mitre.org/software/S0363) can upload and download to and from a victim machine.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Timestomp

[Empire](https://attack.mitre.org/software/S0363) can timestomp any files or payloads placed on a target machine to help them blend in.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Timestomp (T1070.006)|Timestomp]]

## Shortcut Modification

[Empire](https://attack.mitre.org/software/S0363) can persist by modifying a .LNK file to include a backdoor.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Shortcut Modification (T1547.009)|Shortcut Modification]]

## DLL

[Empire](https://attack.mitre.org/software/S0363) contains modules that can discover and exploit various DLL hijacking opportunities.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/DLL (T1574.001)|DLL]]

## Domain Account

[Empire](https://attack.mitre.org/software/S0363) has a module for creating a new domain user if permissions allow.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Domain Account (T1136.002)|Domain Account]]

## System Owner/User Discovery

[Empire](https://attack.mitre.org/software/S0363) can enumerate the username on targeted hosts.[\[Talos Frankenstein June 2019\]](https://blog.talosintelligence.com/2019/06/frankenstein-campaign.html)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Bypass User Account Control

[Empire](https://attack.mitre.org/software/S0363) includes various modules to attempt to bypass UAC for escalation of privileges.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Silver Ticket

[Empire](https://attack.mitre.org/software/S0363) can leverage its implementation of [Mimikatz](https://attack.mitre.org/software/S0002) to obtain and use silver tickets.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Silver Ticket (T1558.002)|Silver Ticket]]

## Exploitation of Remote Services

[Empire](https://attack.mitre.org/software/S0363) has a limited number of built-in modules for exploiting remote SMB, JBoss, and Jenkins servers.[\[Github PowerShell Empire\]](https://github.com/PowerShellEmpire/Empire)

- *Technique:* [[../Techniques/Exploitation of Remote Services (T1210)|Exploitation of Remote Services]]


# External References(s)

- [S0363](https://attack.mitre.org/software/S0363)

[^fn3]: [Schroeder, W., Warner, J., Nelson, M. (n.d.). Github PowerShellEmpire. Retrieved April 28, 2016.](https://github.com/PowerShellEmpire/Empire)
[^fn4]: [Stepanic, D. (2018, September 2). attck_empire: Generate ATT&CK Navigator layer file from PowerShell Empire agent logs. Retrieved March 11, 2019.](https://github.com/dstepanic/attck_empire)
[^fn5]: [The Australian Cyber Security Centre (ACSC), the Canadian Centre for Cyber Security (CCCS), the New Zealand National Cyber Security Centre (NZ NCSC), CERT New Zealand, the UK National Cyber Security Centre (UK NCSC) and the US National Cybersecurity and Communications Integration Center (NCCIC). (2018, October 11). Joint report on publicly available hacking tools. Retrieved March 11, 2019.](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)