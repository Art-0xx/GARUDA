---
mitre_data:
  id: T1600.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/disable_crypto_hardware
  name: Disable Crypto Hardware
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Disable Crypto Hardware (`T1600.002`)

Adversaries disable a network device’s dedicated hardware encryption, which may enable them to leverage weaknesses in software encryption in order to reduce the effort involved in collecting, manipulating, and exfiltrating transmitted data.

Many network devices such as routers, switches, and firewalls, perform encryption on network traffic to secure transmission across networks. Often, these devices are equipped with special, dedicated encryption hardware to greatly increase the speed of the encryption process as well as to prevent malicious tampering. When an adversary takes control of such a device, they may disable the dedicated hardware, for example, through use of [Modify System Image](https://attack.mitre.org/techniques/T1601), forcing the use of software to perform encryption on general processors. This is typically used in conjunction with attacks to weaken the strength of the cipher in software (e.g., [Reduce Key Space](https://attack.mitre.org/techniques/T1600/001)). [^fn1]


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Weaken Encryption (T1600)|Weaken Encryption]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1600.002](https://attack.mitre.org/techniques/T1600/002)

[^fn1]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)