---
mitre_data:
  id: T1583
  linker_tags:
  - mitre/attack/linker/resource_development/acquire_infrastructure
  name: Acquire Infrastructure
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Acquire Infrastructure (`T1583`)

Adversaries may buy, lease, rent, or obtain infrastructure that can be used during targeting. A wide variety of infrastructure exists for hosting and orchestrating adversary operations. Infrastructure solutions include physical or cloud servers, domains, and third-party web services.[^fn6] Some infrastructure providers offer free trial periods, enabling infrastructure acquisition at limited to no cost.[^fn4] Additionally, botnets are available for rent or purchase.

Use of these infrastructure solutions allows adversaries to stage, launch, and execute operations. Solutions may help adversary operations blend in with traffic that is seen as normal, such as contacting third-party web services or acquiring infrastructure to support [Proxy](https://attack.mitre.org/techniques/T1090), including from residential proxy services.[^fn1][^fn3][^fn2] Depending on the implementation, adversaries may use infrastructure that makes it difficult to physically tie back to them as well as utilize infrastructure that can be rapidly provisioned, modified, and shut down.


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Serverless (T1583.007)|Serverless]]
- [[../Techniques/Malvertising (T1583.008)|Malvertising]]
- [[../Techniques/DNS Server (T1583.002)|DNS Server]]
- [[../Techniques/Botnet (T1583.005)|Botnet]]
- [[../Techniques/Domains (T1583.001)|Domains]]
- [[../Techniques/Server (T1583.004)|Server]]
- [[../Techniques/Virtual Private Server (T1583.003)|Virtual Private Server]]
- [[../Techniques/Web Services (T1583.006)|Web Services]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1583](https://attack.mitre.org/techniques/T1583)
- [Koczwara, M. (2021, September 7). Hunting Cobalt Strike C2 with Shodan. Retrieved October 12, 2021.](https://michaelkoczwara.medium.com/cobalt-strike-c2-hunting-with-shodan-c448d501a6e2)
- [Stephens, A. (2020, July 13). SCANdalous! (External Detection Using Network Scan Data and Automation). Retrieved November 17, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/scandalous-external-detection-using-network-scan-data-and-automation/)
- [ThreatConnect. (2020, December 15). Infrastructure Research and Hunting: Boiling the Domain Ocean. Retrieved October 12, 2021.](https://threatconnect.com/blog/infrastructure-research-hunting/)

[^fn1]: [Amnesty International Security Lab. (2021, July 18). Forensic Methodology Report: How to catch NSO Group’s Pegasus. Retrieved February 22, 2022.](https://www.amnesty.org/en/latest/research/2021/07/forensic-methodology-report-how-to-catch-nso-groups-pegasus/)
[^fn2]: [Douglas Bienstock. (2022, August 18). You Can’t Audit Me: APT29 Continues Targeting Microsoft 365. Retrieved February 23, 2023.](https://www.mandiant.com/resources/blog/apt29-continues-targeting-microsoft)
[^fn3]: [FBI. (2022, August 18). Proxies and Configurations Used for Credential Stuffing Attacks on Online Customer Accounts . Retrieved July 6, 2023.](https://www.ic3.gov/Media/News/2022/220818.pdf)
[^fn4]: [Gamazo, William. Quist, Nathaniel.. (2023, January 5). PurpleUrchin Bypasses CAPTCHA and Steals Cloud Platform Resources. Retrieved February 28, 2024.](https://unit42.paloaltonetworks.com/purpleurchin-steals-cloud-resources/)
[^fn6]: [Max Goncharov. (2015, July 15). Criminal Hideouts for Lease: Bulletproof Hosting Services. Retrieved March 6, 2017.](https://documents.trendmicro.com/assets/wp/wp-criminal-hideouts-for-lease.pdf)