---
mitre_data:
  id: T1608.005
  linker_tags:
  - mitre/attack/linker/resource_development/link_target
  name: Link Target
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Link Target (`T1608.005`)

Adversaries may put in place resources that are referenced by a link that can be used during targeting. An adversary may rely upon a user clicking a malicious link in order to divulge information (including credentials) or to gain execution, as in [Malicious Link](https://attack.mitre.org/techniques/T1204/001). Links can be used for spearphishing, such as sending an email accompanied by social engineering text to coax the user to actively click or copy and paste a URL into a browser. Prior to a phish for information (as in [Spearphishing Link](https://attack.mitre.org/techniques/T1598/003)) or a phish to gain initial access to a system (as in [Spearphishing Link](https://attack.mitre.org/techniques/T1566/002)), an adversary must set up the resources for a link target for the spearphishing link. 

Typically, the resources for a link target will be an HTML page that may include some client-side script such as [JavaScript](https://attack.mitre.org/techniques/T1059/007) to decide what content to serve to the user. Adversaries may clone legitimate sites to serve as the link target, this can include cloning of login pages of legitimate web services or organization login pages in an effort to harvest credentials during [Spearphishing Link](https://attack.mitre.org/techniques/T1598/003).[^fn6][^fn11] Adversaries may also [Upload Malware](https://attack.mitre.org/techniques/T1608/001) and have the link target point to malware for download/execution by the user.

Adversaries may purchase domains similar to legitimate domains (ex: homoglyphs, typosquatting, different top-level domain, etc.) during acquisition of infrastructure ([Domains](https://attack.mitre.org/techniques/T1583/001)) to help facilitate [Malicious Link](https://attack.mitre.org/techniques/T1204/001).

Links can be written by adversaries to mask the true destination in order to deceive victims by abusing the URL schema and increasing the effectiveness of phishing.[^fn4][^fn13]

Adversaries may also use free or paid accounts on link shortening services and Platform-as-a-Service providers to host link targets while taking advantage of the widely trusted domains of those providers to avoid being blocked while redirecting victims to malicious pages.[^fn1][^fn2][^fn10][^fn12] In addition, adversaries may serve a variety of malicious links through uniquely generated URIs/URLs (including one-time, single use links).[^fn9][^fn7][^fn8][^fn3] Finally, adversaries may take advantage of the decentralized nature of the InterPlanetary File System (IPFS) to host link targets that are difficult to remove.[^fn5]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Stage Capabilities (T1608)|Stage Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1608.005](https://attack.mitre.org/techniques/T1608/005)

[^fn1]: [Ashwin Vamshi. (2019, January 24). Targeted Attacks Abusing Google Cloud Platform Open Redirection. Retrieved August 18, 2022.](https://www.netskope.com/blog/targeted-attacks-abusing-google-cloud-platform-open-redirection)
[^fn2]: [Ashwin Vamshi. (2020, August 12). A Big Catch: Cloud Phishing from Google App Engine and Azure App Service. Retrieved August 18, 2022.](https://www.netskope.com/blog/a-big-catch-cloud-phishing-from-google-app-engine-and-azure-app-service)
[^fn3]: [Australian Cyber Security Centre. National Security Agency. (2020, April 21). Detect and Prevent Web Shell Malware. Retrieved February 9, 2024.](https://media.defense.gov/2020/Jun/09/2002313081/-1/-1/0/CSI-DETECT-AND-PREVENT-WEB-SHELL-MALWARE-20200422.PDF)
[^fn4]: [Dedenok, Roman. (2023, December 12). How cybercriminals disguise URLs. Retrieved January 17, 2024.](https://www.kaspersky.com/blog/malicious-redirect-methods/50045/)
[^fn5]: [Edmund Brumaghin. (2022, November 9). Threat Spotlight: Cyber Criminal Adoption of IPFS for Phishing, Malware Campaigns. Retrieved March 8, 2023.](https://blog.talosintelligence.com/ipfs-abuse/)
[^fn6]: [Malwarebytes Threat Intelligence Team. (2020, October 14). Silent Librarian APT right on schedule for 20/21 academic year. Retrieved February 3, 2021.](https://blog.malwarebytes.com/malwarebytes-news/2020/10/silent-librarian-apt-phishing-attack/)
[^fn7]: [Michael Cobb. (2007, October 11). Preparing for uniform resource identifier (URI) exploits. Retrieved February 9, 2024.](https://www.techtarget.com/searchsecurity/tip/Preparing-for-uniform-resource-identifier-URI-exploits)
[^fn8]: [Nathan McFeters. Billy Kim Rios. Rob Carter.. (2008). URI Use and Abuse. Retrieved February 9, 2024.](https://www.blackhat.com/presentations/bh-dc-08/McFeters-Rios-Carter/Presentation/bh-dc-08-mcfeters-rios-carter.pdf)
[^fn9]: [Ostorlab. (n.d.). iOS URL Scheme Hijacking. Retrieved February 9, 2024.](https://docs.ostorlab.co/kb/IPA_URL_SCHEME_HIJACKING/index.html)
[^fn10]: [Paul Litvak. (2020, October 8). Kud I Enter Your Server? New Vulnerabilities in Microsoft Azure. Retrieved August 18, 2022.](https://www.intezer.com/blog/malware-analysis/kud-i-enter-your-server-new-vulnerabilities-in-microsoft-azure/)
[^fn11]: [Proofpoint Threat Insight Team. (2019, September 5). Threat Actor Profile: TA407, the Silent Librarian. Retrieved February 3, 2021.](https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta407-silent-librarian)
[^fn12]: [Raymond, Nathaniel. (2023, August 16). Major Energy Company Targeted in Large QR Code Phishing Campaign. Retrieved January 17, 2024.](https://cofense.com/blog/major-energy-company-targeted-in-large-qr-code-campaign/)
[^fn13]: [Simonian, Nick. (2023, May 22). Don't @ Me: URL Obfuscation Through Schema Abuse. Retrieved January 17, 2024.](https://www.mandiant.com/resources/blog/url-obfuscation-schema-abuse)