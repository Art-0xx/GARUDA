---
tags:
  - mitre/attack/tool
---

# ngrok (`S0508`)

[ngrok](https://attack.mitre.org/software/S0508) is a legitimate reverse proxy tool that can create a secure tunnel to servers located behind firewalls or on local machines that do not have a public IP. [ngrok](https://attack.mitre.org/software/S0508) has been leveraged by threat actors in several campaigns including use for lateral movement and data exfiltration.[^fn1][^fn4][^fn2][^fn3]



# Platform(s)

- Windows

# Techniques Used

## Proxy

[ngrok](https://attack.mitre.org/software/S0508) can be used to proxy connections to machines located behind NAT or firewalls.[\[MalwareBytes Ngrok February 2020\]](https://blog.malwarebytes.com/threat-analysis/2020/02/fraudsters-cloak-credit-card-skimmer-with-fake-content-delivery-network-ngrok-server/)[\[Zdnet Ngrok September 2018\]](https://www.zdnet.com/article/sly-malware-author-hides-cryptomining-botnet-behind-ever-shifting-proxy-service/)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Exfiltration Over Web Service

[ngrok](https://attack.mitre.org/software/S0508) has been used by threat actors to configure servers for data exfiltration.[\[MalwareBytes Ngrok February 2020\]](https://blog.malwarebytes.com/threat-analysis/2020/02/fraudsters-cloak-credit-card-skimmer-with-fake-content-delivery-network-ngrok-server/)

- *Technique:* [[../Techniques/Exfiltration Over Web Service (T1567)|Exfiltration Over Web Service]]

## Domain Generation Algorithms

[ngrok](https://attack.mitre.org/software/S0508) can provide DGA for C2 servers through the use of random URL strings that change every 12 hours.[\[Zdnet Ngrok September 2018\]](https://www.zdnet.com/article/sly-malware-author-hides-cryptomining-botnet-behind-ever-shifting-proxy-service/)

- *Technique:* [[../Techniques/Domain Generation Algorithms (T1568.002)|Domain Generation Algorithms]]

## Web Service

[ngrok](https://attack.mitre.org/software/S0508) has been used by threat actors to proxy C2 connections to ngrok service subdomains.[\[Zdnet Ngrok September 2018\]](https://www.zdnet.com/article/sly-malware-author-hides-cryptomining-botnet-behind-ever-shifting-proxy-service/)

- *Technique:* [[../Techniques/Web Service (T1102)|Web Service]]

## Protocol Tunneling

[ngrok](https://attack.mitre.org/software/S0508) can tunnel RDP and other services securely over internet connections.[\[FireEye Maze May 2020\]](https://www.fireeye.com/blog/threat-research/2020/05/tactics-techniques-procedures-associated-with-maze-ransomware-incidents.html)[\[Cyware Ngrok May 2019\]](https://cyware.com/news/cyber-attackers-leverage-tunneling-service-to-drop-lokibot-onto-victims-systems-6f610e44)[\[MalwareBytes Ngrok February 2020\]](https://blog.malwarebytes.com/threat-analysis/2020/02/fraudsters-cloak-credit-card-skimmer-with-fake-content-delivery-network-ngrok-server/)[\[Trend Micro Ngrok September 2020\]](https://www.trendmicro.com/en_us/research/20/i/analysis-of-a-convoluted-attack-chain-involving-ngrok.html)

- *Technique:* [[../Techniques/Protocol Tunneling (T1572)|Protocol Tunneling]]


# External References(s)

- [S0508](https://attack.mitre.org/software/S0508)

[^fn1]: [Cimpanu, C. (2018, September 13). Sly malware author hides cryptomining botnet behind ever-shifting proxy service. Retrieved September 15, 2020.](https://www.zdnet.com/article/sly-malware-author-hides-cryptomining-botnet-behind-ever-shifting-proxy-service/)
[^fn2]: [Cyware. (2019, May 29). Cyber attackers leverage tunneling service to drop Lokibot onto victims’ systems. Retrieved September 15, 2020.](https://cyware.com/news/cyber-attackers-leverage-tunneling-service-to-drop-lokibot-onto-victims-systems-6f610e44)
[^fn3]: [Jazi, H. (2021, February). LazyScripter: From Empire to double RAT. Retrieved November 17, 2024.](https://web.archive.org/web/20211003035156/https://www.malwarebytes.com/resources/files/2021/02/lazyscripter.pdf)
[^fn4]: [Kennelly, J., Goody, K., Shilko, J. (2020, May 7). Navigating the MAZE: Tactics, Techniques and Procedures Associated With MAZE Ransomware Incidents. Retrieved May 18, 2020.](https://www.fireeye.com/blog/threat-research/2020/05/tactics-techniques-procedures-associated-with-maze-ransomware-incidents.html)