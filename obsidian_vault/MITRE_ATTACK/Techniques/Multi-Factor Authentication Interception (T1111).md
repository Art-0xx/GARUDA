---
mitre_data:
  id: T1111
  linker_tags:
  - mitre/attack/linker/credential_access/multi-factor_authentication_interception
  name: Multi-Factor Authentication Interception
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Multi-Factor Authentication Interception (`T1111`)

Adversaries may target multi-factor authentication (MFA) mechanisms, (i.e., smart cards, token generators, etc.) to gain access to credentials that can be used to access systems, services, and network resources. Use of MFA is recommended and provides a higher level of security than usernames and passwords alone, but organizations should be aware of techniques that could be used to intercept and bypass these security mechanisms. 

If a smart card is used for multi-factor authentication, then a keylogger will need to be used to obtain the password associated with a smart card during normal use. With both an inserted card and access to the smart card password, an adversary can connect to a network resource using the infected system to proxy the authentication with the inserted hardware token. [^fn2]

Adversaries may also employ a keylogger to similarly target other hardware tokens, such as RSA SecurID. Capturing token input (including a user's personal identification code) may provide temporary access (i.e. replay the one-time passcode until the next value rollover) as well as possibly enabling adversaries to reliably predict future authentication values (given access to both the algorithm and any seed values used to generate appended temporary codes). [^fn1]

Other methods of MFA may be intercepted and used by an adversary to authenticate. It is common for one-time codes to be sent via out-of-band communications (email, SMS). If the device and/or service is not secured, then it may be vulnerable to interception. Service providers can also be targeted: for example, an adversary may compromise an SMS messaging service in order to steal MFA codes sent to users’ phones.[^fn3]


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1111](https://attack.mitre.org/techniques/T1111)

[^fn1]: [Jackson, William. (2011, June 7). RSA confirms its tokens used in Lockheed hack. Retrieved November 17, 2024.](https://www.route-fifty.com/cybersecurity/2011/06/rsa-confirms-its-tokens-used-in-lockheed-hack/282818/)
[^fn2]: [Mandiant. (2011, January 27). Mandiant M-Trends 2011. Retrieved January 10, 2016.](https://dl.mandiant.com/EE/assets/PDF_MTrends_2011.pdf)
[^fn3]: [Okta. (2022, August 25). Detecting Scatter Swine: Insights into a Relentless Phishing Campaign. Retrieved February 24, 2023.](https://sec.okta.com/scatterswine)