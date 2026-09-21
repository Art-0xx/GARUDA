---
mitre_data:
  id: T1587
  linker_tags:
  - mitre/attack/linker/resource_development/develop_capabilities
  name: Develop Capabilities
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Develop Capabilities (`T1587`)

Adversaries may build capabilities that can be used during targeting. Rather than purchasing, freely downloading, or stealing capabilities, adversaries may develop their own capabilities in-house. This is the process of identifying development requirements and building solutions such as malware, exploits, and self-signed certificates. Adversaries may develop capabilities to support their operations throughout numerous phases of the adversary lifecycle.[^fn3][^fn1][^fn5][^fn4]

As with legitimate development efforts, different skill sets may be required for developing capabilities. The skills needed may be located in-house, or may need to be contracted out. Use of a contractor may be considered an extension of that adversary's development capabilities, provided the adversary plays a role in shaping requirements and maintains a degree of exclusivity to the capability.


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Digital Certificates (T1587.003)|Digital Certificates]]
- [[../Techniques/Malware (T1587.001)|Malware]]
- [[../Techniques/Code Signing Certificates (T1587.002)|Code Signing Certificates]]
- [[../Techniques/Exploits (T1587.004)|Exploits]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1587](https://attack.mitre.org/techniques/T1587)
- [Kovar, R. (2017, December 11). Tall Tales of Hunting with TLS/SSL Certificates. Retrieved October 16, 2020.](https://www.splunk.com/en_us/blog/security/tall-tales-of-hunting-with-tls-ssl-certificates.html)

[^fn1]: [Kaspersky Lab's Global Research and Analysis Team. (2015, December 4). Sofacy APT hits high profile targets with updated toolset. Retrieved December 10, 2015.](https://securelist.com/sofacy-apt-hits-high-profile-targets-with-updated-toolset/72924/)
[^fn3]: [Mandiant. (n.d.). APT1 Exposing One of China’s Cyber Espionage Units. Retrieved July 18, 2016.](https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf)
[^fn4]: [Mercer, W. et al. (2020, June 29). PROMETHIUM extends global reach with StrongPity3 APT. Retrieved July 20, 2020.](https://blog.talosintelligence.com/2020/06/promethium-extends-with-strongpity3.html)
[^fn5]: [Tudorica, R. et al. (2020, June 30). StrongPity APT - Revealing Trojanized Tools, Working Hours and Infrastructure. Retrieved July 20, 2020.](https://www.bitdefender.com/files/News/CaseStudies/study/353/Bitdefender-Whitepaper-StrongPity-APT.pdf)