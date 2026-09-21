---
mitre_data:
  id: T1070.005
  linker_tags:
  - mitre/attack/linker/stealth/network_share_connection_removal
  name: Network Share Connection Removal
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Network Share Connection Removal (`T1070.005`)

Adversaries may remove share connections that are no longer useful in order to clean up traces of their operation. Windows shared drive and [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002) connections can be removed when no longer needed. [Net](https://attack.mitre.org/software/S0039) is an example utility that can be used to remove network share connections with the <code>net use \\system\share /delete</code> command. [^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

# Tool(s)

- [[../Tools/Net|Net]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1070.005](https://attack.mitre.org/techniques/T1070/005)

[^fn1]: [Microsoft. (n.d.). Net Use. Retrieved November 25, 2016.](https://technet.microsoft.com/bb490717.aspx)