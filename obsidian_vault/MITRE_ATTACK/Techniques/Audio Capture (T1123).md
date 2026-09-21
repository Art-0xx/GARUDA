---
mitre_data:
  id: T1123
  linker_tags:
  - mitre/attack/linker/collection/audio_capture
  name: Audio Capture
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Audio Capture (`T1123`)

An adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.[^fn1]

Malware or scripts may be used to interact with the devices through an available API provided by the operating system or an application to capture audio. Audio files may be written to disk and exfiltrated later.


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1123](https://attack.mitre.org/techniques/T1123)

[^fn1]: [Hromcova, Z. (2019, October). AT COMMANDS, TOR-BASED COMMUNICATIONS: MEET ATTOR, A FANTASY CREATURE AND ALSO A SPY PLATFORM. Retrieved May 6, 2020.](https://www.welivesecurity.com/wp-content/uploads/2019/10/ESET_Attor.pdf)