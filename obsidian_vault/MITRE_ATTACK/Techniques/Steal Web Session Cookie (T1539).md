---
mitre_data:
  id: T1539
  linker_tags:
  - mitre/attack/linker/credential_access/steal_web_session_cookie
  name: Steal Web Session Cookie
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Steal Web Session Cookie (`T1539`)

An adversary may steal web application or service session cookies and use them to gain access to web applications or Internet services as an authenticated user without needing credentials. Web applications and services often use session cookies as an authentication token after a user has authenticated to a website.

Cookies are often valid for an extended period of time, even if the web application is not actively used. Cookies can be found on disk, in the process memory of the browser, and in network traffic to remote systems. Additionally, other applications on the targets machine might store sensitive authentication cookies in memory (e.g. apps which authenticate to cloud services). Session cookies can be used to bypasses some multi-factor authentication protocols.[^fn6]

There are several examples of malware targeting cookies from web browsers on the local system.[^fn3][^fn2] Adversaries may also steal cookies by injecting malicious JavaScript content into websites or relying on [User Execution](https://attack.mitre.org/techniques/T1204) by tricking victims into running malicious JavaScript in their browser.[^fn7][^fn1]

There are also open source frameworks such as `Evilginx2` and `Muraena` that can gather session cookies through a malicious proxy (e.g., [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557)) that can be set up by an adversary and used in phishing campaigns.[^fn4][^fn5]

After an adversary acquires a valid cookie, they can then perform a [Web Session Cookie](https://attack.mitre.org/techniques/T1550/004) technique to login to the corresponding web application.


# Platform(s)

- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1539](https://attack.mitre.org/techniques/T1539)

[^fn1]: [Brian Krebs. (2023, May 30). Discord Admins Hacked by Malicious Bookmarks. Retrieved January 2, 2024.](https://krebsonsecurity.com/2023/05/discord-admins-hacked-by-malicious-bookmarks/)
[^fn2]: [Chen, Y., Hu, W., Xu, Z., et. al. (2019, January 31). Mac Malware Steals Cryptocurrency Exchanges’ Cookies. Retrieved October 14, 2019.](https://unit42.paloaltonetworks.com/mac-malware-steals-cryptocurrency-exchanges-cookies/)
[^fn3]: [GReAT. (2019, April 10). Project TajMahal – a sophisticated new APT framework. Retrieved October 14, 2019.](https://securelist.com/project-tajmahal/90240/)
[^fn4]: [Gretzky, Kuba. (2019, April 10). Retrieved October 8, 2019.](https://github.com/kgretzky/evilginx2)
[^fn5]: [Orrù, M., Trotta, G.. (2019, September 11). Muraena. Retrieved October 14, 2019.](https://github.com/muraenateam/muraena)
[^fn6]: [Rehberger, J. (2018, December). Pivot to the Cloud using Pass the Cookie. Retrieved April 5, 2019.](https://wunderwuzzi23.github.io/blog/passthecookie.html)
[^fn7]: [Tiago Pereira. (2023, November 2). Attackers use JavaScript URLs, API forms and more to scam users in popular online game “Roblox”. Retrieved January 2, 2024.](https://blog.talosintelligence.com/roblox-scam-overview/)