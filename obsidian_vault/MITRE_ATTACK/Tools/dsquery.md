---
tags:
  - mitre/attack/tool
---

# dsquery (`S0105`)

[dsquery](https://attack.mitre.org/software/S0105) is a command-line utility that can be used to query Active Directory for information from a system within a domain. [^fn1] It is typically installed only on Windows Server versions but can be installed on non-server variants through the Microsoft-provided Remote Server Administration Tools bundle.



# Platform(s)

- Windows

# Techniques Used

## Domain Account

[dsquery](https://attack.mitre.org/software/S0105) can be used to gather information on user accounts within a domain.[\[TechNet Dsquery\]](https://technet.microsoft.com/en-us/library/cc732952.aspx)[\[Mandiant APT41\]](https://www.mandiant.com/resources/apt41-us-state-governments)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Domain Trust Discovery

[dsquery](https://attack.mitre.org/software/S0105) can be used to gather information on domain trusts with <code>dsquery * -filter "(objectClass=trustedDomain)" -attr *</code>.[\[Harmj0y Domain Trusts\]](https://posts.specterops.io/a-guide-to-attacking-domain-trusts-971e52cb2944)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Domain Groups

[dsquery](https://attack.mitre.org/software/S0105) can be used to gather information on permission groups within a domain.[\[TechNet Dsquery\]](https://technet.microsoft.com/en-us/library/cc732952.aspx)[\[Mandiant APT41\]](https://www.mandiant.com/resources/apt41-us-state-governments)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## System Information Discovery

[dsquery](https://attack.mitre.org/software/S0105) has the ability to enumerate various information, such as the operating system and host name, for systems within a domain.[\[Mandiant APT41\]](https://www.mandiant.com/resources/apt41-us-state-governments)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]


# External References(s)

- [S0105](https://attack.mitre.org/software/S0105)

[^fn1]: [Microsoft. (n.d.). Dsquery. Retrieved April 18, 2016.](https://technet.microsoft.com/en-us/library/cc732952.aspx)