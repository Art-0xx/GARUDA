---
mitre_data:
  id: T1601.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/downgrade_system_image
  name: Downgrade System Image
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Downgrade System Image (`T1601.002`)

Adversaries may install an older version of the operating system of a network device to weaken security.  Older operating system versions on network devices often have weaker encryption ciphers and, in general, fewer/less updated defensive features. [^fn1]

On embedded devices, downgrading the version typically only requires replacing the operating system file in storage.  With most embedded devices, this can be achieved by downloading a copy of the desired version of the operating system file and reconfiguring the device to boot from that file on next system restart.  The adversary could then restart the device to implement the change immediately or they could wait until the next time the system restarts.

Downgrading the system image to an older versions may allow an adversary to evade defenses by enabling behaviors such as [Weaken Encryption](https://attack.mitre.org/techniques/T1600).  Downgrading of a system image can be done on its own, or it can be used in conjunction with [Patch System Image](https://attack.mitre.org/techniques/T1601/001).  


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Modify System Image (T1601)|Modify System Image]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1601.002](https://attack.mitre.org/techniques/T1601/002)

[^fn1]: [Graham Holmes. (2015, October 8). Evolution of attacks on Cisco IOS devices. Retrieved October 19, 2020.](https://blogs.cisco.com/security/evolution-of-attacks-on-cisco-ios-devices)