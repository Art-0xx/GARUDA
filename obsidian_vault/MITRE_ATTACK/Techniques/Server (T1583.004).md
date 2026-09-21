---
mitre_data:
  id: T1583.004
  linker_tags:
  - mitre/attack/linker/resource_development/server
  name: Server
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Server (`T1583.004`)

Adversaries may buy, lease, rent, or obtain physical servers that can be used during targeting. Use of servers allows an adversary to stage, launch, and execute an operation. During post-compromise activity, adversaries may utilize servers for various tasks, such as watering hole operations in [Drive-by Compromise](https://attack.mitre.org/techniques/T1189), enabling [Phishing](https://attack.mitre.org/techniques/T1566) operations, or facilitating [Command and Control](https://attack.mitre.org/tactics/TA0011). Instead of compromising a third-party [Server](https://attack.mitre.org/techniques/T1584/004) or renting a [Virtual Private Server](https://attack.mitre.org/techniques/T1583/003), adversaries may opt to configure and run their own servers in support of operations. Free trial periods of cloud servers may also be abused.[^fn2][^fn1] 

Adversaries may only need a lightweight setup if most of their activities will take place using online infrastructure. Or, they may need to build extensive infrastructure if they want to test, communicate, and control other aspects of their activities on their own systems.[^fn6]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Acquire Infrastructure (T1583)|Acquire Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1583.004](https://attack.mitre.org/techniques/T1583/004)
- [Koczwara, M. (2021, September 7). Hunting Cobalt Strike C2 with Shodan. Retrieved October 12, 2021.](https://michaelkoczwara.medium.com/cobalt-strike-c2-hunting-with-shodan-c448d501a6e2)
- [Stephens, A. (2020, July 13). SCANdalous! (External Detection Using Network Scan Data and Automation). Retrieved November 17, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/scandalous-external-detection-using-network-scan-data-and-automation/)
- [ThreatConnect. (2020, December 15). Infrastructure Research and Hunting: Boiling the Domain Ocean. Retrieved October 12, 2021.](https://threatconnect.com/blog/infrastructure-research-hunting/)

[^fn1]: [Clark, Michael. (2023, August 14). Google’s Vertex AI Platform Gets Freejacked. Retrieved February 28, 2024.](https://sysdig.com/blog/googles-vertex-ai-platform-freejacked/)
[^fn2]: [Gamazo, William. Quist, Nathaniel.. (2023, January 5). PurpleUrchin Bypasses CAPTCHA and Steals Cloud Platform Resources. Retrieved February 28, 2024.](https://unit42.paloaltonetworks.com/purpleurchin-steals-cloud-resources/)
[^fn6]: [William J. Broad, John Markoff, and David E. Sanger. (2011, January 15). Israeli Test on Worm Called Crucial in Iran Nuclear Delay. Retrieved March 1, 2017.](https://www.nytimes.com/2011/01/16/world/middleeast/16stuxnet.html)