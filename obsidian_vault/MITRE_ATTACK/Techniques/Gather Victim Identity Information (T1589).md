---
mitre_data:
  id: T1589
  linker_tags:
  - mitre/attack/linker/reconnaissance/gather_victim_identity_information
  name: Gather Victim Identity Information
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Gather Victim Identity Information (`T1589`)

Adversaries may gather information about the victim's identity that can be used during targeting. Information about identities may include a variety of details, including personal data (ex: employee names, email addresses, security question responses, etc.) as well as sensitive details such as credentials or multi-factor authentication (MFA) configurations.

Adversaries may gather this information in various ways, such as direct elicitation via [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about users could also be enumerated via other active means (i.e. [Active Scanning](https://attack.mitre.org/techniques/T1595)) such as probing and analyzing responses from authentication services that may reveal valid usernames in a system or permitted MFA /methods associated with those usernames.[^fn4][^fn8] Information about victims may also be exposed to adversaries via online or other accessible data sets (ex: [Social Media](https://attack.mitre.org/techniques/T1593/001) or [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594)).[^fn1][^fn10][^fn5][^fn2][^fn9][^fn3][^fn6][^fn7]

Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Phishing for Information](https://attack.mitre.org/techniques/T1598)), establishing operational resources (ex: [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [Phishing](https://attack.mitre.org/techniques/T1566) or [Valid Accounts](https://attack.mitre.org/techniques/T1078)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Email Addresses (T1589.002)|Email Addresses]]
- [[../Techniques/Employee Names (T1589.003)|Employee Names]]
- [[../Techniques/Credentials (T1589.001)|Credentials]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1589](https://attack.mitre.org/techniques/T1589)

[^fn1]: [Cybersecurity Resource Center. (n.d.). CYBERSECURITY INCIDENTS. Retrieved September 16, 2024.](https://web.archive.org/web/20230602111604/https://www.opm.gov/cybersecurity/cybersecurity-incidents/)
[^fn2]: [Detectify. (2016, April 28). Slack bot token leakage exposing business critical information. Retrieved November 17, 2024.](https://labs.detectify.com/writeups/slack-bot-token-leakage-exposing-business-critical-information/)
[^fn3]: [Dylan Ayrey. (2016, December 31). truffleHog. Retrieved October 19, 2020.](https://github.com/dxa4481/truffleHog)
[^fn4]: [GrimHacker. (2017, July 24). Office365 ActiveSync Username Enumeration. Retrieved December 9, 2021.](https://grimhacker.com/2017/07/24/office365-activesync-username-enumeration/)
[^fn5]: [McCarthy, K. (2015, February 28). FORK ME! Uber hauls GitHub into court to find who hacked database of 50,000 drivers. Retrieved October 19, 2020.](https://www.theregister.com/2015/02/28/uber_subpoenas_github_for_hacker_details/)
[^fn6]: [Michael Henriksen. (2018, June 9). Gitrob: Putting the Open Source in OSINT. Retrieved October 19, 2020.](https://github.com/michenriksen/gitrob)
[^fn7]: [Ng, A. (2019, January 17). Massive breach leaks 773 million email addresses, 21 million passwords. Retrieved October 20, 2020.](https://www.cnet.com/news/massive-breach-leaks-773-million-emails-21-million-passwords/)
[^fn8]: [Noah Corradin and Shuyang Wang. (2023, August 1). Behind The Breach: Self-Service Password Reset (SSPR) Abuse in Azure AD. Retrieved March 28, 2024.](https://www.obsidiansecurity.com/blog/behind-the-breach-self-service-password-reset-azure-ad/)
[^fn9]: [Sandvik, R. (2014, January 14). Attackers Scrape GitHub For Cloud Service Credentials, Hijack Account To Mine Virtual Currency. Retrieved October 19, 2020.](https://www.forbes.com/sites/runasandvik/2014/01/14/attackers-scrape-github-for-cloud-service-credentials-hijack-account-to-mine-virtual-currency/#242c479d3196)
[^fn10]: [Thomson, I. (2017, September 26). Deloitte is a sitting duck: Key systems with RDP open, VPN and proxy 'login details leaked'. Retrieved October 19, 2020.](https://www.theregister.com/2017/09/26/deloitte_leak_github_and_google/)