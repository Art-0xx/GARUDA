---
mitre_data:
  id: T1027.012
  linker_tags:
  - mitre/attack/linker/stealth/lnk_icon_smuggling
  name: LNK Icon Smuggling
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# LNK Icon Smuggling (`T1027.012`)

Adversaries may smuggle commands to download malicious payloads past content filters by hiding them within otherwise seemingly benign windows shortcut files. Windows shortcut files (.LNK) include many metadata fields, including an icon location field (also known as the `IconEnvironmentDataBlock`) designed to specify the path to an icon file that is to be displayed for the LNK file within a host directory. 

Adversaries may abuse this LNK metadata to download malicious payloads. For example, adversaries have been observed using LNK files as phishing payloads to deliver malware. Once invoked (e.g., [Malicious File](https://attack.mitre.org/techniques/T1204/002)), payloads referenced via external URLs within the LNK icon location field may be downloaded. These files may also then be invoked by [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059)/[System Binary Proxy Execution](https://attack.mitre.org/techniques/T1218) arguments within the target path field of the LNK.[^fn1][^fn2]

LNK Icon Smuggling may also be utilized post compromise, such as malicious scripts executing an LNK on an infected host to download additional malicious payloads. 



# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.012](https://attack.mitre.org/techniques/T1027/012)

[^fn1]: [Unprotect Project. (2019, March 18). Shortcut Hiding. Retrieved October 3, 2023.](https://unprotect.it/technique/shortcut-hiding/)
[^fn2]: [Weyne, F. (2017, April). Booby trap a shortcut with a backdoor. Retrieved October 3, 2023.](https://web.archive.org/web/20171225152553/https://www.uperesia.com/booby-trapped-shortcut)