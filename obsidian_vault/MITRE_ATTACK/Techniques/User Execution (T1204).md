---
mitre_data:
  id: T1204
  linker_tags:
  - mitre/attack/linker/execution/user_execution
  name: User Execution
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# User Execution (`T1204`)

An adversary may rely upon specific actions by a user in order to gain execution. Users may be subjected to social engineering to get them to execute malicious code by, for example, opening a malicious document file or link. These user actions will typically be observed as follow-on behavior from forms of [Phishing](https://attack.mitre.org/techniques/T1566).

While [User Execution](https://attack.mitre.org/techniques/T1204) frequently occurs shortly after Initial Access it may occur at other phases of an intrusion, such as when an adversary places a file in a shared directory or on a user's desktop hoping that a user will click on it. This activity may also be seen shortly after [Internal Spearphishing](https://attack.mitre.org/techniques/T1534).

Adversaries may also deceive users into performing actions such as:

* Enabling [Remote Access Tools](https://attack.mitre.org/techniques/T1219), allowing direct control of the system to the adversary
* Running malicious JavaScript in their browser, allowing adversaries to [Steal Web Session Cookie](https://attack.mitre.org/techniques/T1539)s[^fn4][^fn1]
* Downloading and executing malware for [User Execution](https://attack.mitre.org/techniques/T1204)
* Coerceing users to copy, paste, and execute malicious code manually[^fn2][^fn5]

For example, tech support scams can be facilitated through [Phishing](https://attack.mitre.org/techniques/T1566), vishing, or various forms of user interaction. Adversaries can use a combination of these methods, such as spoofing and promoting toll-free numbers or call centers that are used to direct victims to malicious websites, to deliver and execute payloads containing malware or [Remote Access Tools](https://attack.mitre.org/techniques/T1219).[^fn3]


# Platform(s)

- Linux
- Windows
- macOS
- IaaS
- Containers

# Sub-Technique(s)

- [[../Techniques/Malicious File (T1204.002)|Malicious File]]
- [[../Techniques/Malicious Library (T1204.005)|Malicious Library]]
- [[../Techniques/Malicious Image (T1204.003)|Malicious Image]]
- [[../Techniques/Malicious Copy and Paste (T1204.004)|Malicious Copy and Paste]]
- [[../Techniques/Malicious Link (T1204.001)|Malicious Link]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1204](https://attack.mitre.org/techniques/T1204)

[^fn1]: [Brian Krebs. (2023, May 30). Discord Admins Hacked by Malicious Bookmarks. Retrieved January 2, 2024.](https://krebsonsecurity.com/2023/05/discord-admins-hacked-by-malicious-bookmarks/)
[^fn2]: [Reliaquest. (2024, May 31). New Execution Technique in ClearFake Campaign. Retrieved August 2, 2024.](https://www.reliaquest.com/blog/new-execution-technique-in-clearfake-campaign/)
[^fn3]: [Selena Larson, Sam Scholten, Timothy Kromphardt. (2021, November 4). Caught Beneath the Landline: A 411 on Telephone Oriented Attack Delivery. Retrieved January 5, 2022.](https://www.proofpoint.com/us/blog/threat-insight/caught-beneath-landline-411-telephone-oriented-attack-delivery)
[^fn4]: [Tiago Pereira. (2023, November 2). Attackers use JavaScript URLs, API forms and more to scam users in popular online game “Roblox”. Retrieved January 2, 2024.](https://blog.talosintelligence.com/roblox-scam-overview/)
[^fn5]: [Tommy Madjar, Dusty Miller, Selena Larson. (2024, June 17). From Clipboard to Compromise: A PowerShell Self-Pwn. Retrieved August 2, 2024.](https://www.proofpoint.com/us/blog/threat-insight/clipboard-compromise-powershell-self-pwn)