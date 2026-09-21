---
mitre_data:
  id: T1682
  linker_tags:
  - mitre/attack/linker/reconnaissance/query_public_ai_services
  name: Query Public AI Services
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Query Public AI Services (`T1682`)

Adversaries may query publicly accessible artificial intelligence (AI) services, such as large language models (LLMs), to support targeting and operations. In addition to searching websites or databases directly (i.e., [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), adversaries may use AI services to synthesize, aggregate, and analyze publicly available information at scale. This may include identifying individuals or organizations to target, researching organizational structures and personnel, identifying technologies used by target organizations, researching business relationships to develop plausible pretexts for [Social Engineering](https://attack.mitre.org/techniques/T1684) approaches, identifying contact information for use in [Phishing](https://attack.mitre.org/techniques/T1566) or [Phishing for Information](https://attack.mitre.org/techniques/T1598), or gathering derogatory or sensitive information about individuals that may be used for extortion or coercion.[^fn2][^fn1]

Information gathered through AI services may be leveraged for other behaviors, such as establishing operational resources (i.e., [Generate Content](https://attack.mitre.org/techniques/T1683) or [Establish Accounts](https://attack.mitre.org/techniques/T1585). For obtaining access to AI tools and services, see [Artificial Intelligence](https://attack.mitre.org/techniques/T1588/007).


# Platform(s)

- PRE

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1682](https://attack.mitre.org/techniques/T1682)

[^fn1]: [Google Threat Intelligence Group . (2026, February 12). GTIG AI Threat Tracker: Distillation, Experimentation, and (Continued) Integration of AI for Adversarial Use. Retrieved March 25, 2026.](https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use)
[^fn2]: [Microsoft Threat Intelligence. (2024, February 14). Staying ahead of threat actors in the age of AI. Retrieved March 11, 2024.](https://www.microsoft.com/en-us/security/blog/2024/02/14/staying-ahead-of-threat-actors-in-the-age-of-ai/)