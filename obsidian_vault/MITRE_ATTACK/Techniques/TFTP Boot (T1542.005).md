---
mitre_data:
  id: T1542.005
  linker_tags:
  - mitre/attack/linker/stealth/tftp_boot
  - mitre/attack/linker/persistence/tftp_boot
  name: TFTP Boot
  related_tactics:
  - stealth
  - persistence
tags:
- mitre/attack/technique
---



# TFTP Boot (`T1542.005`)

Adversaries may abuse netbooting to load an unauthorized network device operating system from a Trivial File Transfer Protocol (TFTP) server. TFTP boot (netbooting) is commonly used by network administrators to load configuration-controlled network device images from a centralized management server. Netbooting is one option in the boot sequence and can be used to centralize, manage, and control device images.

Adversaries may manipulate the configuration on the network device specifying use of a malicious TFTP server, which may be used in conjunction with [Modify System Image](https://attack.mitre.org/techniques/T1601) to load a modified image on device startup or reset. The unauthorized image allows adversaries to modify device configuration, add malicious capabilities to the device, and introduce backdoors to maintain control of the network device while minimizing detection through use of a standard functionality. This technique is similar to [ROMMONkit](https://attack.mitre.org/techniques/T1542/004) and may result in the network device running a modified image. [^fn1]


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Pre-OS Boot (T1542)|Pre-OS Boot]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1542.005](https://attack.mitre.org/techniques/T1542/005)

[^fn1]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)