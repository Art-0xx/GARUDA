---
mitre_data:
  id: T1665
  linker_tags:
  - mitre/attack/linker/command_and_control/hide_infrastructure
  name: Hide Infrastructure
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Hide Infrastructure (`T1665`)

Adversaries may manipulate network traffic in order to hide and evade detection of their C2 infrastructure. This can be accomplished by identifying and filtering traffic from defensive tools,[^fn2] masking malicious domains to obfuscate the true destination from both automated scanning tools and security researchers,[^fn7][^fn9][^fn4] and otherwise hiding malicious artifacts to delay discovery and prolong the effectiveness of adversary infrastructure that could otherwise be identified, blocked, or taken down entirely.

C2 networks may include the use of [Proxy](https://attack.mitre.org/techniques/T1090) or VPNs to disguise IP addresses, which can allow adversaries to blend in with normal network traffic and bypass conditional access policies or anti-abuse protections. For example, an adversary may use a virtual private cloud to spoof their IP address to closer align with a victim's IP address ranges. This may also bypass security measures relying on geolocation of the source IP address.[^fn10][^fn8]

Adversaries may also attempt to filter network traffic in order to evade defensive tools in numerous ways, including blocking/redirecting common incident responder or security appliance user agents.[^fn3][^fn1] Filtering traffic based on IP and geo-fencing may also avoid automated sandboxing or researcher activity (i.e., [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497)).[^fn2][^fn3]

Hiding C2 infrastructure may also be supported by [Resource Development](https://attack.mitre.org/tactics/TA0042) activities such as [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) and [Compromise Infrastructure](https://attack.mitre.org/techniques/T1584). For example, using widely trusted hosting services or domains such as prominent URL shortening providers or marketing services for C2 networks may enable adversaries to present benign content that later redirects victims to malicious web pages or infrastructure once specific conditions are met.[^fn5][^fn6]


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1665](https://attack.mitre.org/techniques/T1665)

[^fn1]: [Andrew Northern. (2022, November 22). SocGholish, a very real threat from a very fake update. Retrieved February 13, 2024.](https://www.proofpoint.com/us/blog/threat-insight/part-1-socgholish-very-real-threat-very-fake-update)
[^fn2]: [Axel F, Selena Larson. (2023, October 30).  TA571 Delivers IcedID Forked Loader. Retrieved February 13, 2024.](https://www.proofpoint.com/us/blog/threat-insight/security-brief-ta571-delivers-icedid-forked-loader)
[^fn3]: [Bluescreenofjeff.com. (2015, April 12). Combatting Incident Responders with Apache mod_rewrite. Retrieved February 13, 2024.](https://bluescreenofjeff.com/2016-04-12-combatting-incident-responders-with-apache-mod_rewrite/)
[^fn4]: [Dusty Miller. (2023, October 17). Are You Sure Your Browser is Up to Date? The Current Landscape of Fake Browser Updates . Retrieved February 13, 2024.](https://www.proofpoint.com/us/blog/threat-insight/are-you-sure-your-browser-date-current-landscape-fake-browser-updates)
[^fn5]: [Microsoft Threat Intelligence. (2023, December 7). Star Blizzard increases sophistication and evasion in ongoing attacks. Retrieved February 13, 2024.](https://www.microsoft.com/en-us/security/blog/2023/12/07/star-blizzard-increases-sophistication-and-evasion-in-ongoing-attacks/)
[^fn6]: [Nathaniel Raymond. (2023, August 16). Major Energy Company Targeted in Large QR Code Phishing Campaign. Retrieved February 13, 2024.](https://cofense.com/blog/major-energy-company-targeted-in-large-qr-code-campaign/)
[^fn7]: [Nick Simonian. (2023, May 22). Don't @ Me: URL Obfuscation Through Schema Abuse. Retrieved February 13, 2024.](https://www.mandiant.com/resources/blog/url-obfuscation-schema-abuse)
[^fn8]: [Orange Cyberdefense. (2024, March 14). Unveiling the depths of residential proxies providers. Retrieved April 11, 2024.](https://www.orangecyberdefense.com/global/blog/research/residential-proxies)
[^fn9]: [Spyboy. (2023). Facad1ng. Retrieved February 13, 2024.](https://github.com/spyboy-productions/Facad1ng)
[^fn10]: [Sysdig. (2023). Sysdig Global Cloud Threat Report. Retrieved March 1, 2024.](https://sysdig.com/content/c/pf-2023-global-cloud-threat-report?x=u_WFRi&xs=524303#page=1)