---
mitre_data:
  id: T1217
  linker_tags:
  - mitre/attack/linker/discovery/browser_information_discovery
  name: Browser Information Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Browser Information Discovery (`T1217`)

Adversaries may enumerate information about browsers to learn more about compromised environments. Data saved by browsers (such as bookmarks, accounts, and browsing history) may reveal a variety of personal information about users (e.g., banking sites, relationships/interests, social media, etc.) as well as details about internal network resources such as servers, tools/dashboards, or other related infrastructure.[^fn2]

Browser information may also highlight additional targets after an adversary has access to valid credentials, especially [Credentials In Files](https://attack.mitre.org/techniques/T1552/001) associated with logins cached by a browser.

Specific storage locations vary based on platform and/or application, but browser information is typically stored in local files and databases (e.g., `%APPDATA%/Google/Chrome`).[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1217](https://attack.mitre.org/techniques/T1217)

[^fn1]: [Chrome Enterprise and Education Help. (n.d.). Use Chrome Browser with Roaming User Profiles. Retrieved March 28, 2023.](https://support.google.com/chrome/a/answer/7349337)
[^fn2]: [Golubev, S. (n.d.). How malware steals autofill data from browsers. Retrieved March 28, 2023.](https://www.kaspersky.com/blog/browser-data-theft/27871/)