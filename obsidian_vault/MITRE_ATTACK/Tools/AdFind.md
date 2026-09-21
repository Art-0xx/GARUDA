---
tags:
  - mitre/attack/tool
---

# AdFind (`S0552`)

[AdFind](https://attack.mitre.org/software/S0552) is a free command-line query tool that can be used for gathering information from Active Directory.[^fn1][^fn3][^fn2]



# Platform(s)

- Windows

# Techniques Used

## Domain Trust Discovery

[AdFind](https://attack.mitre.org/software/S0552) can gather information about organizational units (OUs) and domain trusts from Active Directory.[\[Red Canary Hospital Thwarted Ryuk October 2020\]](https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/)[\[FireEye FIN6 Apr 2019\]](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)[\[FireEye Ryuk and Trickbot January 2019\]](https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html)[\[Symantec Bumblebee June 2022\]](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/bumblebee-loader-cybercrime)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Domain Groups

[AdFind](https://attack.mitre.org/software/S0552) can enumerate domain groups.[\[Red Canary Hospital Thwarted Ryuk October 2020\]](https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/)[\[FireEye FIN6 Apr 2019\]](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)[\[FireEye Ryuk and Trickbot January 2019\]](https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html)[\[Symantec Bumblebee June 2022\]](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/bumblebee-loader-cybercrime)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## System Network Configuration Discovery

[AdFind](https://attack.mitre.org/software/S0552) can extract subnet information from Active Directory.[\[Red Canary Hospital Thwarted Ryuk October 2020\]](https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/)[\[FireEye FIN6 Apr 2019\]](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)[\[FireEye Ryuk and Trickbot January 2019\]](https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Remote System Discovery

[AdFind](https://attack.mitre.org/software/S0552) has the ability to query Active Directory for computers.[\[Red Canary Hospital Thwarted Ryuk October 2020\]](https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/)[\[FireEye FIN6 Apr 2019\]](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)[\[FireEye Ryuk and Trickbot January 2019\]](https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html)[\[Cybereason Bumblebee August 2022\]](https://www.cybereason.com/blog/threat-analysis-report-bumblebee-loader-the-high-road-to-enterprise-domain-control)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## Domain Account

[AdFind](https://attack.mitre.org/software/S0552) can enumerate domain users.[\[Red Canary Hospital Thwarted Ryuk October 2020\]](https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/)[\[FireEye FIN6 Apr 2019\]](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)[\[FireEye Ryuk and Trickbot January 2019\]](https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html)[\[Cybereason Bumblebee August 2022\]](https://www.cybereason.com/blog/threat-analysis-report-bumblebee-loader-the-high-road-to-enterprise-domain-control)[\[Symantec Bumblebee June 2022\]](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/bumblebee-loader-cybercrime)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]


# External References(s)

- [S0552](https://attack.mitre.org/software/S0552)

[^fn1]: [Brian Donohue, Katie Nickels, Paul Michaud, Adina Bodkins, Taylor Chapman, Tony Lambert, Jeff Felling, Kyle Rainey, Mike Haag, Matt Graeber, Aaron Didier.. (2020, October 29). A Bazar start: How one hospital thwarted a Ryuk ransomware outbreak. Retrieved October 30, 2020.](https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/)
[^fn2]: [Goody, K., et al (2019, January 11). A Nasty Trick: From Credential Theft Malware to Business Disruption. Retrieved May 12, 2020.](https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html)
[^fn3]: [McKeague, B. et al. (2019, April 5). Pick-Six: Intercepting a FIN6 Intrusion, an Actor Recently Tied to Ryuk and LockerGoga Ransomware. Retrieved April 17, 2019.](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)