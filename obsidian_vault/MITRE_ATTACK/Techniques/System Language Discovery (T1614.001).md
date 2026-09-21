---
mitre_data:
  id: T1614.001
  linker_tags:
  - mitre/attack/linker/discovery/system_language_discovery
  name: System Language Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Language Discovery (`T1614.001`)

Adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. This information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. This decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.[^fn5]

There are various sources of data an adversary could use to infer system language, such as system defaults and keyboard layouts. Specific checks will vary based on the target and/or adversary, but may involve behaviors such as [Query Registry](https://attack.mitre.org/techniques/T1012) and calls to [Native API](https://attack.mitre.org/techniques/T1106) functions.[^fn3] 

For example, on a Windows system adversaries may attempt to infer the language of a system by querying the registry key <code>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\Language</code> or parsing the outputs of Windows API functions <code>GetUserDefaultUILanguage</code>, <code>GetSystemDefaultUILanguage</code>, <code>GetKeyboardLayoutList</code> and <code>GetUserDefaultLangID</code>.[^fn1][^fn2][^fn4]

On a macOS or Linux system, adversaries may query <code>locale</code> to retrieve the value of the <code>$LANG</code> environment variable.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/System Location Discovery (T1614)|System Location Discovery]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1614.001](https://attack.mitre.org/techniques/T1614/001)

[^fn1]: [Cybereason Nocturnus. (2021, April 1). Cybereason vs. Darkside Ransomware. Retrieved August 18, 2021.](https://www.cybereason.com/blog/cybereason-vs-darkside-ransomware)
[^fn2]: [Fedor Sinitsyn. (2021, May 25). Evolution of JSWorm Ransomware. Retrieved August 18, 2021.](https://securelist.com/evolution-of-jsworm-ransomware/102428/)
[^fn3]: [Hanel, A. (2019, January 10). Big Game Hunting with Ryuk: Another Lucrative Targeted Ransomware. Retrieved May 12, 2020.](https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/)
[^fn4]: [Ivanov, A. et al. (2018, May 7). SynAck targeted ransomware uses the Doppelgänging technique. Retrieved May 22, 2018.](https://securelist.com/synack-targeted-ransomware-uses-the-doppelganging-technique/85431/)
[^fn5]: [Pierre-Marc Bureau. (2009, January 15). Malware Trying to Avoid Some Countries. Retrieved August 18, 2021.](https://www.welivesecurity.com/2009/01/15/malware-trying-to-avoid-some-countries/)