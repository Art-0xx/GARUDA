---
mitre_data:
  id: T1071.001
  linker_tags:
  - mitre/attack/linker/command_and_control/web_protocols
  name: Web Protocols
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Web Protocols (`T1071.001`)

Adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. Commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server. 

Protocols such as HTTP/S[^fn1] and WebSocket[^fn3] that carry web traffic may be very common in environments. HTTP/S packets have many fields and headers in which data can be concealed. An adversary may abuse these protocols to communicate with systems under their control within a victim network while also mimicking normal, expected traffic. 


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Application Layer Protocol (T1071)|Application Layer Protocol]]

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/evilginx2|evilginx2]]
- [[../Tools/Empire|Empire]]
- [[../Tools/FRP|FRP]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Out1|Out1]]
- [[../Tools/MCMD|MCMD]]
- [[../Tools/Donut|Donut]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/Mythic|Mythic]]
- [[../Tools/Quick Assist|Quick Assist]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1071.001](https://attack.mitre.org/techniques/T1071/001)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [Crowdstrike Global Intelligence Team. (2014, June 9). CrowdStrike Intelligence Report: Putter Panda. Retrieved January 22, 2016.](http://cdn0.vox-cdn.com/assets/4589853/crowdstrike-intelligence-report-putter-panda.original.pdf)
[^fn3]: [Shahar Tavor. (n.d.). BrazKing Android Malware Upgraded and Targeting Brazilian Banks. Retrieved March 24, 2023.](https://securityintelligence.com/posts/brazking-android-malware-upgraded-targeting-brazilian-banks/)