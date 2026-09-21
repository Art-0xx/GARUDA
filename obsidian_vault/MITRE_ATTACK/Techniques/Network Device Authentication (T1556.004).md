---
mitre_data:
  id: T1556.004
  linker_tags:
  - mitre/attack/linker/defense_impairment/network_device_authentication
  - mitre/attack/linker/persistence/network_device_authentication
  - mitre/attack/linker/credential_access/network_device_authentication
  name: Network Device Authentication
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Network Device Authentication (`T1556.004`)

Adversaries may use [Patch System Image](https://attack.mitre.org/techniques/T1601/001) to hard code a password in the operating system, thus bypassing of native authentication mechanisms for local accounts on network devices.

[Modify System Image](https://attack.mitre.org/techniques/T1601) may include implanted code to the operating system for network devices to provide access for adversaries using a specific password.  The modification includes a specific password which is implanted in the operating system image via the patch.  Upon authentication attempts, the inserted code will first check to see if the user input is the password. If so, access is granted. Otherwise, the implanted code will pass the credentials on for verification of potentially valid credentials.[^fn1]


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.004](https://attack.mitre.org/techniques/T1556/004)

[^fn1]: [Bill Hau, Tony Lee, Josh Homan. (2015, September 15). SYNful Knock - A Cisco router implant - Part I. Retrieved November 17, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/synful-knock-acis/)