---
mitre_data:
  id: T1596.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/dns_passive_dns
  name: DNS/Passive DNS
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# DNS/Passive DNS (`T1596.001`)

Adversaries may search DNS data for information about victims that can be used during targeting. DNS information may include a variety of details, including registered name servers as well as records that outline addressing for a target’s subdomains, mail servers, and other hosts.

Adversaries may search DNS data to gather actionable information. Threat actors can query nameservers for a target organization directly, or search through centralized repositories of logged DNS query responses (known as passive DNS).[^fn2][^fn1] Adversaries may also seek and target DNS misconfigurations/leaks that reveal information about internal networks. Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) or [Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Trusted Relationship](https://attack.mitre.org/techniques/T1199)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Search Open Technical Databases (T1596)|Search Open Technical Databases]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1596.001](https://attack.mitre.org/techniques/T1596/001)

[^fn1]: [CIRCL Computer Incident Response Center. (n.d.). Passive DNS. Retrieved October 20, 2020.](https://www.circl.lu/services/passive-dns/)
[^fn2]: [Hacker Target. (n.d.). DNS Dumpster. Retrieved October 20, 2020.](https://dnsdumpster.com/)