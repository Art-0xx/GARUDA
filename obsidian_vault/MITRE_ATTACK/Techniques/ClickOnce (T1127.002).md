---
mitre_data:
  id: T1127.002
  linker_tags:
  - mitre/attack/linker/stealth/clickonce
  - mitre/attack/linker/execution/clickonce
  name: ClickOnce
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# ClickOnce (`T1127.002`)

Adversaries may use ClickOnce applications (.appref-ms and .application files) to proxy execution of code through a trusted Windows utility.[^fn6] ClickOnce is a deployment that enables a user to create self-updating Windows-based .NET applications (i.e, .XBAP, .EXE, or .DLL) that install and run from a file share or web page with minimal user interaction. The application launches as a child process of DFSVC.EXE, which is responsible for installing, launching, and updating the application.[^fn3]

Because ClickOnce applications receive only limited permissions, they do not require administrative permissions to install.[^fn2] As such, adversaries may abuse ClickOnce to proxy execution of malicious code without needing to escalate privileges.

ClickOnce may be abused in a number of ways. For example, an adversary may rely on [User Execution](https://attack.mitre.org/techniques/T1204). When a user visits a malicious website, the .NET malware is disguised as legitimate software and a ClickOnce popup is displayed for installation.[^fn4]

Adversaries may also abuse ClickOnce to execute malware via a [Rundll32](https://attack.mitre.org/techniques/T1218/011) script using the command `rundll32.exe dfshim.dll,ShOpenVerbApplication1`.[^fn1]

Additionally, an adversary can move the ClickOnce application file to a remote user’s startup folder for continued malicious code deployment (i.e., [Registry Run Keys / Startup Folder](https://attack.mitre.org/techniques/T1547/001)).[^fn6][^fn5]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Trusted Developer Utilities Proxy Execution (T1127)|Trusted Developer Utilities Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1127.002](https://attack.mitre.org/techniques/T1127/002)

[^fn1]: [LOLBAS. (n.d.). /Dfsvc.exe. Retrieved September 9, 2024.](https://lolbas-project.github.io/lolbas/Binaries/Dfsvc/)
[^fn2]: [Microsoft. (2023, September 14). ClickOnce security and deployment. Retrieved September 9, 2024.](https://learn.microsoft.com/en-us/visualstudio/deployment/clickonce-security-and-deployment?view=vs-2022)
[^fn3]: [Nick Powers. (2023, June 7). Less SmartScreen More Caffeine: (Ab)Using ClickOnce for Trusted Code Execution. Retrieved September 9, 2024.](https://posts.specterops.io/less-smartscreen-more-caffeine-ab-using-clickonce-for-trusted-code-execution-1446ea8051c5)
[^fn4]: [Ryan Gandrud. (2015, March 23). All You Need Is One – A ClickOnce Love Story. Retrieved September 9, 2024.](https://www.netspi.com/blog/technical-blog/adversary-simulation/all-you-need-is-one-a-clickonce-love-story/)
[^fn5]: [William J. Burke IV. (n.d.). Appref-ms Abuse for  Code Execution & C2. Retrieved September 9, 2024.](https://i.blackhat.com/USA-19/Wednesday/us-19-Burke-ClickOnce-And-Youre-In-When-Appref-Ms-Abuse-Is-Operating-As-Intended-wp.pdf?_gl=1*1jv89bf*_gcl_au*NjAyMzkzMjc3LjE3MjQ4MDk4OTQ.*_ga*MTk5OTA3ODkwMC4xNzI0ODA5ODk0*_ga_K4JK67TFYV*MTcyNDgwOTg5NC4xLjEuMTcyNDgwOTk1Ny4wLjAuMA..&_ga=2.256219723.1512103758.1724809895-1999078900.1724809894)
[^fn6]: [William Joseph Burke III. (2019, August 7). CLICKONCE AND YOU’RE IN: When .appref-ms abuse is operating as intended. Retrieved September 9, 2024.](https://i.blackhat.com/USA-19/Wednesday/us-19-Burke-ClickOnce-And-Youre-In-When-Appref-Ms-Abuse-Is-Operating-As-Intended.pdf?_gl=1*16njas6*_gcl_au*NjAyMzkzMjc3LjE3MjQ4MDk4OTQ.*_ga*MTk5OTA3ODkwMC4xNzI0ODA5ODk0*_ga_K4JK67TFYV*MTcyNDgwOTg5NC4xLjEuMTcyNDgwOTk1Ny4wLjAuMA..&_ga=2.253743689.1512103758.1724809895-1999078900.1724809894)