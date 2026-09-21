---
mitre_data:
  id: T1683.001
  linker_tags:
  - mitre/attack/linker/resource_development/written_content
  name: Written Content
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Written Content (`T1683.001`)

Adversaries may create or tailor written materials to support targeting and malicious operations. Content may include phishing lures, fraudulent financial communications, fabricated job postings, fabricated employment credentials and documentation, decoy documents, social media persona content, and supporting narratives used to sustain fabricated personas over time.[^fn1][^fn2] Content may be authored manually, commissioned through third parties, or produced using AI-assisted tools.

Written materials may impersonate legitimate government correspondence, diplomatic communications, or internal organizational documents to support targeting efforts. AI-assisted tools may also be used to tailor content to specific targets, industries, or regions. For example, adversaries may leverage AI to translate content into a target's native language or mimic the communication style of trusted senders.

Written content produced through these methods may be used in support of other techniques, such as [Phishing](https://attack.mitre.org/techniques/T1660), [Spearphishing via Service](https://attack.mitre.org/techniques/T1566/003), [Phishing for Information](https://attack.mitre.org/techniques/T1598), [Internal Spearphishing](https://attack.mitre.org/techniques/T1534), [Social Engineering](https://attack.mitre.org/techniques/T1684), [Financial Theft](https://attack.mitre.org/techniques/T1657), or [Establish Accounts](https://attack.mitre.org/techniques/T1585).

Written content does not include malicious code or scripts; for development of malicious code and scripts, see [Develop Capabilities](https://attack.mitre.org/techniques/T1587).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Generate Content (T1683)|Generate Content]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1683.001](https://attack.mitre.org/techniques/T1683/001)

[^fn1]: [Adaptive Team. (2025, August 29). Generative AI Phishing: How to Defend in 2025. Retrieved March 26, 2026.](https://www.adaptivesecurity.com/blog/ai-phishing)
[^fn2]: [Google Threat Intelligence Group . (2026, February 12). GTIG AI Threat Tracker: Distillation, Experimentation, and (Continued) Integration of AI for Adversarial Use. Retrieved March 25, 2026.](https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use)