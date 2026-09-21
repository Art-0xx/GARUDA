---
mitre_data:
  id: T1573.002
  linker_tags:
  - mitre/attack/linker/command_and_control/asymmetric_cryptography
  name: Asymmetric Cryptography
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Asymmetric Cryptography (`T1573.002`)

Adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. Asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. Due to how the keys are generated, the sender encrypts data with the receiver’s public key and the receiver decrypts the data with their private key. This ensures that only the intended recipient can read the encrypted data. Common public key encryption algorithms include RSA and ElGamal.

For efficiency, many protocols (including SSL/TLS) use symmetric cryptography once a connection is established, but use asymmetric cryptography to establish or transmit a key. As such, these protocols are classified as [Asymmetric Cryptography](https://attack.mitre.org/techniques/T1573/002).


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Encrypted Channel (T1573)|Encrypted Channel]]

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/DCRAT|DCRAT]]
- [[../Tools/Empire|Empire]]
- [[../Tools/FRP|FRP]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/Mythic|Mythic]]
- [[../Tools/Tor|Tor]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1573.002](https://attack.mitre.org/techniques/T1573/002)
- [Butler, M. (2013, November). Finding Hidden Threats by Decrypting SSL. Retrieved April 5, 2016.](http://www.sans.org/reading-room/whitepapers/analyst/finding-hidden-threats-decrypting-ssl-34840)
- [Dormann, W. (2015, March 13). The Risks of SSL Inspection. Retrieved April 5, 2016.](https://insights.sei.cmu.edu/cert/2015/03/the-risks-of-ssl-inspection.html)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
