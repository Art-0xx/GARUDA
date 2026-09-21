---
mitre_data:
  id: T1027.015
  linker_tags:
  - mitre/attack/linker/stealth/compression
  name: Compression
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Compression (`T1027.015`)

Adversaries may use compression to obfuscate their payloads or files. Compressed file formats such as ZIP, gzip, 7z, and RAR can compress and archive multiple files together to make it easier and faster to transfer files. In addition to compressing files, adversaries may also compress shellcode directly - for example, in order to store it in a Windows Registry key (i.e., [Fileless Storage](https://attack.mitre.org/techniques/T1027/011)).[^fn4]

In order to further evade detection, adversaries may combine multiple ZIP files into one archive. This process of concatenation creates an archive that appears to be a single archive but in fact contains the central directories of the embedded archives. Some ZIP readers, such as 7zip, may not be able to identify concatenated ZIP files and miss the presence of the malicious payload.[^fn1]

File archives may be sent as one [Spearphishing Attachment](https://attack.mitre.org/techniques/T1566/001) through email. Adversaries have sent malicious payloads as archived files to encourage the user to interact with and extract the malicious payload onto their system (i.e., [Malicious File](https://attack.mitre.org/techniques/T1204/002)).[^fn2] However, some file compression tools, such as 7zip, can be used to produce self-extracting archives. Adversaries may send self-extracting archives to hide the functionality of their payload and launch it without requiring multiple actions from the user.[^fn3]

[Compression](https://attack.mitre.org/techniques/T1027/015) may be used in combination with [Encrypted/Encoded File](https://attack.mitre.org/techniques/T1027/013) where compressed files are encrypted and password-protected.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tool(s)

- [[../Tools/PcShare|PcShare]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.015](https://attack.mitre.org/techniques/T1027/015)

[^fn1]: [Arthur Vaiselbuh, Peleg Cabra. (2024, November 7). Evasive ZIP Concatenation: Trojan Targets Windows Users. Retrieved March 3, 2025.](https://perception-point.io/blog/evasive-concatenated-zip-trojan-targets-windows-users/)
[^fn2]: [Hada, H. (2021, December 28).  Flagpro The new malware used by BlackTech. Retrieved March 25, 2022.](https://insight-jp.nttsecurity.com/post/102hf3q/flagpro-the-new-malware-used-by-blacktech)
[^fn3]: [Ravie Lakshmanan. (2023, April 5). Hackers Using Self-Extracting Archives Exploit for Stealthy Backdoor Attacks. Retrieved March 3, 2025.](https://thehackernews.com/2023/04/hackers-using-self-extracting-archives.html)
[^fn4]: [Trustwave SpiderLabs. (2020, June 22). Pillowmint: FIN7’s Monkey Thief . Retrieved July 27, 2020.](https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/pillowmint-fin7s-monkey-thief/)