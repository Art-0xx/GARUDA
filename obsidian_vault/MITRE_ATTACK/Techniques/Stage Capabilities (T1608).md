---
mitre_data:
  id: T1608
  linker_tags:
  - mitre/attack/linker/resource_development/stage_capabilities
  name: Stage Capabilities
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Stage Capabilities (`T1608`)

Adversaries may upload, install, or otherwise set up capabilities that can be used during targeting. To support their operations, an adversary may need to take capabilities they developed ([Develop Capabilities](https://attack.mitre.org/techniques/T1587)) or obtained ([Obtain Capabilities](https://attack.mitre.org/techniques/T1588)) and stage them on infrastructure under their control. These capabilities may be staged on infrastructure that was previously purchased/rented by the adversary ([Acquire Infrastructure](https://attack.mitre.org/techniques/T1583)) or was otherwise compromised by them ([Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)). Capabilities may also be staged on web services, such as GitHub or Pastebin, or on Platform-as-a-Service (PaaS) offerings that enable users to easily provision applications.[^fn1][^fn8][^fn7][^fn2][^fn3]

Staging of capabilities can aid the adversary in a number of initial access and post-compromise behaviors, including (but not limited to):

* Staging web resources necessary to conduct [Drive-by Compromise](https://attack.mitre.org/techniques/T1189) when a user browses to a site.[^fn9][^fn6][^fn4]
* Staging web resources for a link target to be used with spearphishing.[^fn10][^fn11]
* Uploading malware or tools to a location accessible to a victim network to enable [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105).[^fn1]
* Installing a previously acquired SSL/TLS certificate to use to encrypt command and control traffic (ex: [Asymmetric Cryptography](https://attack.mitre.org/techniques/T1573/002) with [Web Protocols](https://attack.mitre.org/techniques/T1071/001)).[^fn5]


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Drive-by Target (T1608.004)|Drive-by Target]]
- [[../Techniques/Upload Malware (T1608.001)|Upload Malware]]
- [[../Techniques/Upload Tool (T1608.002)|Upload Tool]]
- [[../Techniques/Link Target (T1608.005)|Link Target]]
- [[../Techniques/Install Digital Certificate (T1608.003)|Install Digital Certificate]]
- [[../Techniques/SEO Poisoning (T1608.006)|SEO Poisoning]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1608](https://attack.mitre.org/techniques/T1608)

[^fn1]: [Adair, S. and Lancaster, T. (2020, November 6). OceanLotus: Extending Cyber Espionage Operations Through Fake Websites. Retrieved November 20, 2020.](https://www.volexity.com/blog/2020/11/06/oceanlotus-extending-cyber-espionage-operations-through-fake-websites/)
[^fn2]: [Ashwin Vamshi. (2019, January 24). Targeted Attacks Abusing Google Cloud Platform Open Redirection. Retrieved August 18, 2022.](https://www.netskope.com/blog/targeted-attacks-abusing-google-cloud-platform-open-redirection)
[^fn3]: [Ashwin Vamshi. (2020, August 12). A Big Catch: Cloud Phishing from Google App Engine and Azure App Service. Retrieved August 18, 2022.](https://www.netskope.com/blog/a-big-catch-cloud-phishing-from-google-app-engine-and-azure-app-service)
[^fn4]: [Blasco, J. (2014, August 28). Scanbox: A Reconnaissance Framework Used with Watering Hole Attacks. Retrieved October 19, 2020.](https://cybersecurity.att.com/blogs/labs-research/scanbox-a-reconnaissance-framework-used-on-watering-hole-attacks)
[^fn5]: [DigiCert. (n.d.). How to Install an SSL Certificate. Retrieved April 19, 2021.](https://www.digicert.com/kb/ssl-certificate-installation.htm)
[^fn6]: [Gallagher, S.. (2015, August 5). Newly discovered Chinese hacking group hacked 100+ websites to use as “watering holes”. Retrieved January 25, 2016.](http://arstechnica.com/security/2015/08/newly-discovered-chinese-hacking-group-hacked-100-websites-to-use-as-watering-holes/)
[^fn7]: [Jérôme Segura. (2019, December 4). There's an app for that: web skimmers found on PaaS Heroku. Retrieved August 18, 2022.](https://www.malwarebytes.com/blog/news/2019/12/theres-an-app-for-that-web-skimmers-found-on-paas-heroku)
[^fn8]: [Kent Backman. (2021, May 18). When Intrusions Don’t Align: A New Water Watering Hole and Oldsmar. Retrieved August 18, 2022.](https://www.dragos.com/blog/industry-news/a-new-water-watering-hole/)
[^fn9]: [Kindlund, D. (2012, December 30). CFR Watering Hole Attack Details. Retrieved November 17, 2024.](https://web.archive.org/web/20201024230407/https://www.fireeye.com/blog/threat-research/2012/12/council-foreign-relations-water-hole-attack-details.html)
[^fn10]: [Malwarebytes Threat Intelligence Team. (2020, October 14). Silent Librarian APT right on schedule for 20/21 academic year. Retrieved February 3, 2021.](https://blog.malwarebytes.com/malwarebytes-news/2020/10/silent-librarian-apt-phishing-attack/)
[^fn11]: [Proofpoint Threat Insight Team. (2019, September 5). Threat Actor Profile: TA407, the Silent Librarian. Retrieved February 3, 2021.](https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta407-silent-librarian)