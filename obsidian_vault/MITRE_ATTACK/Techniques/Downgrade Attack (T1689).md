---
mitre_data:
  id: T1689
  linker_tags:
  - mitre/attack/linker/defense_impairment/downgrade_attack
  name: Downgrade Attack
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Downgrade Attack (`T1689`)

Adversaries may downgrade or use a version of system features that may be outdated, vulnerable, and/or does not support updated security controls. Downgrade attacks typically take advantage of a system’s backward compatibility to force it into less secure modes of operation.

Adversaries may downgrade and use various less-secure versions of features of a system, such as [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059) or even network protocols that can be abused to enable [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557) or [Network Sniffing](https://attack.mitre.org/techniques/T1040).[^fn7] For example, [PowerShell](https://attack.mitre.org/techniques/T1059/001) versions 5+ includes Script Block Logging (SBL), which can record executed script content. However, adversaries may attempt to execute a previous version of PowerShell that does not support SBL with the intent to impair defenses while running malicious scripts that may have otherwise been detected.[^fn4][^fn6][^fn5]

Adversaries may similarly target network traffic to downgrade from an encrypted HTTPS connection to an unsecured HTTP connection that exposes network data in clear text.[^fn3][^fn2] On Windows systems, adversaries may downgrade the boot manager to a vulnerable version that bypasses Secure Boot, granting the ability to disable various operating system security mechanisms.[^fn1]


# Platform(s)

- macOS
- Windows
- Linux

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1689](https://attack.mitre.org/techniques/T1689)

[^fn1]: [Alon Leviev. (2024, August 7). Windows Downdate: Downgrade Attacks Using Windows Updates. Retrieved January 8, 2025.](https://www.safebreach.com/blog/downgrade-attacks-using-windows-updates/)
[^fn2]: [Bart Lenaerts-Bergmans. (2023, March 13). What are Downgrade Attacks?. Retrieved April 15, 2026.](https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/downgrade-attack/)
[^fn3]: [Check Point. (n.d.). Targeted SSL Stripping Attacks Are Real. Retrieved May 24, 2023.](https://blog.checkpoint.com/research/targeted-ssl-stripping-attacks-are-real/amp/)
[^fn4]: [Falcon Complete Team. (2021, May 11). Response When Minutes Matter: Rising Up Against Ransomware. Retrieved April 15, 2026.](https://www.crowdstrike.com/en-us/blog/how-falcon-complete-stopped-a-big-game-hunting-ransomware-attack/)
[^fn5]: [Hao, M. (2019, February 27). Attack and Defense Around PowerShell Event Logging. Retrieved November 24, 2021.](https://nsfocusglobal.com/attack-and-defense-around-powershell-event-logging/)
[^fn6]: [Nathan Kirk. (2018, June 18). Bring Your Own Land (BYOL) — A Novel Red Teaming Technique. Retrieved April 15, 2026.](https://cloud.google.com/blog/topics/threat-intelligence/bring-your-own-land-novel-red-teaming-technique/)
[^fn7]: [Praetorian. (2014, August 19). Man-in-the-Middle TLS Protocol Downgrade Attack. Retrieved October 8, 2021.](https://www.praetorian.com/blog/man-in-the-middle-tls-ssl-protocol-downgrade-attack/)