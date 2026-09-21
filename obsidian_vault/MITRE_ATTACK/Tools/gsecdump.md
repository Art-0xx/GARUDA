---
tags:
  - mitre/attack/tool
---

# gsecdump (`S0008`)

[gsecdump](https://attack.mitre.org/software/S0008) is a publicly-available credential dumper used to obtain password hashes and LSA secrets from Windows operating systems. [^fn1]



# Platform(s)

- Windows

# Techniques Used

## Security Account Manager

[gsecdump](https://attack.mitre.org/software/S0008) can dump Windows password hashes from the SAM.[\[Microsoft Gsecdump\]](https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=HackTool:Win32/Gsecdump)

- *Technique:* [[../Techniques/Security Account Manager (T1003.002)|Security Account Manager]]

## LSA Secrets

[gsecdump](https://attack.mitre.org/software/S0008) can dump LSA secrets.[\[TrueSec Gsecdump\]](https://web.archive.org/web/20140328102838/https://www.truesec.se/sakerhet/verktyg/saakerhet/gsecdump_v2.0b5)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]


# External References(s)

- [S0008](https://attack.mitre.org/software/S0008)

[^fn1]: [TrueSec. (n.d.). gsecdump v2.0b5. Retrieved November 17, 2024.](https://web.archive.org/web/20140328102838/https://www.truesec.se/sakerhet/verktyg/saakerhet/gsecdump_v2.0b5)