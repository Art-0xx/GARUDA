---
tags:
  - mitre/attack/tool
---

# Nltest (`S0359`)

[Nltest](https://attack.mitre.org/software/S0359) is a Windows command-line utility used to list domain controllers and enumerate domain trusts.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Domain Trust Discovery

[Nltest](https://attack.mitre.org/software/S0359) may be used to enumerate trusted domains by using commands such as <code>nltest /domain_trusts</code>.[\[Nltest Manual\]](https://ss64.com/nt/nltest.html)[\[Fortinet TrickBot\]](https://www.fortinet.com/blog/threat-research/trickbot-s-new-reconnaissance-plugin.html)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Remote System Discovery

[Nltest](https://attack.mitre.org/software/S0359) may be used to enumerate remote domain controllers using options such as <code>/dclist</code> and <code>/dsgetdc</code>.[\[Nltest Manual\]](https://ss64.com/nt/nltest.html)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## System Network Configuration Discovery

[Nltest](https://attack.mitre.org/software/S0359) may be used to enumerate the parent domain of a local machine using <code>/parentdomain</code>.[\[Nltest Manual\]](https://ss64.com/nt/nltest.html)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]


# External References(s)

- [S0359](https://attack.mitre.org/software/S0359)

[^fn1]: [ss64. (n.d.). NLTEST.exe - Network Location Test. Retrieved February 14, 2019.](https://ss64.com/nt/nltest.html)