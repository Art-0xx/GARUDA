---
mitre_data:
  id: T1684
  linker_tags:
  - mitre/attack/linker/stealth/social_engineering
  name: Social Engineering
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Social Engineering (`T1684`)

Adversaries may use social engineering techniques to influence users to take actions that result in unauthorized access, approval of changes, disclosure of sensitive information, or execution of adversary-supplied instructions (i.e., introduction of malicious payloads or software), while minimizing technical indicators. 

Adversaries may leverage trust-building methods across multiple channels (e.g., executive, vendor, or help desk scenarios, including AI-enabled voice interactions) to prompt user-authorized actions such as password resets, MFA changes, financial approvals, or the disclosure of sensitive information. Adversaries may also leverage common business communications and workflows such as email, collaboration platforms, voice communications, recruiting processes, help desk interactions, and SaaS consent mechanisms to make malicious requests appear routine and legitimate.[^fn3][^fn6][^fn1]

Additionally, adversaries have persuaded victims to take actions through references of current events, harnessing relevant themes to the work role or the organizations mission. For example, adversaries may use scare tactics (i.e., threaten repercussions for non-compliance) or otherwise incite victims’ emotions in order to generate a sense of urgency to take action.[^fn4][^fn5]

This technique may include common social engineering patterns such as [Phishing](https://attack.mitre.org/techniques/T1566) and [Spearphishing Voice](https://attack.mitre.org/techniques/T1566/004), often supported by convincing and targeted narratives.[^fn6][^fn2]


# Platform(s)

- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Impersonation (T1684.001)|Impersonation]]
- [[../Techniques/Email Spoofing (T1684.002)|Email Spoofing]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1684](https://attack.mitre.org/techniques/T1684)

[^fn1]: [David Jones. (2025, August 19). Hackers target Workday in social engineering attack. Retrieved April 15, 2026.](https://www.cybersecuritydive.com/news/hackers-target-workday-in-social-engineering-attack/758095/#:~:text=Researchers%20cite%20increasing%20evidence%20of,told%20Cybersecurity%20Dive%20via%20email.)
[^fn2]: [Fortinet. (n.d.). Recent Cyber Attacks & Emerging Cybersecurity Trends. Retrieved April 15, 2026.](https://www.fortinet.com/uk/resources/cyberglossary/recent-cyber-attacks)
[^fn3]: [Lesnewich, G. et al. (2024, April 16). From Social Engineering to DMARC Abuse: TA427’s Art of Information Gathering. Retrieved May 3, 2024.](https://www.proofpoint.com/us/blog/threat-insight/social-engineering-dmarc-abuse-ta427s-art-information-gathering)
[^fn4]: [Proofpoint. (n.d.). What Is Social Engineering?. Retrieved April 15, 2026.](https://www.proofpoint.com/us/threat-reference/social-engineering)
[^fn5]: [SentinelOne. (2023, October 19). Social Engineering Attacks | How to Recognize and Resist The Bait. Retrieved April 15, 2026.](https://www.sentinelone.com/blog/social-engineering-attacks-how-to-recognize-and-resist-the-bait/)
[^fn6]: [SentinelOne. (2025, August 19). 15 Types of Social Engineering Attacks. Retrieved April 15, 2026.](https://www.sentinelone.com/cybersecurity-101/threat-intelligence/types-of-social-engineering-attacks/)