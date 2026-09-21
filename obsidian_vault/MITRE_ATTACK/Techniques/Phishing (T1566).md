---
mitre_data:
  id: T1566
  linker_tags:
  - mitre/attack/linker/initial_access/phishing
  name: Phishing
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Phishing (`T1566`)

Adversaries may send phishing messages to gain access to victim systems. All forms of phishing are electronically delivered social engineering. Phishing can be targeted, known as spearphishing. In spearphishing, a specific individual, company, or industry will be targeted by the adversary. More generally, adversaries can conduct non-targeted phishing, such as in mass malware spam campaigns.

Adversaries may send victims emails containing malicious attachments or links, typically to execute malicious code on victim systems. Phishing may also be conducted via third-party services, like social media platforms. Phishing may also involve social engineering techniques, such as posing as a trusted source, as well as evasive techniques such as removing or manipulating emails or metadata/headers from compromised accounts being abused to send messages (e.g., [Email Hiding Rules](https://attack.mitre.org/techniques/T1564/008)).[^fn5][^fn8] Another way to accomplish this is by [Email Spoofing](https://attack.mitre.org/techniques/T1684/002)[^fn7] the identity of the sender, which can be used to fool both the human recipient as well as automated security tools,[^fn3] or by including the intended target as a party to an existing email thread that includes malicious files or links (i.e., "thread hijacking").[^fn1]

Victims may also receive phishing messages that instruct them to call a phone number where they are directed to visit a malicious URL, download malware,[^fn6][^fn2] or install adversary-accessible remote management tools onto their computer (i.e., [User Execution](https://attack.mitre.org/techniques/T1204)).[^fn4]


# Platform(s)

- Identity Provider
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Spearphishing Link (T1566.002)|Spearphishing Link]]
- [[../Techniques/Spearphishing Attachment (T1566.001)|Spearphishing Attachment]]
- [[../Techniques/Spearphishing Voice (T1566.004)|Spearphishing Voice]]
- [[../Techniques/Spearphishing via Service (T1566.003)|Spearphishing via Service]]

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1566](https://attack.mitre.org/techniques/T1566)

[^fn1]: [Brian Krebs. (2024, March 28). Thread Hijacking: Phishes That Prey on Your Curiosity. Retrieved September 27, 2024.](https://krebsonsecurity.com/2024/03/thread-hijacking-phishes-that-prey-on-your-curiosity/)
[^fn2]: [CISA. (n.d.). Protecting Against Malicious Use of Remote Monitoring and Management Software. Retrieved February 2, 2023.](https://www.cisa.gov/uscert/ncas/alerts/aa23-025a)
[^fn3]: [Itkin, Liora. (2022, September 1). Double-bounced attacks with email spoofing . Retrieved February 24, 2023.](https://blog.cyberproof.com/blog/double-bounced-attacks-with-email-spoofing-2022-trends)
[^fn4]: [Kristopher Russo. (n.d.). Luna Moth Callback Phishing Campaign. Retrieved February 2, 2023.](https://unit42.paloaltonetworks.com/luna-moth-callback-phishing/)
[^fn5]: [Microsoft. (2023, September 22). Malicious OAuth applications abuse cloud email services to spread spam. Retrieved March 13, 2023.](https://www.microsoft.com/en-us/security/blog/2022/09/22/malicious-oauth-applications-used-to-compromise-email-servers-and-spread-spam/)
[^fn6]: [Oren Biderman, Tomer Lahiyani, Noam Lifshitz, Ori Porag. (n.d.). LUNA MOTH: THE THREAT ACTORS BEHIND RECENT FALSE SUBSCRIPTION SCAMS. Retrieved February 2, 2023.](https://blog.sygnia.co/luna-moth-false-subscription-scams)
[^fn7]: [Proofpoint. (n.d.). What Is Email Spoofing?. Retrieved February 24, 2023.](https://www.proofpoint.com/us/threat-reference/email-spoofing)
[^fn8]: [Vicky Ray and Rob Downs. (2014, October 29). Examining a VBA-Initiated Infostealer Campaign. Retrieved March 13, 2023.](https://unit42.paloaltonetworks.com/examining-vba-initiated-infostealer-campaign/)