---
mitre_data:
  id: T1560
  linker_tags:
  - mitre/attack/linker/collection/archive_collected_data
  name: Archive Collected Data
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Archive Collected Data (`T1560`)

An adversary may compress and/or encrypt data that is collected prior to exfiltration. Compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network.[^fn1] Encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.

Both compression and encryption are done prior to exfiltration, and can be performed using a utility, 3rd party library, or custom method.


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Archive via Utility (T1560.001)|Archive via Utility]]
- [[../Techniques/Archive via Custom Method (T1560.003)|Archive via Custom Method]]
- [[../Techniques/Archive via Library (T1560.002)|Archive via Library]]

# Tool(s)

- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1560](https://attack.mitre.org/techniques/T1560)
- [Wikipedia. (2016, March 31). List of file signatures. Retrieved April 22, 2016.](https://en.wikipedia.org/wiki/List_of_file_signatures)

[^fn1]: [Mueller, R. (2018, July 13). Indictment - United States of America vs. VIKTOR BORISOVICH NETYKSHO, et al. Retrieved November 17, 2024.](https://cdn.cnn.com/cnn/2018/images/07/13/gru.indictment.pdf)