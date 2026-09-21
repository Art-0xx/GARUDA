---
tags:
  - mitre/attack/tool
---

# certutil (`S0160`)

[certutil](https://attack.mitre.org/software/S0160) is a command-line utility that can be used to obtain certificate authority information and configure Certificate Services. [^fn1]



# Platform(s)

- Windows

# Techniques Used

## Archive via Utility

[certutil](https://attack.mitre.org/software/S0160) may be used to Base64 encode collected data.[\[TechNet Certutil\]](https://technet.microsoft.com/library/cc732443.aspx)[\[LOLBAS Certutil\]](https://lolbas-project.github.io/lolbas/Binaries/Certutil/)

- *Technique:* [[../Techniques/Archive via Utility (T1560.001)|Archive via Utility]]

## Install Root Certificate

[certutil](https://attack.mitre.org/software/S0160) can be used to install browser root certificates as a precursor to performing [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557) between connections to banking websites. Example command: <code>certutil -addstore -f -user ROOT ProgramData\cert512121.der</code>.[\[Palo Alto Retefe\]](https://researchcenter.paloaltonetworks.com/2015/08/retefe-banking-trojan-targets-sweden-switzerland-and-japan/)

- *Technique:* [[../Techniques/Install Root Certificate (T1553.004)|Install Root Certificate]]

## Deobfuscate/Decode Files or Information

[certutil](https://attack.mitre.org/software/S0160) has been used to decode binaries hidden inside certificate files as Base64 information.[\[Malwarebytes Targeted Attack against Saudi Arabia\]](https://blog.malwarebytes.com/cybercrime/social-engineering-cybercrime/2017/03/new-targeted-attack-saudi-arabia-government/)

- *Technique:* [[../Techniques/Deobfuscate_Decode Files or Information (T1140)|Deobfuscate/Decode Files or Information]]

## Ingress Tool Transfer

[certutil](https://attack.mitre.org/software/S0160) can be used to download files from a given URL.[\[TechNet Certutil\]](https://technet.microsoft.com/library/cc732443.aspx)[\[LOLBAS Certutil\]](https://lolbas-project.github.io/lolbas/Binaries/Certutil/)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]


# External References(s)

- [S0160](https://attack.mitre.org/software/S0160)

[^fn1]: [Microsoft. (2012, November 14). Certutil. Retrieved July 3, 2017.](https://technet.microsoft.com/library/cc732443.aspx)