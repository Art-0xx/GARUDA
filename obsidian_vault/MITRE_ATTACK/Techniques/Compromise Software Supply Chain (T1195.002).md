---
mitre_data:
  id: T1195.002
  linker_tags:
  - mitre/attack/linker/initial_access/compromise_software_supply_chain
  name: Compromise Software Supply Chain
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Compromise Software Supply Chain (`T1195.002`)

Adversaries may manipulate application software prior to receipt by a final consumer for the purpose of data or system compromise. Supply chain compromise of software can take place in a number of ways, including manipulation of the application source code, manipulation of the update/distribution mechanism for that software, or replacing compiled releases with a modified version.

Targeting may be specific to a desired victim set or may be distributed to a broad set of consumers but only move on to additional tactics on specific victims.[^fn1][^fn2]  


# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/Supply Chain Compromise (T1195)|Supply Chain Compromise]]

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1195.002](https://attack.mitre.org/techniques/T1195/002)

[^fn1]: [Avast Threat Intelligence Team. (2018, March 8). New investigations into the CCleaner incident point to a possible third stage that had keylogger capacities. Retrieved March 15, 2018.](https://blog.avast.com/new-investigations-in-ccleaner-incident-point-to-a-possible-third-stage-that-had-keylogger-capacities)
[^fn2]: [Command Five Pty Ltd. (2011, September). SK Hack by an Advanced Persistent Threat. Retrieved November 17, 2024.](https://web.archive.org/web/20160309235002/https://www.commandfive.com/papers/C5_APT_SKHack.pdf)