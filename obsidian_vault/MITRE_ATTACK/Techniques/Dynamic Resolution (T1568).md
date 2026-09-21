---
mitre_data:
  id: T1568
  linker_tags:
  - mitre/attack/linker/command_and_control/dynamic_resolution
  name: Dynamic Resolution
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Dynamic Resolution (`T1568`)

Adversaries may dynamically establish connections to command and control infrastructure to evade common detections and remediations. This may be achieved by using malware that shares a common algorithm with the infrastructure the adversary uses to receive the malware's communications. These calculations can be used to dynamically adjust parameters such as the domain name, IP address, or port number the malware uses for command and control.

Adversaries may use dynamic resolution for the purpose of [Fallback Channels](https://attack.mitre.org/techniques/T1008). When contact is lost with the primary command and control server malware may employ dynamic resolution as a means to reestablishing command and control.[^fn1][^fn2][^fn3]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Domain Generation Algorithms (T1568.002)|Domain Generation Algorithms]]
- [[../Techniques/Fast Flux DNS (T1568.001)|Fast Flux DNS]]
- [[../Techniques/DNS Calculation (T1568.003)|DNS Calculation]]

# Tool(s)

- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Remcos|Remcos]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1568](https://attack.mitre.org/techniques/T1568)
- [Jacobs, J. (2014, October 2). Building a DGA Classifier: Part 2, Feature Engineering. Retrieved February 18, 2019.](https://datadrivensecurity.info/blog/posts/2014/Oct/dga-part2/)

[^fn1]: [Brumaghin, E. et al. (2017, September 18). CCleanup: A Vast Number of Machines at Risk. Retrieved March 9, 2018.](http://blog.talosintelligence.com/2017/09/avast-distributes-malware.html)
[^fn2]: [Dunwoody, M.. (2017, April 3). Dissecting One of APT29’s Fileless WMI and PowerShell Backdoors (POSHSPY). Retrieved April 5, 2017.](https://www.fireeye.com/blog/threat-research/2017/03/dissecting_one_ofap.html)
[^fn3]: [ESET. (2017, December 21). Sednit update: How Fancy Bear Spent the Year. Retrieved February 18, 2019.](https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/)