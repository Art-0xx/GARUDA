---
mitre_data:
  id: T1056
  linker_tags:
  - mitre/attack/linker/collection/input_capture
  - mitre/attack/linker/credential_access/input_capture
  name: Input Capture
  related_tactics:
  - collection
  - credential_access
tags:
- mitre/attack/technique
---



# Input Capture (`T1056`)

Adversaries may use methods of capturing user input to obtain credentials or collect information. During normal system usage, users often provide credentials to various different locations, such as login pages/portals or system dialog boxes. Input capture mechanisms may be transparent to the user (e.g. [Credential API Hooking](https://attack.mitre.org/techniques/T1056/004)) or rely on deceiving the user into providing input into what they believe to be a genuine service (e.g. [Web Portal Capture](https://attack.mitre.org/techniques/T1056/003)).


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Keylogging (T1056.001)|Keylogging]]
- [[../Techniques/Web Portal Capture (T1056.003)|Web Portal Capture]]
- [[../Techniques/GUI Input Capture (T1056.002)|GUI Input Capture]]
- [[../Techniques/Credential API Hooking (T1056.004)|Credential API Hooking]]

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1056](https://attack.mitre.org/techniques/T1056)
- [Tinaztepe,  E. (n.d.). The Adventures of a Keystroke:  An in-depth look into keyloggers on Windows. Retrieved April 27, 2016.](http://opensecuritytraining.info/Keylogging_files/The%20Adventures%20of%20a%20Keystroke.pdf)
