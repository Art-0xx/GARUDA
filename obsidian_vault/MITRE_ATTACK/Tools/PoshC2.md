---
tags:
  - mitre/attack/tool
---

# PoshC2 (`S0378`)

[PoshC2](https://attack.mitre.org/software/S0378) is an open source remote administration and post-exploitation framework that is publicly available on GitHub. The server-side components of the tool are primarily written in Python, while the implants are written in [PowerShell](https://attack.mitre.org/techniques/T1059/001). Although [PoshC2](https://attack.mitre.org/software/S0378) is primarily focused on Windows implantation, it does contain a basic Python dropper for Linux/macOS.[^fn1]



# Platform(s)

- Windows
- Linux
- macOS

# Techniques Used

## System Network Configuration Discovery

[PoshC2](https://attack.mitre.org/software/S0378) can enumerate network adapter information.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Credentials In Files

[PoshC2](https://attack.mitre.org/software/S0378) contains modules for searching for passwords in local and remote files.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Name Resolution Poisoning and SMB Relay

[PoshC2](https://attack.mitre.org/software/S0378) can use Inveigh to conduct name service poisoning for credential theft and associated relay attacks.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Name Resolution Poisoning and SMB Relay (T1557.001)|Name Resolution Poisoning and SMB Relay]]

## Web Protocols

[PoshC2](https://attack.mitre.org/software/S0378) can use protocols like HTTP/HTTPS for command and control traffic.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Windows Management Instrumentation

[PoshC2](https://attack.mitre.org/software/S0378) has a number of modules that use WMI to execute tasks.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## System Network Connections Discovery

[PoshC2](https://attack.mitre.org/software/S0378) contains an implementation of [netstat](https://attack.mitre.org/software/S0104) to enumerate TCP and UDP connections.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Exploitation for Privilege Escalation

[PoshC2](https://attack.mitre.org/software/S0378) contains modules for local privilege escalation exploits such as CVE-2016-9192 and CVE-2016-0099.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Exploitation for Privilege Escalation (T1068)|Exploitation for Privilege Escalation]]

## System Service Discovery

[PoshC2](https://attack.mitre.org/software/S0378) can enumerate service and service permission information.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/System Service Discovery (T1007)|System Service Discovery]]

## Create Process with Token

[PoshC2](https://attack.mitre.org/software/S0378) can use Invoke-RunAs to make tokens.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Create Process with Token (T1134.002)|Create Process with Token]]

## Bypass User Account Control

[PoshC2](https://attack.mitre.org/software/S0378) can utilize multiple methods to bypass UAC.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Service Execution

[PoshC2](https://attack.mitre.org/software/S0378) contains an implementation of [PsExec](https://attack.mitre.org/software/S0029) for remote execution.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Local Account

[PoshC2](https://attack.mitre.org/software/S0378) can enumerate local and domain user account information.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Local Account (T1087.001)|Local Account]]

## Automated Collection

[PoshC2](https://attack.mitre.org/software/S0378) contains a module for recursively parsing through files and directories to gather valid credit card numbers.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]

## System Information Discovery

[PoshC2](https://attack.mitre.org/software/S0378) contains modules, such as <code>Get-ComputerInfo</code>, for enumerating common system information.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Keylogging

[PoshC2](https://attack.mitre.org/software/S0378) has modules for keystroke logging and capturing credentials from spoofed Outlook authentication messages.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Domain Account

[PoshC2](https://attack.mitre.org/software/S0378) can enumerate local and domain user account information.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Archive via Utility

[PoshC2](https://attack.mitre.org/software/S0378) contains a module for compressing data using ZIP.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Archive via Utility (T1560.001)|Archive via Utility]]

## Pass the Hash

[PoshC2](https://attack.mitre.org/software/S0378) has a number of modules that leverage pass the hash for lateral movement.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Pass the Hash (T1550.002)|Pass the Hash]]

## Local Groups

[PoshC2](https://attack.mitre.org/software/S0378) contains modules, such as <code>Get-LocAdm</code> for enumerating permission groups.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Local Groups (T1069.001)|Local Groups]]

## File and Directory Discovery

[PoshC2](https://attack.mitre.org/software/S0378) can enumerate files on the local file system and includes a module for enumerating recently accessed files.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Proxy

[PoshC2](https://attack.mitre.org/software/S0378) contains modules that allow for use of proxies in command and control.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Brute Force

[PoshC2](https://attack.mitre.org/software/S0378) has modules for brute forcing local administrator and AD user accounts.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Brute Force (T1110)|Brute Force]]

## LSASS Memory

[PoshC2](https://attack.mitre.org/software/S0378) contains an implementation of [Mimikatz](https://attack.mitre.org/software/S0002) to gather credentials from memory.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Process Injection

[PoshC2](https://attack.mitre.org/software/S0378) contains multiple modules for injecting into processes, such as <code>Invoke-PSInject</code>.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Domain Trust Discovery

[PoshC2](https://attack.mitre.org/software/S0378) has modules for enumerating domain trusts.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Access Token Manipulation

[PoshC2](https://attack.mitre.org/software/S0378) can use Invoke-TokenManipulation for manipulating tokens.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

## Network Service Discovery

[PoshC2](https://attack.mitre.org/software/S0378) can perform port scans from an infected host.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Credentials from Password Stores

[PoshC2](https://attack.mitre.org/software/S0378) can decrypt passwords stored in the RDCMan configuration file.[\[SecureWorks August 2019\]](https://www.secureworks.com/blog/lyceum-takes-center-stage-in-middle-east-campaign)

- *Technique:* [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

## Network Sniffing

[PoshC2](https://attack.mitre.org/software/S0378) contains a module for taking packet captures on compromised hosts.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Network Sniffing (T1040)|Network Sniffing]]

## Windows Management Instrumentation Event Subscription

[PoshC2](https://attack.mitre.org/software/S0378) has the ability to persist on a system using WMI events.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Windows Management Instrumentation Event Subscription (T1546.003)|Windows Management Instrumentation Event Subscription]]

## Password Policy Discovery

[PoshC2](https://attack.mitre.org/software/S0378) can use <code>Get-PassPol</code> to enumerate the domain password policy.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Password Policy Discovery (T1201)|Password Policy Discovery]]

## Exploitation of Remote Services

[PoshC2](https://attack.mitre.org/software/S0378) contains a module for exploiting SMB via EternalBlue.[\[GitHub PoshC2\]](https://github.com/nettitude/PoshC2_Python)

- *Technique:* [[../Techniques/Exploitation of Remote Services (T1210)|Exploitation of Remote Services]]


# External References(s)

- [S0378](https://attack.mitre.org/software/S0378)

[^fn1]: [Nettitude. (2018, July 23). Python Server for PoshC2. Retrieved April 23, 2019.](https://github.com/nettitude/PoshC2_Python)