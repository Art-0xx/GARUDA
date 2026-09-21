---
mitre_data:
  id: T1684.002
  linker_tags:
  - mitre/attack/linker/stealth/email_spoofing
  name: Email Spoofing
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Email Spoofing (`T1684.002`)

Adversaries may fake, or spoof, a sender’s identity by modifying the value of relevant email headers in order to establish contact with victims under false pretenses.[^fn4] In addition to actual email content, email headers (such as the FROM header, which contains the email address of the sender) may also be modified. Email clients display these headers when emails appear in a victim's inbox, which may cause modified emails to appear as if they were from the spoofed entity.

Enterprise environments can use Domain-based Message Authentication, Reporting, and Conformance (DMARC) as an email authentication protocol that references results of the Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) configurations. SPF and DKIM are configured separately in DNS: SPF verifies that the sending server is authorized for the domain, while DKIM uses a digital signature to verify email integrity and domain authentication. Together, they validate email authenticity and specify how receiving servers should handle authentication failures. Without enforced identity authentication, adversaries may compromise the integrity of an authentication check with altered headers that would not have otherwise passed.[^fn1][^fn2][^fn5]

An example of a weak or absent DMARC policy is `v=DMARC1; p=none; fo=1;`. The `p=none`. The `p=none` indicates no action should be taken, and therefore no filtering action will take place, even if an email fails authentication checks (i.e., SPF and/or DKIM fail). When a DMARC policy indicates no action, the email will still be delivered to the victim’s inbox.[^fn3] 

Adversaries have abused weak or absent DMARC policies to circumvent authentication checks and conceal social engineering attempts. Adversaries can alter email headers to include legitimate domain names with fake usernames or impersonate legitimate users via [Impersonation](https://attack.mitre.org/techniques/T1684/001) for [Phishing](https://attack.mitre.org/techniques/T1566). Additionally, adversaries may abuse Microsoft 365’s Direct Send functionality to spoof internal users by using internal devices like printers to send emails without authentication.[^fn6]


# Platform(s)

- Linux
- macOS
- Office Suite
- Windows

# Parent Technique(s)

- [[../Techniques/Social Engineering (T1684)|Social Engineering]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1684.002](https://attack.mitre.org/techniques/T1684/002)

[^fn1]: [Cloudflare. (n.d.). What are DMARC, DKIM, and SPF?. Retrieved April 8, 2025.](https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/)
[^fn2]: [DMARC. (n.d.). Retrieved March 24, 2025.](https://dmarc.org/overview)
[^fn3]: [FBI, State Department, NSA. (2024, May 2). North Korean Actors Exploit Weak DMARC Security Policies to Mask Spearphishing Efforts. Retrieved April 2, 2025.](https://www.ic3.gov/CSA/2024/240502.pdf)
[^fn4]: [Lesnewich, G. et al. (2024, April 16). From Social Engineering to DMARC Abuse: TA427’s Art of Information Gathering. Retrieved May 3, 2024.](https://www.proofpoint.com/us/blog/threat-insight/social-engineering-dmarc-abuse-ta427s-art-information-gathering)
[^fn5]: [Proofpoint. (n.d.). Retrieved March 24, 2025.](https://www.proofpoint.com/us/threat-reference/dmarc)
[^fn6]: [Tom Barnea. (2025, September 9). Ongoing Campaign Abuses Microsoft 365’s Direct Send to Deliver Phishing Emails. Retrieved September 24, 2025.](https://www.varonis.com/blog/direct-send-exploit)