---
mitre_data:
  id: T1567.002
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_to_cloud_storage
  name: Exfiltration to Cloud Storage
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration to Cloud Storage (`T1567.002`)

Adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. Cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the Internet.

Examples of cloud storage services include Dropbox and Google Docs. Exfiltration to these cloud storage services can provide a significant amount of cover to the adversary if hosts within the network are already communicating with the service. 


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Web Service (T1567)|Exfiltration Over Web Service]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/Rclone|Rclone]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1567.002](https://attack.mitre.org/techniques/T1567/002)
