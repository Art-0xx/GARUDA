---
mitre_data:
  id: T1573.001
  linker_tags:
  - mitre/attack/linker/command_and_control/symmetric_cryptography
  name: Symmetric Cryptography
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Symmetric Cryptography (`T1573.001`)

Adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. Symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. Common symmetric encryption algorithms include AES, DES, 3DES, Blowfish, and RC4.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Encrypted Channel (T1573)|Encrypted Channel]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]
- [[../Tools/FRP|FRP]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1573.001](https://attack.mitre.org/techniques/T1573/001)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
