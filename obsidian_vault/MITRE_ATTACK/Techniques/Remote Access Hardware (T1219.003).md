---
mitre_data:
  id: T1219.003
  linker_tags:
  - mitre/attack/linker/command_and_control/remote_access_hardware
  name: Remote Access Hardware
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Remote Access Hardware (`T1219.003`)

An adversary may use legitimate remote access hardware to establish an interactive command and control channel to target systems within networks. These services, including IP-based keyboard, video, or mouse (KVM) devices such as TinyPilot and PiKVM, are commonly used as legitimate tools and may be allowed by peripheral device policies within a target environment.  

Remote access hardware may be physically installed and used post-compromise as an alternate communications channel for redundant access or as a way to establish an interactive remote session with the target system. Using hardware-based remote access tools may allow threat actors to bypass software security solutions and gain more control over the compromised device(s).[^fn2][^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Remote Access Tools (T1219)|Remote Access Tools]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1219.003](https://attack.mitre.org/techniques/T1219/003)

[^fn1]: [Codi Starks, Michael Barnhart, Taylor Long, Mike Lombardi, Joseph Pisano, and Alice Revelli. (2024, September 23). Staying a Step Ahead: Mitigating the DPRK IT Worker Threat. Retrieved March 26, 2025.](https://cloud.google.com/blog/topics/threat-intelligence/mitigating-dprk-it-worker-threat/)
[^fn2]: [Evan Gordenker. (2024, November 13). Global Companies Are Unknowingly Paying North Koreans: Here’s How to Catch Them. Retrieved March 26, 2025.](https://unit42.paloaltonetworks.com/north-korean-it-workers/)