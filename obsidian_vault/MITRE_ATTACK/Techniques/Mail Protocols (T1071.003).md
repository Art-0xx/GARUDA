---
mitre_data:
  id: T1071.003
  linker_tags:
  - mitre/attack/linker/command_and_control/mail_protocols
  name: Mail Protocols
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Mail Protocols (`T1071.003`)

Adversaries may communicate using application layer protocols associated with electronic mail delivery to avoid detection/network filtering by blending in with existing traffic. Commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server. 

Protocols such as SMTP/S, POP3/S, and IMAP that carry electronic mail may be very common in environments.  Packets produced from these protocols may have many fields and headers in which data can be concealed. Data could also be concealed within the email messages themselves. An adversary may abuse these protocols to communicate with systems under their control within a victim network while also mimicking normal, expected traffic.[^fn1] 


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Application Layer Protocol (T1071)|Application Layer Protocol]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1071.003](https://attack.mitre.org/techniques/T1071/003)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [FireEye. (2015). APT28: A WINDOW INTO RUSSIA’S CYBER ESPIONAGE OPERATIONS?. Retrieved August 19, 2015.](https://web.archive.org/web/20151022204649/https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf)