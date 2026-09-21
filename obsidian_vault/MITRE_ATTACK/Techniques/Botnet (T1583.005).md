---
mitre_data:
  id: T1583.005
  linker_tags:
  - mitre/attack/linker/resource_development/botnet
  name: Botnet
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Botnet (`T1583.005`)

Adversaries may buy, lease, or rent a network of compromised systems that can be used during targeting. A botnet is a network of compromised systems that can be instructed to perform coordinated tasks.[^fn5] Adversaries may purchase a subscription to use an existing botnet from a booter/stresser service. 

Internet-facing edge devices and related network appliances that are end-of-life (EOL) and unsupported by their manufacturers are commonly acquired for botnet activities. Adversaries may lease operational relay box (ORB) networks – consisting of virtual private servers (VPS), small office/home office (SOHO) routers, or Internet of Things (IoT) devices – to serve as a botnet.[^fn6] 

With a botnet at their disposal, adversaries may perform follow-on activity such as large-scale [Phishing](https://attack.mitre.org/techniques/T1566) or Distributed Denial of Service (DDoS).[^fn4][^fn3][^fn2][^fn1] Acquired botnets may also be used to support Command and Control activity, such as [Hide Infrastructure](https://attack.mitre.org/techniques/T1665) through an established [Proxy](https://attack.mitre.org/techniques/T1090) network.




# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Acquire Infrastructure (T1583)|Acquire Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1583.005](https://attack.mitre.org/techniques/T1583/005)

[^fn1]: [Brian Krebs. (2016, October 27). Are the Days of “Booter” Services Numbered?. Retrieved May 15, 2017.](https://krebsonsecurity.com/2016/10/are-the-days-of-booter-services-numbered/)
[^fn2]: [Brian Krebs. (2016, October 31). Hackforums Shutters Booter Service Bazaar. Retrieved May 15, 2017.](https://krebsonsecurity.com/2016/10/hackforums-shutters-booter-service-bazaar/)
[^fn3]: [Brian Krebs. (2017, January 18). Who is Anna-Senpai, the Mirai Worm Author?. Retrieved May 15, 2017.](https://krebsonsecurity.com/2017/01/who-is-anna-senpai-the-mirai-worm-author/)
[^fn4]: [Imperva. (n.d.). Booters, Stressers and DDoSers. Retrieved October 4, 2020.](https://www.imperva.com/learn/ddos/booters-stressers-ddosers/)
[^fn5]: [Norton. (n.d.). What is a botnet?. Retrieved October 4, 2020.](https://us.norton.com/internetsecurity-malware-what-is-a-botnet.html)
[^fn6]: [Raggi, Michael. (2024, May 22). IOC Extinction? China-Nexus Cyber Espionage Actors Use ORB Networks to Raise Cost on Defenders. Retrieved July 8, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/china-nexus-espionage-orb-networks)