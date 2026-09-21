---
mitre_data:
  id: T1534
  linker_tags:
  - mitre/attack/linker/lateral_movement/internal_spearphishing
  name: Internal Spearphishing
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Internal Spearphishing (`T1534`)

After they already have access to accounts or systems within the environment, adversaries may use internal spearphishing to gain access to additional information or compromise other users within the same organization. Internal spearphishing is multi-staged campaign where a legitimate account is initially compromised either by controlling the user's device or by compromising the account credentials of the user. Adversaries may then attempt to take advantage of the trusted internal account to increase the likelihood of tricking more victims into falling for phish attempts, often incorporating [Impersonation](https://attack.mitre.org/techniques/T1684/001).[^fn2]

For example, adversaries may leverage [Spearphishing Attachment](https://attack.mitre.org/techniques/T1566/001) or [Spearphishing Link](https://attack.mitre.org/techniques/T1566/002) as part of internal spearphishing to deliver a payload or redirect to an external site to capture credentials through [Input Capture](https://attack.mitre.org/techniques/T1056) on sites that mimic login interfaces.

Adversaries may also leverage internal chat apps, such as Microsoft Teams, to spread malicious content or engage users in attempts to capture sensitive information and/or credentials.[^fn1]


# Platform(s)

- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1534](https://attack.mitre.org/techniques/T1534)

[^fn1]: [Microsoft Threat Intelligence. (2023, August 2). Midnight Blizzard conducts targeted social engineering over Microsoft Teams. Retrieved February 16, 2024.](https://www.microsoft.com/en-us/security/blog/2023/08/02/midnight-blizzard-conducts-targeted-social-engineering-over-microsoft-teams/)
[^fn2]: [Trend Micro. (n.d.). Retrieved February 16, 2024.](https://www.trendmicro.com/en_us/research.html)