---
mitre_data:
  id: T1195
  linker_tags:
  - mitre/attack/linker/initial_access/supply_chain_compromise
  name: Supply Chain Compromise
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Supply Chain Compromise (`T1195`)

Adversaries may manipulate products or product delivery mechanisms prior to receipt by a final consumer for the purpose of data or system compromise.

Supply chain compromise can take place at any stage of the supply chain including:

* Manipulation of development tools
* Manipulation of a development environment
* Manipulation of source code repositories (public or private)
* Manipulation of source code in open-source dependencies
* Manipulation of software update/distribution mechanisms
* Compromised/infected system images (removable media infected at the factory)[^fn4][^fn6] 
* Replacement of legitimate software with modified versions
* Sales of modified/counterfeit products to legitimate distributors
* Shipment interdiction

While supply chain compromise can impact any component of hardware or software, adversaries looking to gain execution have often focused on malicious additions to legitimate software in software distribution or update channels.[^fn1][^fn8][^fn3] Adversaries may limit targeting to a desired victim set or distribute malicious software to a broad set of consumers but only follow up with specific victims.[^fn5][^fn1][^fn3] Popular open-source projects that are used as dependencies in many applications may also be targeted as a means to add malicious code to users of the dependency.[^fn7]

In some cases, adversaries may conduct “second-order” supply chain compromises by leveraging the access gained from an initial supply chain compromise to further compromise a software component.[^fn2] This may allow the threat actor to spread to even more victims.  


# Platform(s)

- Linux
- Windows
- macOS
- SaaS

# Sub-Technique(s)

- [[../Techniques/Compromise Software Dependencies and Development Tools (T1195.001)|Compromise Software Dependencies and Development Tools]]
- [[../Techniques/Compromise Hardware Supply Chain (T1195.003)|Compromise Hardware Supply Chain]]
- [[../Techniques/Compromise Software Supply Chain (T1195.002)|Compromise Software Supply Chain]]

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1195](https://attack.mitre.org/techniques/T1195)

[^fn1]: [Avast Threat Intelligence Team. (2018, March 8). New investigations into the CCleaner incident point to a possible third stage that had keylogger capacities. Retrieved March 15, 2018.](https://blog.avast.com/new-investigations-in-ccleaner-incident-point-to-a-possible-third-stage-that-had-keylogger-capacities)
[^fn2]: [Brian Krebs. (2023, April 20). 3CX Breach Was a Double Supply Chain Compromise. Retrieved May 22, 2025.](https://krebsonsecurity.com/2023/04/3cx-breach-was-a-double-supply-chain-compromise/)
[^fn3]: [Command Five Pty Ltd. (2011, September). SK Hack by an Advanced Persistent Threat. Retrieved November 17, 2024.](https://web.archive.org/web/20160309235002/https://www.commandfive.com/papers/C5_APT_SKHack.pdf)
[^fn4]: [IBM Support. (2017, April 26). Storwize USB Initialization Tool may contain malicious code. Retrieved May 28, 2019.](https://www-01.ibm.com/support/docview.wss?uid=ssg1S1010146&myns=s028&mynp=OCSTHGUJ&mynp=OCSTLM5A&mynp=OCSTLM6B&mynp=OCHW206&mync=E&cm_sp=s028-_-OCSTHGUJ-OCSTLM5A-OCSTLM6B-OCHW206-_-E)
[^fn5]: [O'Gorman, G., and McDonald, G.. (2012, September 6). The Elderwood Project. Retrieved November 17, 2024.](https://web.archive.org/web/20190717233006/http:/www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the-elderwood-project.pdf)
[^fn6]: [Schneider Electric. (2018, August 24). Security Notification – USB Removable Media Provided With Conext Combox and Conext Battery Monitor. Retrieved May 28, 2019.](https://www.se.com/us/en/download/document/SESN-2018-236-01/)
[^fn7]: [Trendmicro. (2018, November 29). Hacker Infects Node.js Package to Steal from Bitcoin Wallets. Retrieved April 10, 2019.](https://www.trendmicro.com/vinfo/dk/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets)
[^fn8]: [Windows Defender Research. (2018, March 7). Behavior monitoring combined with machine learning spoils a massive Dofoil coin mining campaign. Retrieved March 20, 2018.](https://cloudblogs.microsoft.com/microsoftsecure/2018/03/07/behavior-monitoring-combined-with-machine-learning-spoils-a-massive-dofoil-coin-mining-campaign/)