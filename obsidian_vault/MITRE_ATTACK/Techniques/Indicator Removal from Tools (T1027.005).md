---
mitre_data:
  id: T1027.005
  linker_tags:
  - mitre/attack/linker/stealth/indicator_removal_from_tools
  name: Indicator Removal from Tools
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Indicator Removal from Tools (`T1027.005`)

Adversaries may remove indicators from tools if they believe their malicious tool was detected, quarantined, or otherwise curtailed. They can modify the tool by removing the indicator and using the updated version that is no longer detected by the target's defensive systems or subsequent targets that may use similar systems.

A good example of this is when malware is detected with a file signature and quarantined by anti-virus software. An adversary who can determine that the malware was quarantined because of its file signature may modify the file to explicitly avoid that signature, and then re-use the malware.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.005](https://attack.mitre.org/techniques/T1027/005)
