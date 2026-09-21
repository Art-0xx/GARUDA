---
mitre_data:
  id: T1102.003
  linker_tags:
  - mitre/attack/linker/command_and_control/one-way_communication
  name: One-Way Communication
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# One-Way Communication (`T1102.003`)

Adversaries may use an existing, legitimate external Web service as a means for sending commands to a compromised system without receiving return output over the Web service channel. Compromised systems may leverage popular websites and social media to host command and control (C2) instructions. Those infected systems may opt to send the output from those commands back over a different C2 channel, including to another distinct Web service. Alternatively, compromised systems may return no output at all in cases where adversaries want to send instructions to systems and do not want a response.

Popular websites and social media acting as a mechanism for C2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. Using common services, such as those offered by Google or Twitter, makes it easier for adversaries to hide in expected noise. Web service providers commonly use SSL/TLS encryption, giving adversaries an added level of protection.


# Platform(s)

- Linux
- macOS
- Windows
- ESXi

# Parent Technique(s)

- [[../Techniques/Web Service (T1102)|Web Service]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1102.003](https://attack.mitre.org/techniques/T1102/003)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
