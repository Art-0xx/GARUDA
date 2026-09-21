---
mitre_data:
  id: T1048.001
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_symmetric_encrypted_non-c2_protocol
  name: Exfiltration Over Symmetric Encrypted Non-C2 Protocol
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Symmetric Encrypted Non-C2 Protocol (`T1048.001`)

Adversaries may steal data by exfiltrating it over a symmetrically encrypted network protocol other than that of the existing command and control channel. The data may also be sent to an alternate network location from the main command and control server. 

Symmetric encryption algorithms are those that use shared or the same keys/secrets on each end of the channel. This requires an exchange or pre-arranged agreement/possession of the value used to encrypt and decrypt data. 

Network protocols that use asymmetric encryption often utilize symmetric encryption once keys are exchanged, but adversaries may opt to manually share keys and implement symmetric cryptographic algorithms (ex: RC4, AES) vice using mechanisms that are baked into a protocol. This may result in multiple layers of encryption (in protocols that are natively encrypted such as HTTPS) or encryption in protocols that not typically encrypted (such as HTTP or FTP). 


# Platform(s)

- Linux
- macOS
- Windows
- ESXi

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Alternative Protocol (T1048)|Exfiltration Over Alternative Protocol]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1048.001](https://attack.mitre.org/techniques/T1048/001)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
