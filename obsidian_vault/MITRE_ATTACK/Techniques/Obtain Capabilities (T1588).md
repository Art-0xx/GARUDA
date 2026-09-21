---
mitre_data:
  id: T1588
  linker_tags:
  - mitre/attack/linker/resource_development/obtain_capabilities
  name: Obtain Capabilities
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Obtain Capabilities (`T1588`)

Adversaries may buy and/or steal capabilities that can be used during targeting. Rather than developing their own capabilities in-house, adversaries may purchase, freely download, or steal them. Activities may include the acquisition of malware, software (including licenses), exploits, certificates, and information relating to vulnerabilities. Adversaries may obtain capabilities to support their operations throughout numerous phases of the adversary lifecycle.

In addition to downloading free malware, software, and exploits from the internet, adversaries may purchase these capabilities from third-party entities. Third-party entities can include technology companies that specialize in malware and exploits, criminal marketplaces, or from individuals.[^fn7][^fn1]

In addition to purchasing capabilities, adversaries may steal capabilities from third-party entities (including other adversaries). This can include stealing software licenses, malware, SSL/TLS and code-signing certificates, or raiding closed databases of vulnerabilities or exploits.[^fn3]


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Artificial Intelligence (T1588.007)|Artificial Intelligence]]
- [[../Techniques/Digital Certificates (T1588.004)|Digital Certificates]]
- [[../Techniques/Vulnerabilities (T1588.006)|Vulnerabilities]]
- [[../Techniques/Malware (T1588.001)|Malware]]
- [[../Techniques/Tool (T1588.002)|Tool]]
- [[../Techniques/Code Signing Certificates (T1588.003)|Code Signing Certificates]]
- [[../Techniques/Exploits (T1588.005)|Exploits]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1588](https://attack.mitre.org/techniques/T1588)
- [FireEye. (2014). SUPPLY CHAIN ANALYSIS: From Quartermaster to SunshopFireEye. Retrieved March 6, 2017.](https://www.mandiant.com/resources/supply-chain-analysis-from-quartermaster-to-sunshop)
- [Insikt Group. (2019, June 18). A Multi-Method Approach to Identifying Rogue Cobalt Strike Servers. Retrieved September 16, 2024.](https://www.recordedfuture.com/research/cobalt-strike-servers)
- [Kovar, R. (2017, December 11). Tall Tales of Hunting with TLS/SSL Certificates. Retrieved October 16, 2020.](https://www.splunk.com/en_us/blog/security/tall-tales-of-hunting-with-tls-ssl-certificates.html)
- [Maynier, E. (2020, December 20). Analyzing Cobalt Strike for Fun and Profit. Retrieved October 12, 2021.](https://www.randhome.io/blog/2020/12/20/analyzing-cobalt-strike-for-fun-and-profit/)

[^fn1]: [Bill Marczak and John Scott-Railton. (2016, August 24). The Million Dollar Dissident: NSO Group’s iPhone Zero-Days used against a UAE Human Rights Defender. Retrieved December 12, 2016.](https://citizenlab.ca/2016/08/million-dollar-dissident-iphone-zero-day-nso-group-uae/)
[^fn3]: [Fisher, D. (2012, October 31). Final Report on DigiNotar Hack Shows Total Compromise of CA Servers. Retrieved March 6, 2017.](https://threatpost.com/final-report-diginotar-hack-shows-total-compromise-ca-servers-103112/77170/)
[^fn7]: [Nicole Perlroth and David E. Sanger. (2013, July 12). Nations Buying as Hackers Sell Flaws in Computer Code. Retrieved March 9, 2017.](https://www.nytimes.com/2013/07/14/world/europe/nations-buying-as-hackers-sell-computer-flaws.html)