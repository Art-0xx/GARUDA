---
mitre_data:
  id: T1596.003
  linker_tags:
  - mitre/attack/linker/reconnaissance/digital_certificates
  name: Digital Certificates
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Digital Certificates (`T1596.003`)

Adversaries may search public digital certificate data for information about victims that can be used during targeting. Digital certificates are issued by a certificate authority (CA) in order to cryptographically verify the origin of signed content. These certificates, such as those used for encrypted web traffic (HTTPS SSL/TLS communications), contain information about the registered organization such as name and location.

Adversaries may search digital certificate data to gather actionable information. Threat actors can use online resources and lookup tools to harvest information about certificates.[^fn2] Digital certificate data may also be available from artifacts signed by the organization (ex: certificates used from encrypted web traffic are served with content).[^fn1] Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Phishing for Information](https://attack.mitre.org/techniques/T1598)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Trusted Relationship](https://attack.mitre.org/techniques/T1199)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Search Open Technical Databases (T1596)|Search Open Technical Databases]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1596.003](https://attack.mitre.org/techniques/T1596/003)

[^fn1]: [Jain, M. (2019, September 16). Export & Download — SSL Certificate from Server (Site URL). Retrieved October 20, 2020.](https://medium.com/@menakajain/export-download-ssl-certificate-from-server-site-url-bcfc41ea46a2)
[^fn2]: [SSL Shopper. (n.d.). SSL Checker. Retrieved October 20, 2020.](https://www.sslshopper.com/ssl-checker.html)