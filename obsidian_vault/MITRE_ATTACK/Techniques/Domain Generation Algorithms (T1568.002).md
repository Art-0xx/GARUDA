---
mitre_data:
  id: T1568.002
  linker_tags:
  - mitre/attack/linker/command_and_control/domain_generation_algorithms
  name: Domain Generation Algorithms
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Domain Generation Algorithms (`T1568.002`)

Adversaries may make use of Domain Generation Algorithms (DGAs) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static IP addresses or domains. This has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.[^fn9][^fn8][^fn10]

DGAs can take the form of apparently random or “gibberish” strings (ex: istgmxdejdnxuyla.ru) when they construct domain names by generating each letter. Alternatively, some DGAs employ whole words as the unit by concatenating words together instead of letters (ex: cityjulydish.net). Many DGAs are time-based, generating a different domain for each time period (hourly, daily, monthly, etc). Others incorporate a seed value as well to make predicting future domains more difficult for defenders.[^fn9][^fn8][^fn2][^fn7]

Adversaries may use DGAs for the purpose of [Fallback Channels](https://attack.mitre.org/techniques/T1008). When contact is lost with the primary command and control server malware may employ a DGA as a means to reestablishing command and control.[^fn2][^fn4][^fn5]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Dynamic Resolution (T1568)|Dynamic Resolution]]

# Tool(s)

- [[../Tools/ngrok|ngrok]]
- [[../Tools/AsyncRAT|AsyncRAT]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1568.002](https://attack.mitre.org/techniques/T1568/002)
- [Ahuja, A., Anderson, H., Grant, D., Woodbridge, J.. (2016, November 2). Predicting Domain Generation Algorithms with Long Short-Term Memory Networks. Retrieved April 26, 2019.](https://arxiv.org/pdf/1611.00791.pdf)
- [Chen, L., Wang, T.. (2017, May 5). Detecting Algorithmically Generated Domains Using Data Visualization and N-Grams Methods . Retrieved April 26, 2019.](http://csis.pace.edu/~ctappert/srd2017/2017PDF/d4.pdf)
- [Jacobs, J. (2014, October 2). Building a DGA Classifier: Part 2, Feature Engineering. Retrieved February 18, 2019.](https://datadrivensecurity.info/blog/posts/2014/Oct/dga-part2/)

[^fn2]: [Brumaghin, E. et al. (2017, September 18). CCleanup: A Vast Number of Machines at Risk. Retrieved March 9, 2018.](http://blog.talosintelligence.com/2017/09/avast-distributes-malware.html)
[^fn4]: [Dunwoody, M.. (2017, April 3). Dissecting One of APT29’s Fileless WMI and PowerShell Backdoors (POSHSPY). Retrieved April 5, 2017.](https://www.fireeye.com/blog/threat-research/2017/03/dissecting_one_ofap.html)
[^fn5]: [ESET. (2017, December 21). Sednit update: How Fancy Bear Spent the Year. Retrieved February 18, 2019.](https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/)
[^fn7]: [Liu, H. and Yuzifovich, Y. (2018, January 9). A Death Match of Domain Generation Algorithms. Retrieved February 18, 2019.](https://medium.com/@yvyuz/a-death-match-of-domain-generation-algorithms-a5b5dbdc1c6e)
[^fn8]: [Scarfo, A. (2016, October 10). Domain Generation Algorithms – Why so effective?. Retrieved February 18, 2019.](https://umbrella.cisco.com/blog/2016/10/10/domain-generation-algorithms-effective/)
[^fn9]: [Sternfeld, U. (2016). Dissecting Domain Generation Algorithms: Eight Real World DGA Variants. Retrieved February 18, 2019.](http://go.cybereason.com/rs/996-YZT-709/images/Cybereason-Lab-Analysis-Dissecting-DGAs-Eight-Real-World-DGA-Variants.pdf)
[^fn10]: [Unit 42. (2019, February 7). Threat Brief: Understanding Domain Generation Algorithms (DGA). Retrieved February 19, 2019.](https://unit42.paloaltonetworks.com/threat-brief-understanding-domain-generation-algorithms-dga/)