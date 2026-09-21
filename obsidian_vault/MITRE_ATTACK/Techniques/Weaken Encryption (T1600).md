---
mitre_data:
  id: T1600
  linker_tags:
  - mitre/attack/linker/defense_impairment/weaken_encryption
  name: Weaken Encryption
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Weaken Encryption (`T1600`)

Adversaries may compromise a network device’s encryption capability in order to bypass encryption that would otherwise protect data communications.[^fn1]

Encryption can be used to protect transmitted network traffic to maintain its confidentiality (protect against unauthorized disclosure) and integrity (protect against unauthorized changes). Encryption ciphers are used to convert a plaintext message to ciphertext and can be computationally intensive to decipher without the associated decryption key. Typically, longer keys increase the cost of cryptanalysis, or decryption without the key.

Adversaries can compromise and manipulate devices that perform encryption of network traffic. For example, through behaviors such as [Modify System Image](https://attack.mitre.org/techniques/T1601), [Reduce Key Space](https://attack.mitre.org/techniques/T1600/001), and [Disable Crypto Hardware](https://attack.mitre.org/techniques/T1600/002), an adversary can negatively effect and/or eliminate a device’s ability to securely encrypt network traffic. This poses a greater risk of unauthorized disclosure and may help facilitate data manipulation, Credential Access, or Collection efforts.[^fn2]


# Platform(s)

- Network Devices

# Sub-Technique(s)

- [[../Techniques/Reduce Key Space (T1600.001)|Reduce Key Space]]
- [[../Techniques/Disable Crypto Hardware (T1600.002)|Disable Crypto Hardware]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1600](https://attack.mitre.org/techniques/T1600)

[^fn1]: [Graham Holmes. (2015, October 8). Evolution of attacks on Cisco IOS devices. Retrieved October 19, 2020.](https://blogs.cisco.com/security/evolution-of-attacks-on-cisco-ios-devices)
[^fn2]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)