---
mitre_data:
  id: T1071.002
  linker_tags:
  - mitre/attack/linker/command_and_control/file_transfer_protocols
  name: File Transfer Protocols
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# File Transfer Protocols (`T1071.002`)

Adversaries may communicate using application layer protocols associated with transferring files to avoid detection/network filtering by blending in with existing traffic. Commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server. 

Protocols such as SMB[^fn3], FTP[^fn1], FTPS, and TFTP that transfer files may be very common in environments.  Packets produced from these protocols may have many fields and headers in which data can be concealed. Data could also be concealed within the transferred files. An adversary may abuse these protocols to communicate with systems under their control within a victim network while also mimicking normal, expected traffic. 


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Application Layer Protocol (T1071)|Application Layer Protocol]]

# Tool(s)

- [[../Tools/CARROTBALL|CARROTBALL]]
- [[../Tools/Mythic|Mythic]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1071.002](https://attack.mitre.org/techniques/T1071/002)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [ESET. (2019, July). MACHETE JUST GOT SHARPER Venezuelan government institutions under attack. Retrieved September 13, 2019.](https://www.welivesecurity.com/wp-content/uploads/2019/08/ESET_Machete.pdf)
[^fn3]: [US-CERT. (2018, March 16). Alert (TA18-074A): Russian Government Cyber Activity Targeting Energy and Other Critical Infrastructure Sectors. Retrieved June 6, 2018.](https://www.us-cert.gov/ncas/alerts/TA18-074A)