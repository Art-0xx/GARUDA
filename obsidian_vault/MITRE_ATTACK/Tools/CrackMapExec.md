---
tags:
  - mitre/attack/tool
---

# CrackMapExec (`S0488`)

[CrackMapExec](https://attack.mitre.org/software/S0488), or CME, is a post-exploitation tool developed in Python and designed for penetration testing against networks. [CrackMapExec](https://attack.mitre.org/software/S0488) collects Active Directory information to conduct lateral movement through targeted networks.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Security Account Manager

[CrackMapExec](https://attack.mitre.org/software/S0488) can dump usernames and hashed passwords from the SAM.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Security Account Manager (T1003.002)|Security Account Manager]]

## NTDS

[CrackMapExec](https://attack.mitre.org/software/S0488) can dump hashed passwords associated with Active Directory using Windows' Directory Replication Services API (DRSUAPI), or Volume Shadow Copy.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/NTDS (T1003.003)|NTDS]]

## Password Spraying

[CrackMapExec](https://attack.mitre.org/software/S0488) can brute force credential authentication by using a supplied list of usernames and a single password.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Password Spraying (T1110.003)|Password Spraying]]

## Password Policy Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can discover the password policies applied to the target system.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Password Policy Discovery (T1201)|Password Policy Discovery]]

## Domain Account

[CrackMapExec](https://attack.mitre.org/software/S0488) can enumerate the domain user accounts on a targeted system.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## System Network Connections Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can discover active sessions for a targeted system.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Password Guessing

[CrackMapExec](https://attack.mitre.org/software/S0488) can brute force passwords for a specified user on a single target system or across an entire network.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Password Guessing (T1110.001)|Password Guessing]]

## At

[CrackMapExec](https://attack.mitre.org/software/S0488) can set a scheduled task on the target system to execute commands remotely using [at](https://attack.mitre.org/software/S0110).[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/At (T1053.002)|At]]

## Network Share Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can enumerate the shared folders and associated permissions for a targeted network.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Network Share Discovery (T1135)|Network Share Discovery]]

## Remote System Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can discover active IP addresses, along with the machine name, within a targeted network.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## LSA Secrets

[CrackMapExec](https://attack.mitre.org/software/S0488) can dump hashed passwords from LSA secrets for the targeted system.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]

## Windows Management Instrumentation

[CrackMapExec](https://attack.mitre.org/software/S0488) can execute remote commands using Windows Management Instrumentation.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)	

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Modify Registry

[CrackMapExec](https://attack.mitre.org/software/S0488) can create a registry key using wdigest.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## File and Directory Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can discover specified filetypes and log files on a targeted system.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Pass the Hash

[CrackMapExec](https://attack.mitre.org/software/S0488) can pass the hash to authenticate via SMB.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Pass the Hash (T1550.002)|Pass the Hash]]

## Local Storage Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can enumerate the system drives and associated system name.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Local Storage Discovery (T1680)|Local Storage Discovery]]

## Domain Groups

[CrackMapExec](https://attack.mitre.org/software/S0488) can gather the user accounts within domain groups.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## PowerShell

[CrackMapExec](https://attack.mitre.org/software/S0488) can execute PowerShell commands via WMI.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## System Network Configuration Discovery

[CrackMapExec](https://attack.mitre.org/software/S0488) can collect DNS information from the targeted system.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Brute Force

[CrackMapExec](https://attack.mitre.org/software/S0488) can brute force supplied user credentials across a network range.[\[CME Github September 2018\]](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)

- *Technique:* [[../Techniques/Brute Force (T1110)|Brute Force]]


# External References(s)

- [S0488](https://attack.mitre.org/software/S0488)

[^fn1]: [byt3bl33d3r. (2018, September 8). SMB: Command Reference. Retrieved July 17, 2020.](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference)