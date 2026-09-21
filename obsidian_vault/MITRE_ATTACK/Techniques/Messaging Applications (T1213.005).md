---
mitre_data:
  id: T1213.005
  linker_tags:
  - mitre/attack/linker/collection/messaging_applications
  name: Messaging Applications
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Messaging Applications (`T1213.005`)

Adversaries may leverage chat and messaging applications, such as Microsoft Teams, Google Chat, and Slack, to mine valuable information.  

The following is a brief list of example information that may hold potential value to an adversary and may also be found on messaging applications: 

* Testing / development credentials (i.e., [Chat Messages](https://attack.mitre.org/techniques/T1552/008)) 
* Source code snippets 
* Links to network shares and other internal resources 
* Proprietary data[^fn4]
* Discussions about ongoing incident response efforts[^fn3][^fn5]

In addition to exfiltrating data from messaging applications, adversaries may leverage data from chat messages in order to improve their targeting - for example, by learning more about an environment or evading ongoing incident response efforts.[^fn1][^fn2]


# Platform(s)

- Office Suite
- SaaS

# Parent Technique(s)

- [[../Techniques/Data from Information Repositories (T1213)|Data from Information Repositories]]

# Tool(s)

- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213.005](https://attack.mitre.org/techniques/T1213/005)

[^fn1]: [ Jim Walter. (2024, July 16). NullBulge | Threat Actor Masquerades as Hacktivist Group Rebelling Against AI. Retrieved August 30, 2024.](https://www.sentinelone.com/labs/nullbulge-threat-actor-masquerades-as-hacktivist-group-rebelling-against-ai/)
[^fn2]: [Ian Ahl. (2023, September 20). LUCR-3: SCATTERED SPIDER GETTING SAAS-Y IN THE CLOUD. Retrieved September 25, 2023.](https://permiso.io/blog/lucr-3-scattered-spider-getting-saas-y-in-the-cloud)
[^fn3]: [Joe Uchill. (2021, December 3). Ragnar Locker reminds breach victims it can read the on-network incident response chat rooms. Retrieved August 30, 2024.](https://www.scmagazine.com/analysis/ragnar-locker-reminds-breach-victims-it-can-read-the-on-network-incident-response-chat-rooms)
[^fn4]: [Keza MacDonald, Keith Stuart and Alex Hern. (2022, September 19). Grand Theft Auto 6 leak: who hacked Rockstar and what was stolen?. Retrieved August 30, 2024.](https://www.theguardian.com/games/2022/sep/19/grand-theft-auto-6-leak-who-hacked-rockstar-and-what-was-stolen)
[^fn5]: [Microsoft. (2022, March 22). DEV-0537 criminal actor targeting organizations for data exfiltration and destruction. Retrieved March 23, 2022.](https://www.microsoft.com/security/blog/2022/03/22/dev-0537-criminal-actor-targeting-organizations-for-data-exfiltration-and-destruction/)