---
mitre_data:
  id: T1566.004
  linker_tags:
  - mitre/attack/linker/initial_access/spearphishing_voice
  name: Spearphishing Voice
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Spearphishing Voice (`T1566.004`)

Adversaries may use voice communications to ultimately gain access to victim systems. Spearphishing voice is a specific variant of spearphishing. It is different from other forms of spearphishing in that it employs the use of manipulating a user into providing access to systems through a phone call or other forms of voice communications. Spearphishing frequently involves social engineering techniques, such as posing as a trusted source (ex: [Impersonation](https://attack.mitre.org/techniques/T1684/001)) and/or creating a sense of urgency or alarm for the recipient.

All forms of phishing are electronically delivered social engineering. In this scenario, adversaries are not directly sending malware to a victim vice relying on [User Execution](https://attack.mitre.org/techniques/T1204) for delivery and execution. For example, victims may receive phishing messages that instruct them to call a phone number where they are directed to visit a malicious URL, download malware,[^fn3][^fn1] or install adversary-accessible remote management tools ([Remote Access Tools](https://attack.mitre.org/techniques/T1219)) onto their computer.[^fn2]

Adversaries may also combine voice phishing with [Multi-Factor Authentication Request Generation](https://attack.mitre.org/techniques/T1621) in order to trick users into divulging MFA credentials or accepting authentication prompts.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows
- Identity Provider

# Parent Technique(s)

- [[../Techniques/Phishing (T1566)|Phishing]]

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1566.004](https://attack.mitre.org/techniques/T1566/004)

[^fn1]: [CISA. (n.d.). Protecting Against Malicious Use of Remote Monitoring and Management Software. Retrieved February 2, 2023.](https://www.cisa.gov/uscert/ncas/alerts/aa23-025a)
[^fn2]: [Kristopher Russo. (n.d.). Luna Moth Callback Phishing Campaign. Retrieved February 2, 2023.](https://unit42.paloaltonetworks.com/luna-moth-callback-phishing/)
[^fn3]: [Oren Biderman, Tomer Lahiyani, Noam Lifshitz, Ori Porag. (n.d.). LUNA MOTH: THE THREAT ACTORS BEHIND RECENT FALSE SUBSCRIPTION SCAMS. Retrieved February 2, 2023.](https://blog.sygnia.co/luna-moth-false-subscription-scams)
[^fn4]: [Proofpoint. (n.d.). What Is Vishing?. Retrieved September 8, 2023.](https://www.proofpoint.com/us/threat-reference/vishing)