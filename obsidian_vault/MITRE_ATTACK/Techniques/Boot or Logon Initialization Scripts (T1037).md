---
mitre_data:
  id: T1037
  linker_tags:
  - mitre/attack/linker/persistence/boot_or_logon_initialization_scripts
  - mitre/attack/linker/privilege_escalation/boot_or_logon_initialization_scripts
  name: Boot or Logon Initialization Scripts
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Boot or Logon Initialization Scripts (`T1037`)

Adversaries may use scripts automatically executed at boot or logon initialization to establish persistence.[^fn2][^fn1] Initialization scripts can be used to perform administrative functions, which may often execute other programs or send information to an internal logging server. These scripts can vary based on operating system and whether applied locally or remotely.  

Adversaries may use these scripts to maintain persistence on a single system. Depending on the access configuration of the logon scripts, either local credentials or an administrator account may be necessary. 

An adversary may also be able to escalate their privileges since some boot or logon initialization scripts run with higher privileges.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Login Hook (T1037.002)|Login Hook]]
- [[../Techniques/Startup Items (T1037.005)|Startup Items]]
- [[../Techniques/Network Logon Script (T1037.003)|Network Logon Script]]
- [[../Techniques/RC Scripts (T1037.004)|RC Scripts]]
- [[../Techniques/Logon Script (Windows) (T1037.001)|Logon Script (Windows)]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1037](https://attack.mitre.org/techniques/T1037)

[^fn1]: [Anomali Labs. (2019, March 15). Rocke Evolves Its Arsenal With a New Malware Family Written in Golang. Retrieved April 24, 2019.](https://www.anomali.com/blog/rocke-evolves-its-arsenal-with-a-new-malware-family-written-in-golang)
[^fn2]: [Mandiant. (2022, May 2). UNC3524: Eye Spy on Your Email. Retrieved August 17, 2023.](https://www.mandiant.com/resources/blog/unc3524-eye-spy-email)