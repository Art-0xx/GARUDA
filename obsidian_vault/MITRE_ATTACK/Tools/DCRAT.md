---
tags:
  - mitre/attack/tool
---

# DCRAT (`S9017`)

[DCRAT](https://attack.mitre.org/software/S9017) is a variant of the open-source [AsyncRAT](https://attack.mitre.org/software/S1087) developed in C# with additional capabilities such as patching Microsoft’s Antimalware Scan Interface (AMSI).[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Asymmetric Cryptography

[DCRAT](https://attack.mitre.org/software/S9017) can use certificate-based authentication for C2 servers.[\[Zscaler BlindEagle DEC 2025\]](https://www.zscaler.com/blogs/security-research/blindeagle-targets-colombian-government-agency-caminho-and-dcrat)


- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Keylogging

[DCRAT](https://attack.mitre.org/software/S9017) can log keystrokes on targeted systems.[\[Zscaler BlindEagle DEC 2025\]](https://www.zscaler.com/blogs/security-research/blindeagle-targets-colombian-government-agency-caminho-and-dcrat)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Encrypted/Encoded File

The [DCRAT](https://attack.mitre.org/software/S9017) configuration file is encrypted using AES-256.[\[Zscaler BlindEagle DEC 2025\]](https://www.zscaler.com/blogs/security-research/blindeagle-targets-colombian-government-agency-caminho-and-dcrat)

- *Technique:* [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]

## Disable or Modify Tools

[DCRAT](https://attack.mitre.org/software/S9017) can patch Microsoft’s Antimalware Scan Interface (AMSI) to evade detection.[\[Zscaler BlindEagle DEC 2025\]](https://www.zscaler.com/blogs/security-research/blindeagle-targets-colombian-government-agency-caminho-and-dcrat)

- *Technique:* [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]


# External References(s)

- [S9017](https://attack.mitre.org/software/S9017)

[^fn1]: [Pellegrino, G. (2025, December 16). BlindEagle Targets Colombian Government Agency with Caminho and DCRAT. Retrieved April 16, 2026.](https://www.zscaler.com/blogs/security-research/blindeagle-targets-colombian-government-agency-caminho-and-dcrat)