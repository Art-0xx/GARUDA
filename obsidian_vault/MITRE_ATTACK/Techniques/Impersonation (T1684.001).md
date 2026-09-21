---
mitre_data:
  id: T1684.001
  linker_tags:
  - mitre/attack/linker/stealth/impersonation
  name: Impersonation
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Impersonation (`T1684.001`)

Adversaries may impersonate a trusted person or organization in order to persuade and trick a target into performing some action on their behalf. For example, adversaries may communicate with victims (via [Phishing for Information](https://attack.mitre.org/techniques/T1598), [Phishing](https://attack.mitre.org/techniques/T1566), or [Internal Spearphishing](https://attack.mitre.org/techniques/T1534)) while impersonating a known sender such as an executive, colleague, or third-party vendor. Established trust can then be leveraged to accomplish an adversary’s ultimate goals, possibly against multiple victims.

In many cases of business email compromise or email fraud campaigns, adversaries use impersonation to defraud victims -- deceiving them into sending money or divulging information that ultimately enables [Financial Theft](https://attack.mitre.org/techniques/T1657).

Adversaries will often also use social engineering techniques such as manipulative and persuasive language in email subject lines and body text such as `payment`, `request`, or `urgent` to push the victim to act quickly before malicious activity is detected. These campaigns are often specifically targeted against people who, due to job roles and/or accesses, can carry out the adversary’s goal.  

Impersonation is typically preceded by reconnaissance techniques such as [Gather Victim Identity Information](https://attack.mitre.org/techniques/T1589) and [Gather Victim Org Information](https://attack.mitre.org/techniques/T1591) as well as acquiring infrastructure such as email domains (i.e. [Domains](https://attack.mitre.org/techniques/T1583/001)) to substantiate their false identity.[^fn1]

There is the potential for multiple victims in campaigns involving impersonation. For example, an adversary may Compromise Accounts targeting one organization which can then be used to support impersonation against other entities.[^fn2]


# Platform(s)

- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Parent Technique(s)

- [[../Techniques/Social Engineering (T1684)|Social Engineering]]

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1684.001](https://attack.mitre.org/techniques/T1684/001)

[^fn1]: [Bart Lenaerts-Bergmans. (2023, August 8). What is Business Email Compromise?. Retrieved April 15, 2026.](https://www.crowdstrike.com/en-us/cybersecurity-101/threat-intelligence/business-email-compromise-bec/)
[^fn2]: [CloudFlare. (n.d.). What is vendor email compromise (VEC)?. Retrieved September 12, 2023.](https://www.cloudflare.com/learning/email-security/what-is-vendor-email-compromise/#:~:text=Vendor%20email%20compromise%2C%20also%20referred,steal%20from%20that%20vendor%27s%20customers.)