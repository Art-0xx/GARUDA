---
mitre_data:
  id: T1588.002
  linker_tags:
  - mitre/attack/linker/resource_development/tool
  name: Tool
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Tool (`T1588.002`)

Adversaries may buy, steal, or download software tools that can be used during targeting. Tools can be open or closed source, free or commercial. A tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: [PsExec](https://attack.mitre.org/software/S0029)). 

Adversaries may obtain tools to support their operations, including to support execution of post-compromise behaviors. Tools may also be leveraged for testing – for example, evaluating malware against commercial antivirus or endpoint detection and response (EDR) applications.[^fn4][^fn1]

Tool acquisition may involve the procurement of commercial software licenses, including for red teaming tools such as Cobalt Strike. In addition to freely downloading or purchasing software, adversaries may steal software and/or software licenses from third-party entities (including other adversaries). Threat actors may also crack trial versions of software.[^fn3]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Obtain Capabilities (T1588)|Obtain Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1588.002](https://attack.mitre.org/techniques/T1588/002)
- [Maynier, E. (2020, December 20). Analyzing Cobalt Strike for Fun and Profit. Retrieved October 12, 2021.](https://www.randhome.io/blog/2020/12/20/analyzing-cobalt-strike-for-fun-and-profit/)

[^fn1]: [ Tom Hegel, Aleksandar Milenkoski & Jim Walter. (2025, April 28). Top Tier Target | What It Takes to Defend a Cybersecurity Company from Today’s Adversaries. Retrieved May 22, 2025.](https://www.sentinelone.com/labs/top-tier-target-what-it-takes-to-defend-a-cybersecurity-company-from-todays-adversaries/)
[^fn3]: [Recorded Future. (2019, June 20). Out of the Blue: How Recorded Future Identified Rogue Cobalt Strike Servers. Retrieved September 16, 2024.](https://www.recordedfuture.com/blog/identifying-cobalt-strike-servers)
[^fn4]: [Vedere Labs. (2022, March 11). Analysis of Conti Leaks. Retrieved May 22, 2025.](https://www.forescout.com/resources/analysis-of-conti-leaks/)