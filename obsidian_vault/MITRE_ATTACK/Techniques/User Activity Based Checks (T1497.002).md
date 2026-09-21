---
mitre_data:
  id: T1497.002
  linker_tags:
  - mitre/attack/linker/stealth/user_activity_based_checks
  - mitre/attack/linker/discovery/user_activity_based_checks
  name: User Activity Based Checks
  related_tactics:
  - stealth
  - discovery
tags:
- mitre/attack/technique
---



# User Activity Based Checks (`T1497.002`)

Adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. This may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (VME) or sandbox. If the adversary detects a VME, they may alter their malware to disengage from the victim or conceal the core functions of the implant. They may also search for VME artifacts before dropping secondary or additional payloads. Adversaries may use the information learned from [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497) during automated discovery to shape follow-on behaviors.[^fn4]

Adversaries may search for user activity on the host based on variables such as the speed/frequency of mouse movements and clicks [^fn3] , browser history, cache, bookmarks, or number of files in common directories such as home or the desktop. Other methods may rely on specific user interaction with the system before the malicious code is activated, such as waiting for a document to close before activating a macro [^fn2] or waiting for a user to double click on an embedded image to activate.[^fn1] 


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Virtualization_Sandbox Evasion (T1497)|Virtualization/Sandbox Evasion]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1497.002](https://attack.mitre.org/techniques/T1497/002)

[^fn1]: [Carr, N., et al. (2017, April 24). FIN7 Evolution and the Phishing LNK. Retrieved April 24, 2017.](https://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html)
[^fn2]: [Falcone, R., Lee, B.. (2018, November 20). Sofacy Continues Global Attacks and Wheels Out New ‘Cannon’ Trojan. Retrieved April 23, 2019.](https://unit42.paloaltonetworks.com/unit42-sofacy-continues-global-attacks-wheels-new-cannon-trojan/)
[^fn3]: [Keragala, D. (2016, January 16). Detecting Malware and Sandbox Evasion Techniques. Retrieved April 17, 2019.](https://www.sans.org/reading-room/whitepapers/forensics/detecting-malware-sandbox-evasion-techniques-36667)
[^fn4]: [Torello, A. & Guibernau, F. (n.d.). Environment Awareness. Retrieved September 13, 2024.](https://drive.google.com/file/d/1t0jn3xr4ff2fR30oQAUn_RsWSnMpOAQc/edit)