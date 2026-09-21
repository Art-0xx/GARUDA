---
mitre_data:
  id: T1573
  linker_tags:
  - mitre/attack/linker/command_and_control/encrypted_channel
  name: Encrypted Channel
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Encrypted Channel (`T1573`)

Adversaries may employ an encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. Despite the use of a secure algorithm, these implementations may be vulnerable to reverse engineering if secret keys are encoded and/or generated within malware samples/configuration files.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Symmetric Cryptography (T1573.001)|Symmetric Cryptography]]
- [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1573](https://attack.mitre.org/techniques/T1573)
- [Butler, M. (2013, November). Finding Hidden Threats by Decrypting SSL. Retrieved April 5, 2016.](http://www.sans.org/reading-room/whitepapers/analyst/finding-hidden-threats-decrypting-ssl-34840)
- [Dormann, W. (2015, March 13). The Risks of SSL Inspection. Retrieved April 5, 2016.](https://insights.sei.cmu.edu/cert/2015/03/the-risks-of-ssl-inspection.html)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
