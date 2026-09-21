---
mitre_data:
  id: T1071
  linker_tags:
  - mitre/attack/linker/command_and_control/application_layer_protocol
  name: Application Layer Protocol
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Application Layer Protocol (`T1071`)

Adversaries may communicate using OSI application layer protocols to avoid detection/network filtering by blending in with existing traffic. Commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server. 

Adversaries may utilize many different protocols, including those used for web browsing, transferring files, electronic mail, DNS, or publishing/subscribing. For connections that occur internally within an enclave (such as those between a proxy or pivot node and other nodes), commonly used protocols are SMB, SSH, or RDP.[^fn2] 


# Platform(s)

- Linux
- macOS
- Windows
- Network Devices
- ESXi

# Sub-Technique(s)

- [[../Techniques/DNS (T1071.004)|DNS]]
- [[../Techniques/Publish_Subscribe Protocols (T1071.005)|Publish/Subscribe Protocols]]
- [[../Techniques/Mail Protocols (T1071.003)|Mail Protocols]]
- [[../Techniques/File Transfer Protocols (T1071.002)|File Transfer Protocols]]
- [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1071](https://attack.mitre.org/techniques/T1071)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Mandiant. (2022, May 2). UNC3524: Eye Spy on Your Email. Retrieved August 17, 2023.](https://www.mandiant.com/resources/blog/unc3524-eye-spy-email)