---
mitre_data:
  id: T1092
  linker_tags:
  - mitre/attack/linker/command_and_control/communication_through_removable_media
  name: Communication Through Removable Media
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Communication Through Removable Media (`T1092`)

Adversaries can perform command and control between compromised hosts on potentially disconnected networks using removable media to transfer commands from system to system.[^fn1] Both systems would need to be compromised, with the likelihood that an Internet-connected system was compromised first and the second through lateral movement by [Replication Through Removable Media](https://attack.mitre.org/techniques/T1091). Commands and files would be relayed from the disconnected system to the Internet-connected system to which the adversary has direct access.


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1092](https://attack.mitre.org/techniques/T1092)

[^fn1]: [Calvet, J. (2014, November 11). Sednit Espionage Group Attacking Air-Gapped Networks. Retrieved January 4, 2017.](http://www.welivesecurity.com/2014/11/11/sednit-espionage-group-attacking-air-gapped-networks/)