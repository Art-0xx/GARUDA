---
mitre_data:
  id: T1216.002
  linker_tags:
  - mitre/attack/linker/stealth/syncappvpublishingserver
  name: SyncAppvPublishingServer
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# SyncAppvPublishingServer (`T1216.002`)

Adversaries may abuse SyncAppvPublishingServer.vbs to proxy execution of malicious [PowerShell](https://attack.mitre.org/techniques/T1059/001) commands. SyncAppvPublishingServer.vbs is a Visual Basic script associated with how Windows virtualizes applications (Microsoft Application Virtualization, or App-V).[^fn6] For example, Windows may render Win32 applications to users as virtual applications, allowing users to launch and interact with them as if they were installed locally.[^fn2][^fn5]
    
The SyncAppvPublishingServer.vbs script is legitimate, may be signed by Microsoft, and is commonly executed from `\System32` through the command line via `wscript.exe`.[^fn1][^fn3]

Adversaries may abuse SyncAppvPublishingServer.vbs to bypass [PowerShell](https://attack.mitre.org/techniques/T1059/001) execution restrictions and evade defensive counter measures by "living off the land."[^fn7][^fn1] Proxying execution may function as a trusted/signed alternative to directly invoking `powershell.exe`.[^fn4]

For example,  [PowerShell](https://attack.mitre.org/techniques/T1059/001) commands may be invoked using:[^fn3]

`SyncAppvPublishingServer.vbs "n; {PowerShell}"`


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Script Proxy Execution (T1216)|System Script Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1216.002](https://attack.mitre.org/techniques/T1216/002)

[^fn1]: [John Fokker. (2022, March 17). Suspected DarkHotel APT activity update. Retrieved February 6, 2024.](https://www.trellix.com/en-ca/about/newsroom/stories/research/suspected-darkhotel-apt-activity-update/)
[^fn2]: [Microsoft. (2022, November 3). Getting started with App-V for Windows client. Retrieved February 6, 2024.](https://learn.microsoft.com/en-us/windows/application-management/app-v/appv-getting-started)
[^fn3]: [Nick Landers, Casey Smith. (n.d.). /Syncappvpublishingserver.vbs. Retrieved February 6, 2024.](https://lolbas-project.github.io/lolbas/Scripts/Syncappvpublishingserver/)
[^fn4]: [Nick Landers. (2017, August 8). Need a signed alternative to Powershell.exe? SyncAppvPublishingServer in Win10 has got you covered.. Retrieved September 12, 2024.](https://x.com/monoxgas/status/895045566090010624)
[^fn5]: [Raj Chandel. (2022, March 17). Indirect Command Execution: Defense Evasion (T1202). Retrieved February 6, 2024.](https://www.hackingarticles.in/indirect-command-execution-defense-evasion-t1202/)
[^fn6]: [SEONGSU PARK. (2022, December 27). BlueNoroff introduces new methods bypassing MoTW. Retrieved February 6, 2024.](https://securelist.com/bluenoroff-methods-bypass-motw/108383/)
[^fn7]: [Strontic. (n.d.). SyncAppvPublishingServer.exe. Retrieved February 6, 2024.](https://strontic.github.io/xcyclopedia/library/SyncAppvPublishingServer.exe-3C291419F60CDF9C2E4E19AD89944FA3.html)