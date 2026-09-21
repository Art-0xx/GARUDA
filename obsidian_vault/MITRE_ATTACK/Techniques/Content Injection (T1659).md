---
mitre_data:
  id: T1659
  linker_tags:
  - mitre/attack/linker/initial_access/content_injection
  - mitre/attack/linker/command_and_control/content_injection
  name: Content Injection
  related_tactics:
  - initial_access
  - command_and_control
tags:
- mitre/attack/technique
---



# Content Injection (`T1659`)

Adversaries may gain access and continuously communicate with victims by injecting malicious content into systems through online network traffic. Rather than luring victims to malicious payloads hosted on a compromised website (i.e., [Drive-by Target](https://attack.mitre.org/techniques/T1608/004) followed by [Drive-by Compromise](https://attack.mitre.org/techniques/T1189)), adversaries may initially access victims through compromised data-transfer channels where they can manipulate traffic and/or inject their own content. These compromised online network channels may also be used to deliver additional payloads (i.e., [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105)) and other data to already compromised systems.[^fn2]

Adversaries may inject content to victim systems in various ways, including:

* From the middle, where the adversary is in-between legitimate online client-server communications (**Note:** this is similar but distinct from [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557), which describes AiTM activity solely within an enterprise environment) [^fn3]
* From the side, where malicious content is injected and races to the client as a fake response to requests of a legitimate online server [^fn4]

Content injection is often the result of compromised upstream communication channels, for example at the level of an internet service provider (ISP) as is the case with "lawful interception."[^fn4][^fn2][^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]
- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1659](https://attack.mitre.org/techniques/T1659)

[^fn1]: [Budington, B. (2015, April 2). China Uses Unencrypted Websites to Hijack Browsers in GitHub Attack. Retrieved September 1, 2023.](https://www.eff.org/deeplinks/2015/04/china-uses-unencrypted-websites-to-hijack-browsers-in-github-attack)
[^fn2]: [Faou, M. (2023, August 10). MoustachedBouncer: Espionage against foreign diplomats in Belarus. Retrieved September 1, 2023.](https://www.welivesecurity.com/en/eset-research/moustachedbouncer-espionage-against-foreign-diplomats-in-belarus/)
[^fn3]: [Kaspersky IT Encyclopedia. (n.d.). Man-in-the-middle attack. Retrieved September 1, 2023.](https://encyclopedia.kaspersky.com/glossary/man-in-the-middle-attack/)
[^fn4]: [Starikova, A. (2023, February 14). Man-on-the-side – peculiar attack. Retrieved September 1, 2023.](https://usa.kaspersky.com/blog/man-on-the-side/27854/)