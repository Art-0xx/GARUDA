---
mitre_data:
  id: T1001.003
  linker_tags:
  - mitre/attack/linker/command_and_control/protocol_or_service_impersonation
  name: Protocol or Service Impersonation
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Protocol or Service Impersonation (`T1001.003`)

Adversaries may impersonate legitimate protocols or web service traffic to disguise command and control activity and thwart analysis efforts. By impersonating legitimate protocols or web services, adversaries can make their command and control traffic blend in with legitimate network traffic.  

Adversaries may impersonate a fake SSL/TLS handshake to make it look like subsequent traffic is SSL/TLS encrypted, potentially interfering with some security tooling, or to make the traffic look like it is related with a trusted entity. 

Adversaries may also leverage legitimate protocols to impersonate expected web traffic or trusted services. For example, adversaries may manipulate HTTP headers, URI endpoints, SSL certificates, and transmitted data to disguise C2 communications or mimic legitimate services such as Gmail, Google Drive, and Yahoo Messenger.[^fn3][^fn1]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Data Obfuscation (T1001)|Data Obfuscation]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1001.003](https://attack.mitre.org/techniques/T1001/003)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [Chris Navarrete Durgesh Sangvikar Andrew Guan Yu Fu Yanhui Jia Siddhart Shibiraj. (2022, March 16). Cobalt Strike Analysis and Tutorial: How Malleable C2 Profiles Make Cobalt Strike Difficult to Detect. Retrieved September 24, 2024.](https://unit42.paloaltonetworks.com/cobalt-strike-malleable-c2-profile/)
[^fn3]: [Hromcova, Z. (2019, July). OKRUM AND KETRICAN: AN OVERVIEW OF RECENT KE3CHANG GROUP ACTIVITY. Retrieved May 6, 2020.](https://www.welivesecurity.com/wp-content/uploads/2019/07/ESET_Okrum_and_Ketrican.pdf)