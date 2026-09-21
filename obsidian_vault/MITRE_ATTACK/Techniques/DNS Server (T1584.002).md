---
mitre_data:
  id: T1584.002
  linker_tags:
  - mitre/attack/linker/resource_development/dns_server
  name: DNS Server
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# DNS Server (`T1584.002`)

Adversaries may compromise third-party DNS servers that can be used during targeting. During post-compromise activity, adversaries may utilize DNS traffic for various tasks, including for Command and Control (ex: [Application Layer Protocol](https://attack.mitre.org/techniques/T1071)). Instead of setting up their own DNS servers, adversaries may compromise third-party DNS servers in support of operations.

By compromising DNS servers, adversaries can alter DNS records. Such control can allow for redirection of an organization's traffic, facilitating Collection and Credential Access efforts for the adversary.[^fn3][^fn1]  Additionally, adversaries may leverage such control in conjunction with [Digital Certificates](https://attack.mitre.org/techniques/T1588/004) to redirect traffic to adversary-controlled infrastructure, mimicking normal trusted network communications.[^fn1][^fn2] Alternatively, they may be able to prove ownership of a domain to a SaaS service in order to assert control of the service or create a new administrative [Cloud Account](https://attack.mitre.org/techniques/T1136/003).[^fn6] Adversaries may also be able to silently create subdomains pointed at malicious servers without tipping off the actual owner of the DNS server.[^fn4][^fn5]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Compromise Infrastructure (T1584)|Compromise Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1584.002](https://attack.mitre.org/techniques/T1584/002)

[^fn1]: [Hirani, M., Jones, S., Read, B. (2019, January 10). Global DNS Hijacking Campaign: DNS Record Manipulation at Scale. Retrieved October 9, 2020.](https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html)
[^fn2]: [Matt Dahl. (2019, January 25). Widespread DNS Hijacking Activity Targets Multiple Sectors. Retrieved February 14, 2022.](https://www.crowdstrike.com/blog/widespread-dns-hijacking-activity-targets-multiple-sectors/)
[^fn3]: [Mercer, W., Rascagneres, P. (2018, November 27). DNSpionage Campaign Targets Middle East. Retrieved October 9, 2020.](https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html)
[^fn4]: [Nick Biasini. (2015, March 3). Threat Spotlight: Angler Lurking in the Domain Shadows. Retrieved March 6, 2017.](https://blogs.cisco.com/security/talos/angler-domain-shadowing)
[^fn5]: [Proofpoint Staff. (2015, December 15). The shadow knows: Malvertising campaigns use domain shadowing to pull in Angler EK. Retrieved October 16, 2020.](https://www.proofpoint.com/us/threat-insight/post/The-Shadow-Knows)
[^fn6]: [Tony Mau. (2025, May 29). Keys to the (SaaS) kingdom. Retrieved May 30, 2025.](https://cybercx.com.au/blog/keys-to-the-saas-kingdom/)