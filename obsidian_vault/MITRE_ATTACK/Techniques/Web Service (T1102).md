---
mitre_data:
  id: T1102
  linker_tags:
  - mitre/attack/linker/command_and_control/web_service
  name: Web Service
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Web Service (`T1102`)

Adversaries may use an existing, legitimate external Web service as a means for relaying data to/from a compromised system. Popular websites, cloud services, and social media acting as a mechanism for C2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. Using common services, such as those offered by Google, Microsoft, or Twitter, makes it easier for adversaries to hide in expected noise.[^fn1] Web service providers commonly use SSL/TLS encryption, giving adversaries an added level of protection.

Use of Web services may also protect back-end C2 infrastructure from discovery through malware binary analysis while also enabling operational resiliency (since this infrastructure may be dynamically changed).


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/One-Way Communication (T1102.003)|One-Way Communication]]
- [[../Techniques/Bidirectional Communication (T1102.002)|Bidirectional Communication]]
- [[../Techniques/Dead Drop Resolver (T1102.001)|Dead Drop Resolver]]

# Tool(s)

- [[../Tools/ngrok|ngrok]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1102](https://attack.mitre.org/techniques/T1102)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [Broadcom. (2024, May 2). BirdyClient malware leverages Microsoft Graph API for C&C communication. Retrieved July 1, 2024.](https://www.broadcom.com/support/security-center/protection-bulletin/birdyclient-malware-leverages-microsoft-graph-api-for-c-c-communication)