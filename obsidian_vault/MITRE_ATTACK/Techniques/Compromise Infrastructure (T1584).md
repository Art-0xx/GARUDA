---
mitre_data:
  id: T1584
  linker_tags:
  - mitre/attack/linker/resource_development/compromise_infrastructure
  name: Compromise Infrastructure
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Compromise Infrastructure (`T1584`)

Adversaries may compromise third-party infrastructure that can be used during targeting. Infrastructure solutions include physical or cloud servers, domains, network devices, and third-party web and DNS services. Instead of buying, leasing, or renting infrastructure an adversary may compromise infrastructure and use it during other phases of the adversary lifecycle.[^fn7][^fn4][^fn8][^fn12] Additionally, adversaries may compromise numerous machines to form a botnet they can leverage.

Use of compromised infrastructure allows adversaries to stage, launch, and execute operations. Compromised infrastructure can help adversary operations blend in with traffic that is seen as normal, such as contact with high reputation or trusted sites. For example, adversaries may leverage compromised infrastructure (potentially also in conjunction with [Digital Certificates](https://attack.mitre.org/techniques/T1588/004)) to further blend in and support staged information gathering and/or [Phishing](https://attack.mitre.org/techniques/T1566) campaigns.[^fn3] Adversaries may also compromise numerous machines to support [Proxy](https://attack.mitre.org/techniques/T1090) and/or proxyware services or to form a botnet.[^fn1][^fn2] Additionally, adversaries may compromise infrastructure residing in close proximity to a target in order to gain [Initial Access](https://attack.mitre.org/tactics/TA0001) via [Wi-Fi Networks](https://attack.mitre.org/techniques/T1669).[^fn6]

By using compromised infrastructure, adversaries may enable follow-on malicious operations. Prior to targeting, adversaries may also compromise the infrastructure of other adversaries.[^fn9]


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Network Devices (T1584.008)|Network Devices]]
- [[../Techniques/Virtual Private Server (T1584.003)|Virtual Private Server]]
- [[../Techniques/Botnet (T1584.005)|Botnet]]
- [[../Techniques/Web Services (T1584.006)|Web Services]]
- [[../Techniques/DNS Server (T1584.002)|DNS Server]]
- [[../Techniques/Serverless (T1584.007)|Serverless]]
- [[../Techniques/Server (T1584.004)|Server]]
- [[../Techniques/Domains (T1584.001)|Domains]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1584](https://attack.mitre.org/techniques/T1584)
- [Koczwara, M. (2021, September 7). Hunting Cobalt Strike C2 with Shodan. Retrieved October 12, 2021.](https://michaelkoczwara.medium.com/cobalt-strike-c2-hunting-with-shodan-c448d501a6e2)
- [Stephens, A. (2020, July 13). SCANdalous! (External Detection Using Network Scan Data and Automation). Retrieved November 17, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/scandalous-external-detection-using-network-scan-data-and-automation/)
- [ThreatConnect. (2020, December 15). Infrastructure Research and Hunting: Boiling the Domain Ocean. Retrieved October 12, 2021.](https://threatconnect.com/blog/infrastructure-research-hunting/)

[^fn1]: [Amnesty International Security Lab. (2021, July 18). Forensic Methodology Report: How to catch NSO Group’s Pegasus. Retrieved February 22, 2022.](https://www.amnesty.org/en/latest/research/2021/07/forensic-methodology-report-how-to-catch-nso-groups-pegasus/)
[^fn2]: [Crystal Morin. (2023, April 4). Proxyjacking has Entered the Chat. Retrieved July 6, 2023.](https://sysdig.com/blog/proxyjacking-attackers-log4j-exploited/)
[^fn3]: [Hirani, M., Jones, S., Read, B. (2019, January 10). Global DNS Hijacking Campaign: DNS Record Manipulation at Scale. Retrieved October 9, 2020.](https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html)
[^fn4]: [ICANN Security and Stability Advisory Committee. (2005, July 12). Domain Name Hijacking: Incidents, Threats, Risks and Remediation. Retrieved November 17, 2024.](https://www.icann.org/en/ssac/registration-services/documents/sac-007-domain-name-hijacking-incidents-threats-risks-and-remediation-12-07-2005-en)
[^fn6]: [Koessel, Sean. Adair, Steven. Lancaster, Tom. (2024, November 22). The Nearest Neighbor Attack: How A Russian APT Weaponized Nearby Wi-Fi Networks for Covert Access. Retrieved February 25, 2025.](https://www.volexity.com/blog/2024/11/22/the-nearest-neighbor-attack-how-a-russian-apt-weaponized-nearby-wi-fi-networks-for-covert-access/)
[^fn7]: [Mandiant. (n.d.). APT1 Exposing One of China’s Cyber Espionage Units. Retrieved July 18, 2016.](https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf)
[^fn8]: [Mercer, W., Rascagneres, P. (2018, November 27). DNSpionage Campaign Targets Middle East. Retrieved October 9, 2020.](https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html)
[^fn9]: [NSA/NCSC. (2019, October 21). Cybersecurity Advisory: Turla Group Exploits Iranian APT To Expand Coverage Of Victims. Retrieved October 16, 2020.](https://media.defense.gov/2019/Oct/18/2002197242/-1/-1/0/NSA_CSA_Turla_20191021%20ver%204%20-%20nsa.gov.pdf)
[^fn12]: [Winters, R. (2015, December 20). The EPS Awakens - Part 2. Retrieved January 22, 2016.](https://web.archive.org/web/20151226205946/https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html)