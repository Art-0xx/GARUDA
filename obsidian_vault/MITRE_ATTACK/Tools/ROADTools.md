---
tags:
  - mitre/attack/tool
---

# ROADTools (`S0684`)

[ROADTools](https://attack.mitre.org/software/S0684) is a framework for enumerating Azure Active Directory environments. The tool is written in Python and publicly available on GitHub.[^fn1]



# Platform(s)

- Identity Provider

# Techniques Used

## Remote System Discovery

[ROADTools](https://attack.mitre.org/software/S0684) can enumerate Azure AD systems and devices.[\[Roadtools\]](https://dirkjanm.io/introducing-roadtools-and-roadrecon-azure-ad-exploration-framework/)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## Automated Collection

[ROADTools](https://attack.mitre.org/software/S0684) automatically gathers data from Azure AD environments using the Azure Graph API.[\[Roadtools\]](https://dirkjanm.io/introducing-roadtools-and-roadrecon-azure-ad-exploration-framework/)

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]

## Cloud Service Discovery

[ROADTools](https://attack.mitre.org/software/S0684) can enumerate Azure AD applications and service principals.[\[Roadtools\]](https://dirkjanm.io/introducing-roadtools-and-roadrecon-azure-ad-exploration-framework/)	

- *Technique:* [[../Techniques/Cloud Service Discovery (T1526)|Cloud Service Discovery]]

## Cloud Account

[ROADTools](https://attack.mitre.org/software/S0684) can enumerate Azure AD users.[\[Roadtools\]](https://dirkjanm.io/introducing-roadtools-and-roadrecon-azure-ad-exploration-framework/)

- *Technique:* [[../Techniques/Cloud Account (T1087.004)|Cloud Account]]

## Cloud Accounts

[ROADTools](https://attack.mitre.org/software/S0684) leverages valid cloud credentials to perform enumeration operations using the internal Azure AD Graph API.[\[Roadtools\]](https://dirkjanm.io/introducing-roadtools-and-roadrecon-azure-ad-exploration-framework/)	

- *Technique:* [[../Techniques/Cloud Accounts (T1078.004)|Cloud Accounts]]

## Cloud Groups

[ROADTools](https://attack.mitre.org/software/S0684) can enumerate Azure AD groups.[\[Roadtools\]](https://dirkjanm.io/introducing-roadtools-and-roadrecon-azure-ad-exploration-framework/)	

- *Technique:* [[../Techniques/Cloud Groups (T1069.003)|Cloud Groups]]


# External References(s)

- [S0684](https://attack.mitre.org/software/S0684)

[^fn1]: [Dirk-jan Mollema. (2022, January 31). ROADtools. Retrieved January 31, 2022.](https://github.com/dirkjanm/ROADtools)