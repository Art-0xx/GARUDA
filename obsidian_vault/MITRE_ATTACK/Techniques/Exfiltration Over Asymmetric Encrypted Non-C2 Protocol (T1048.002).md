---
mitre_data:
  id: T1048.002
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_asymmetric_encrypted_non-c2_protocol
  name: Exfiltration Over Asymmetric Encrypted Non-C2 Protocol
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Asymmetric Encrypted Non-C2 Protocol (`T1048.002`)

Adversaries may steal data by exfiltrating it over an asymmetrically encrypted network protocol other than that of the existing command and control channel. The data may also be sent to an alternate network location from the main command and control server. 

Asymmetric encryption algorithms are those that use different keys on each end of the channel. Also known as public-key cryptography, this requires pairs of cryptographic keys that can encrypt/decrypt data from the corresponding key. Each end of the communication channels requires a private key (only in the procession of that entity) and the public key of the other entity. The public keys of each entity are exchanged before encrypted communications begin. 

Network protocols that use asymmetric encryption (such as HTTPS/TLS/SSL) often utilize symmetric encryption once keys are exchanged. Adversaries may opt to use these encrypted mechanisms that are baked into a protocol. 


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Alternative Protocol (T1048)|Exfiltration Over Alternative Protocol]]

# Tool(s)

- [[../Tools/Rclone|Rclone]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1048.002](https://attack.mitre.org/techniques/T1048/002)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
