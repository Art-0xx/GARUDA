---
mitre_data:
  id: T1592.003
  linker_tags:
  - mitre/attack/linker/reconnaissance/firmware
  name: Firmware
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Firmware (`T1592.003`)

Adversaries may gather information about the victim's host firmware that can be used during targeting. Information about host firmware may include a variety of details such as type and versions on specific hosts, which may be used to infer more information about hosts in the environment (ex: configuration, purpose, age/patch level, etc.).

Adversaries may gather this information in various ways, such as direct elicitation via [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about host firmware may only be exposed to adversaries via online or other accessible data sets (ex: job postings, network maps, assessment reports, resumes, or purchase invoices).[^fn1] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [Supply Chain Compromise](https://attack.mitre.org/techniques/T1195) or [Exploit Public-Facing Application](https://attack.mitre.org/techniques/T1190)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Host Information (T1592)|Gather Victim Host Information]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1592.003](https://attack.mitre.org/techniques/T1592/003)

[^fn1]: [Goodin, D. & Salter, J. (2020, August 6). More than 20GB of Intel source code and proprietary data dumped online. Retrieved October 20, 2020.](https://arstechnica.com/information-technology/2020/08/intel-is-investigating-the-leak-of-20gb-of-its-source-code-and-private-data/)