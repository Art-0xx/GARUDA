---
mitre_data:
  id: T1657
  linker_tags:
  - mitre/attack/linker/impact/financial_theft
  name: Financial Theft
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Financial Theft (`T1657`)

Adversaries may steal monetary resources from targets through extortion, social engineering, technical theft, or other methods aimed at their own financial gain at the expense of the availability of these resources for victims. Financial theft is the ultimate objective of several popular campaign types including extortion by ransomware,[^fn6] business email compromise (BEC) and fraud,[^fn5] "pig butchering,"[^fn10] bank hacking,[^fn4] and exploiting cryptocurrency networks.[^fn9] 

Adversaries may [Compromise Accounts](https://attack.mitre.org/techniques/T1586) to conduct unauthorized transfers of funds.[^fn8] In the case of business email compromise or email fraud, an adversary may utilize [Impersonation](https://attack.mitre.org/techniques/T1684/001) of a trusted entity. Once the social engineering is successful, victims can be deceived into sending money to financial accounts controlled by an adversary.[^fn5] This creates the potential for multiple victims (i.e., compromised accounts as well as the ultimate monetary loss) in incidents involving financial theft.[^fn1]

Extortion by ransomware may occur, for example, when an adversary demands payment from a victim after [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486) [^fn11] and [Exfiltration](https://attack.mitre.org/tactics/TA0010) of data, followed by threatening to leak sensitive data to the public unless payment is made to the adversary.[^fn3] Adversaries may use dedicated leak sites to distribute victim data.[^fn2]

Due to the potentially immense business impact of financial theft, an adversary may abuse the possibility of financial theft and seeking monetary gain to divert attention from their true goals such as [Data Destruction](https://attack.mitre.org/techniques/T1485) and business disruption.[^fn7]


# Platform(s)

- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1657](https://attack.mitre.org/techniques/T1657)

[^fn1]: [CloudFlare. (n.d.). What is vendor email compromise (VEC)?. Retrieved September 12, 2023.](https://www.cloudflare.com/learning/email-security/what-is-vendor-email-compromise/#:~:text=Vendor%20email%20compromise%2C%20also%20referred,steal%20from%20that%20vendor%27s%20customers.)
[^fn2]: [Crowdstrike. (2020, September 24). Double Trouble: Ransomware with Data Leak Extortion, Part 1. Retrieved December 6, 2023.](https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1/)
[^fn3]: [DANIEL KAPELLMANN ZAFRA, COREY HIDELBRANDT, NATHAN BRUBAKER, KEITH LUNDEN. (2022, January 31). 1 in 7 OT Ransomware Extortion Attacks Leak Critical Operational Technology Information. Retrieved August 18, 2023.](https://www.mandiant.com/resources/blog/ransomware-extortion-ot-docs)
[^fn4]: [Department of Justice. (2021). 3 North Korean Military Hackers Indicted in Wide-Ranging Scheme to Commit Cyber-attacks and Financial Crimes Across the Globe. Retrieved August 18, 2023.](https://www.justice.gov/usao-cdca/pr/3-north-korean-military-hackers-indicted-wide-ranging-scheme-commit-cyber-attacks-and)
[^fn5]: [FBI. (2022). FBI 2022 Congressional Report on BEC and Real Estate Wire Fraud. Retrieved August 18, 2023.](https://www.fbi.gov/file-repository/fy-2022-fbi-congressional-report-business-email-compromise-and-real-estate-wire-fraud-111422.pdf/view)
[^fn6]: [FBI. (n.d.). Ransomware. Retrieved August 18, 2023.](https://www.cisa.gov/sites/default/files/Ransomware_Trifold_e-version.pdf)
[^fn7]: [FRANK BAJAK AND RAPHAEL SATTER. (2017, June 30). Companies still hobbled from fearsome cyberattack. Retrieved August 18, 2023.](https://apnews.com/article/russia-ukraine-technology-business-europe-hacking-ce7a8aca506742ab8e8873e7f9f229c2)
[^fn8]: [IC3. (2022). 2022 Internet Crime Report. Retrieved August 18, 2023.](https://www.ic3.gov/Media/PDF/AnnualReport/2022_IC3Report.pdf)
[^fn9]: [Joe Tidy. (2022, March 30). Ronin Network: What a $600m hack says about the state of crypto. Retrieved August 18, 2023.](https://www.bbc.com/news/technology-60933174)
[^fn10]: [Lily Hay Newman. (n.d.). ‘Pig Butchering’ Scams Are Now a $3 Billion Threat. Retrieved August 18, 2023.](https://www.wired.com/story/pig-butchering-fbi-ic3-2022-report/)
[^fn11]: [Nicole Perlroth. (2021, May 13). Colonial Pipeline paid 75 Bitcoin, or roughly $5 million, to hackers.. Retrieved August 18, 2023.](https://www.nytimes.com/2021/05/13/technology/colonial-pipeline-ransom.html)