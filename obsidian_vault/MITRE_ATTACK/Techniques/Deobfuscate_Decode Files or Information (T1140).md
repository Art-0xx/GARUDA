---
mitre_data:
  id: T1140
  linker_tags:
  - mitre/attack/linker/stealth/deobfuscate_decode_files_or_information
  name: Deobfuscate/Decode Files or Information
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Deobfuscate/Decode Files or Information (`T1140`)

Adversaries may use [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027) to hide artifacts of an intrusion from analysis. They may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. Methods for doing that include built-in functionality of malware or by using utilities present on the system.

One such example is the use of [certutil](https://attack.mitre.org/software/S0160) to decode a remote access tool portable executable file that has been hidden inside a certificate file.[^fn3] Another example is using the Windows <code>copy /b</code> or <code>type</code> command to reassemble binary fragments into a malicious payload.[^fn4][^fn2]

Sometimes a user's action may be required to open it for deobfuscation or decryption as part of [User Execution](https://attack.mitre.org/techniques/T1204). The user may also be required to input a password to open a password protected compressed/encrypted file that was provided by the adversary.[^fn1]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/certutil|certutil]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/IronNetInjector|IronNetInjector]]
- [[../Tools/Expand|Expand]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1140](https://attack.mitre.org/techniques/T1140)

[^fn1]: [Adair, S.. (2016, November 9). PowerDuke: Widespread Post-Election Spear Phishing Campaigns Targeting Think Tanks and NGOs. Retrieved January 11, 2017.](https://www.volexity.com/blog/2016/11/09/powerduke-post-election-spear-phishing-campaigns-targeting-think-tanks-and-ngos/)
[^fn2]: [Aleksandar Milenkoski, Juan Andres Guerrero-Saade, and Joey Chen. (2023, March 23). Operation Tainted Love | Chinese APTs Target Telcos in New Attacks. Retrieved March 18, 2025.](https://www.sentinelone.com/labs/operation-tainted-love-chinese-apts-target-telcos-in-new-attacks/)
[^fn3]: [Malwarebytes Labs. (2017, March 27). New targeted attack against Saudi Arabia Government. Retrieved July 3, 2017.](https://blog.malwarebytes.com/cybercrime/social-engineering-cybercrime/2017/03/new-targeted-attack-saudi-arabia-government/)
[^fn4]: [Tedesco, B. (2016, September 23). Security Alert Summary. Retrieved February 12, 2018.](https://www.carbonblack.com/2016/09/23/security-advisory-variants-well-known-adware-families-discovered-include-sophisticated-obfuscation-techniques-previously-associated-nation-state-attacks/)