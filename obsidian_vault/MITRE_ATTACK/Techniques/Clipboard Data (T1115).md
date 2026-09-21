---
mitre_data:
  id: T1115
  linker_tags:
  - mitre/attack/linker/collection/clipboard_data
  name: Clipboard Data
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Clipboard Data (`T1115`)

Adversaries may collect data stored in the clipboard from users copying information within or between applications. 

For example, on Windows adversaries can access clipboard data by using <code>clip.exe</code> or <code>Get-Clipboard</code>.[^fn4][^fn3][^fn1] Additionally, adversaries may monitor then replace users’ clipboard with their data (e.g., [Transmitted Data Manipulation](https://attack.mitre.org/techniques/T1565/002)).[^fn2]

macOS and Linux also have commands, such as <code>pbpaste</code>, to grab clipboard contents.[^fn5]


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1115](https://attack.mitre.org/techniques/T1115)

[^fn1]: [CISA. (2021, August 20). Alert (AA21-200B) Chinese State-Sponsored Cyber Operations: Observed TTPs. Retrieved June 21, 2022.](https://www.cisa.gov/uscert/ncas/alerts/aa21-200b)
[^fn2]: [Maljic, T. (2020, April 16). Mining for malicious Ruby gems. Retrieved October 15, 2022.](https://blog.reversinglabs.com/blog/mining-for-malicious-ruby-gems)
[^fn3]: [Microsoft, JasonGerend, et al. (2023, February 3). clip. Retrieved June 21, 2022.](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/clip)
[^fn4]: [Microsoft. (n.d.). About the Clipboard. Retrieved March 29, 2016.](https://msdn.microsoft.com/en-us/library/ms649012)
[^fn5]: [rvrsh3ll. (2016, May 18). Operating with EmPyre. Retrieved July 12, 2017.](https://medium.com/rvrsh3ll/operating-with-empyre-ea764eda3363)