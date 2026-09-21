---
mitre_data:
  id: T1216
  linker_tags:
  - mitre/attack/linker/stealth/system_script_proxy_execution
  name: System Script Proxy Execution
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# System Script Proxy Execution (`T1216`)

Adversaries may use trusted scripts, often signed with certificates, to proxy the execution of malicious files. Several Microsoft signed scripts that have been downloaded from Microsoft or are default on Windows installations can be used to proxy execution of other files.[^fn2] This behavior may be abused by adversaries to execute malicious files that could bypass application control and signature validation on systems.[^fn1]


# Platform(s)

- Windows

# Sub-Technique(s)

- [[../Techniques/PubPrn (T1216.001)|PubPrn]]
- [[../Techniques/SyncAppvPublishingServer (T1216.002)|SyncAppvPublishingServer]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1216](https://attack.mitre.org/techniques/T1216)

[^fn1]: [Moe, O. (2018, March 1). Ultimate AppLocker Bypass List. Retrieved April 10, 2018.](https://github.com/api0cradle/UltimateAppLockerByPassList)
[^fn2]: [Oddvar Moe et al. (2022, February).  Living Off The Land Binaries, Scripts and Libraries. Retrieved March 7, 2022.](https://github.com/LOLBAS-Project/LOLBAS#criteria)