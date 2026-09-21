---
mitre_data:
  id: T1560.003
  linker_tags:
  - mitre/attack/linker/collection/archive_via_custom_method
  name: Archive via Custom Method
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Archive via Custom Method (`T1560.003`)

An adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. Adversaries may choose to use custom archival methods, such as encryption with XOR or stream ciphers implemented with no external library or utility references. Custom implementations of well-known compression algorithms have also been used.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Archive Collected Data (T1560)|Archive Collected Data]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1560.003](https://attack.mitre.org/techniques/T1560/003)

[^fn1]: [ESET. (2016, October). En Route with Sednit - Part 2: Observing the Comings and Goings. Retrieved November 21, 2016.](http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part-2.pdf)