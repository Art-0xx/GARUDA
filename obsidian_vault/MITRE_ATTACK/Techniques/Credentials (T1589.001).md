---
mitre_data:
  id: T1589.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/credentials
  name: Credentials
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Credentials (`T1589.001`)

Adversaries may gather credentials that can be used during targeting. Account credentials gathered by adversaries may be those directly associated with the target victim organization or attempt to take advantage of the tendency for users to use the same passwords across personal and business accounts.

Adversaries may gather credentials from potential victims in various ways, such as direct elicitation via [Phishing for Information](https://attack.mitre.org/techniques/T1598). Adversaries may also compromise sites then add malicious content designed to collect website authentication cookies from visitors.[^fn2] [^fn12][^fn6][^fn3][^fn10][^fn4][^fn7][^fn8] Where multi-factor authentication (MFA) based on out-of-band communications is in use, adversaries may compromise a service provider to gain access to MFA codes and one-time passwords (OTP).[^fn9]

Credential information may also be exposed to adversaries via leaks to online or other accessible data sets (ex: [Search Engines](https://attack.mitre.org/techniques/T1593/002), breach dumps, code repositories, etc.). Adversaries may purchase credentials from dark web markets, such as Russian Market and 2easy, or through access to Telegram channels that distribute logs from infostealer malware.[^fn1][^fn11][^fn5]

Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Phishing for Information](https://attack.mitre.org/techniques/T1598)), establishing operational resources (ex: [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Valid Accounts](https://attack.mitre.org/techniques/T1078)). 


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Identity Information (T1589)|Gather Victim Identity Information]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1589.001](https://attack.mitre.org/techniques/T1589/001)

[^fn1]: [Bill Toulas. (2021, December 21). 2easy now a significant dark web marketplace for stolen data. Retrieved October 7, 2024.](https://www.bleepingcomputer.com/news/security/2easy-now-a-significant-dark-web-marketplace-for-stolen-data/)
[^fn2]: [Blasco, J. (2014, August 28). Scanbox: A Reconnaissance Framework Used with Watering Hole Attacks. Retrieved October 19, 2020.](https://cybersecurity.att.com/blogs/labs-research/scanbox-a-reconnaissance-framework-used-on-watering-hole-attacks)
[^fn3]: [Detectify. (2016, April 28). Slack bot token leakage exposing business critical information. Retrieved November 17, 2024.](https://labs.detectify.com/writeups/slack-bot-token-leakage-exposing-business-critical-information/)
[^fn4]: [Dylan Ayrey. (2016, December 31). truffleHog. Retrieved October 19, 2020.](https://github.com/dxa4481/truffleHog)
[^fn5]: [Flare. (2023, June 6). Dissecting the Dark Web Supply Chain: Stealer Logs in Context. Retrieved October 10, 2024.](https://www.bleepingcomputer.com/news/security/dissecting-the-dark-web-supply-chain-stealer-logs-in-context/)
[^fn6]: [McCarthy, K. (2015, February 28). FORK ME! Uber hauls GitHub into court to find who hacked database of 50,000 drivers. Retrieved October 19, 2020.](https://www.theregister.com/2015/02/28/uber_subpoenas_github_for_hacker_details/)
[^fn7]: [Michael Henriksen. (2018, June 9). Gitrob: Putting the Open Source in OSINT. Retrieved October 19, 2020.](https://github.com/michenriksen/gitrob)
[^fn8]: [Ng, A. (2019, January 17). Massive breach leaks 773 million email addresses, 21 million passwords. Retrieved October 20, 2020.](https://www.cnet.com/news/massive-breach-leaks-773-million-emails-21-million-passwords/)
[^fn9]: [Okta. (2022, August 25). Detecting Scatter Swine: Insights into a Relentless Phishing Campaign. Retrieved February 24, 2023.](https://sec.okta.com/scatterswine)
[^fn10]: [Sandvik, R. (2014, January 14). Attackers Scrape GitHub For Cloud Service Credentials, Hijack Account To Mine Virtual Currency. Retrieved October 19, 2020.](https://www.forbes.com/sites/runasandvik/2014/01/14/attackers-scrape-github-for-cloud-service-credentials-hijack-account-to-mine-virtual-currency/#242c479d3196)
[^fn11]: [SecureWorks Counter Threat Unit Research Team. (2023, May 16). The Growing Threat from Infostealers. Retrieved October 10, 2024.](https://www.secureworks.com/research/the-growing-threat-from-infostealers)
[^fn12]: [Thomson, I. (2017, September 26). Deloitte is a sitting duck: Key systems with RDP open, VPN and proxy 'login details leaked'. Retrieved October 19, 2020.](https://www.theregister.com/2017/09/26/deloitte_leak_github_and_google/)