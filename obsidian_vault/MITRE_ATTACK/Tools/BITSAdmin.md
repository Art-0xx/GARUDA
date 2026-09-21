---
tags:
  - mitre/attack/tool
---

# BITSAdmin (`S0190`)

[BITSAdmin](https://attack.mitre.org/software/S0190) is a command line tool used to create and manage [BITS Jobs](https://attack.mitre.org/techniques/T1197). [^fn1]



# Platform(s)

- Windows

# Techniques Used

## Lateral Tool Transfer

[BITSAdmin](https://attack.mitre.org/software/S0190) can be used to create [BITS Jobs](https://attack.mitre.org/techniques/T1197) to upload and/or download files from SMB file servers.[\[Microsoft About BITS\]](https://docs.microsoft.com/en-us/windows/win32/bits/about-bits)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]

## Exfiltration Over Unencrypted Non-C2 Protocol

[BITSAdmin](https://attack.mitre.org/software/S0190) can be used to create [BITS Jobs](https://attack.mitre.org/techniques/T1197) to upload files from a compromised host.[\[Microsoft BITSAdmin\]](https://msdn.microsoft.com/library/aa362813.aspx)

- *Technique:* [[../Techniques/Exfiltration Over Unencrypted Non-C2 Protocol (T1048.003)|Exfiltration Over Unencrypted Non-C2 Protocol]]

## Ingress Tool Transfer

[BITSAdmin](https://attack.mitre.org/software/S0190) can be used to create [BITS Jobs](https://attack.mitre.org/techniques/T1197) to upload and/or download files.[\[Microsoft BITSAdmin\]](https://msdn.microsoft.com/library/aa362813.aspx)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## BITS Jobs

[BITSAdmin](https://attack.mitre.org/software/S0190) can be used to create [BITS Jobs](https://attack.mitre.org/techniques/T1197) to launch a malicious process.[\[TrendMicro Tropic Trooper Mar 2018\]](https://blog.trendmicro.com/trendlabs-security-intelligence/tropic-trooper-new-strategy/)

- *Technique:* [[../Techniques/BITS Jobs (T1197)|BITS Jobs]]


# External References(s)

- [S0190](https://attack.mitre.org/software/S0190)

[^fn1]: [Microsoft. (n.d.). BITSAdmin Tool. Retrieved January 12, 2018.](https://msdn.microsoft.com/library/aa362813.aspx)