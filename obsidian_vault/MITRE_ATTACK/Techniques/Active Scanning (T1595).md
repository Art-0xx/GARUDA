---
mitre_data:
  id: T1595
  linker_tags:
  - mitre/attack/linker/reconnaissance/active_scanning
  name: Active Scanning
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Active Scanning (`T1595`)

Adversaries may execute active reconnaissance scans to gather information that can be used during targeting. Active scans are those where the adversary probes victim infrastructure via network traffic, as opposed to other forms of reconnaissance that do not involve direct interaction.

Adversaries may perform different forms of active scanning depending on what information they seek to gather. These scans can also be performed in various ways, including using native features of network protocols such as ICMP.[^fn1][^fn2] Information from these scans may reveal opportunities for other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Exploit Public-Facing Application](https://attack.mitre.org/techniques/T1190)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Vulnerability Scanning (T1595.002)|Vulnerability Scanning]]
- [[../Techniques/Wordlist Scanning (T1595.003)|Wordlist Scanning]]
- [[../Techniques/Scanning IP Blocks (T1595.001)|Scanning IP Blocks]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1595](https://attack.mitre.org/techniques/T1595)

[^fn1]: [Dainotti, A. et al. (2012). Analysis of a “/0” Stealth Scan from a Botnet. Retrieved October 20, 2020.](https://www.caida.org/publications/papers/2012/analysis_slash_zero/analysis_slash_zero.pdf)
[^fn2]: [OWASP Wiki. (2018, February 16). OAT-004 Fingerprinting. Retrieved October 20, 2020.](https://wiki.owasp.org/index.php/OAT-004_Fingerprinting)