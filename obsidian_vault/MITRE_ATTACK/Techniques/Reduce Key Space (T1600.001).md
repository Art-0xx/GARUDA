---
mitre_data:
  id: T1600.001
  linker_tags:
  - mitre/attack/linker/defense_impairment/reduce_key_space
  name: Reduce Key Space
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Reduce Key Space (`T1600.001`)

Adversaries may reduce the level of effort required to decrypt data transmitted over the network by reducing the cipher strength of encrypted communications.[^fn1]

Adversaries can weaken the encryption software on a compromised network device by reducing the key size used by the software to convert plaintext to ciphertext (e.g., from hundreds or thousands of bytes to just a couple of bytes). As a result, adversaries dramatically reduce the amount of effort needed to decrypt the protected information without the key.

Adversaries may modify the key size used and other encryption parameters using specialized commands in a [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) introduced to the system through [Modify System Image](https://attack.mitre.org/techniques/T1601) to change the configuration of the device. [^fn2]


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Weaken Encryption (T1600)|Weaken Encryption]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1600.001](https://attack.mitre.org/techniques/T1600/001)

[^fn1]: [Graham Holmes. (2015, October 8). Evolution of attacks on Cisco IOS devices. Retrieved October 19, 2020.](https://blogs.cisco.com/security/evolution-of-attacks-on-cisco-ios-devices)
[^fn2]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)