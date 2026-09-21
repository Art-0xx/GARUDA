---
mitre_data:
  id: T1027
  linker_tags:
  - mitre/attack/linker/stealth/obfuscated_files_or_information
  name: Obfuscated Files or Information
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Obfuscated Files or Information (`T1027`)

Adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. This is common behavior that can be used across different platforms and the network to evade defenses. 

Payloads may be compressed, archived, or encrypted in order to avoid detection. These payloads may be used during Initial Access or later to mitigate detection. Sometimes a user's action may be required to open and [Deobfuscate/Decode Files or Information](https://attack.mitre.org/techniques/T1140) for [User Execution](https://attack.mitre.org/techniques/T1204). The user may also be required to input a password to open a password protected compressed/encrypted file that was provided by the adversary.[^fn1] Adversaries may also use compressed or archived scripts, such as JavaScript. 

Portions of files can also be encoded to hide the plain-text strings that would otherwise help defenders with discovery.[^fn4] Payloads may also be split into separate, seemingly benign files that only reveal malicious functionality when reassembled.[^fn5]

Adversaries may also abuse [Command Obfuscation](https://attack.mitre.org/techniques/T1027/010) to obscure commands executed from payloads or directly via [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059). Environment variables, aliases, characters, and other platform/language specific semantics can be used to evade signature based detections and application control mechanisms.[^fn2][^fn3][^fn6] 


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Fileless Storage (T1027.011)|Fileless Storage]]
- [[../Techniques/Embedded Payloads (T1027.009)|Embedded Payloads]]
- [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]
- [[../Techniques/Stripped Payloads (T1027.008)|Stripped Payloads]]
- [[../Techniques/Binary Padding (T1027.001)|Binary Padding]]
- [[../Techniques/Junk Code Insertion (T1027.016)|Junk Code Insertion]]
- [[../Techniques/SVG Smuggling (T1027.017)|SVG Smuggling]]
- [[../Techniques/LNK Icon Smuggling (T1027.012)|LNK Icon Smuggling]]
- [[../Techniques/Indicator Removal from Tools (T1027.005)|Indicator Removal from Tools]]
- [[../Techniques/Polymorphic Code (T1027.014)|Polymorphic Code]]
- [[../Techniques/Steganography (T1027.003)|Steganography]]
- [[../Techniques/Compile After Delivery (T1027.004)|Compile After Delivery]]
- [[../Techniques/HTML Smuggling (T1027.006)|HTML Smuggling]]
- [[../Techniques/Command Obfuscation (T1027.010)|Command Obfuscation]]
- [[../Techniques/Software Packing (T1027.002)|Software Packing]]
- [[../Techniques/Invisible Unicode (T1027.018)|Invisible Unicode]]
- [[../Techniques/Dynamic API Resolution (T1027.007)|Dynamic API Resolution]]
- [[../Techniques/Compression (T1027.015)|Compression]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/CARROTBALL|CARROTBALL]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Out1|Out1]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/MCMD|MCMD]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027](https://attack.mitre.org/techniques/T1027)

[^fn1]: [Adair, S.. (2016, November 9). PowerDuke: Widespread Post-Election Spear Phishing Campaigns Targeting Think Tanks and NGOs. Retrieved January 11, 2017.](https://www.volexity.com/blog/2016/11/09/powerduke-post-election-spear-phishing-campaigns-targeting-think-tanks-and-ngos/)
[^fn2]: [Bohannon, D. & Carr N. (2017, June 30). Obfuscation in the Wild: Targeted Attackers Lead the Way in Evasion Techniques. Retrieved February 12, 2018.](https://web.archive.org/web/20170923102302/https://www.fireeye.com/blog/threat-research/2017/06/obfuscation-in-the-wild.html)
[^fn3]: [Bohannon, D. & Holmes, L. (2017, July 27). Revoke-Obfuscation: PowerShell Obfuscation Detection Using Science. Retrieved November 17, 2024.](https://www.blackhat.com/docs/us-17/thursday/us-17-Bohannon-Revoke-Obfuscation-PowerShell-Obfuscation-Detection-And%20Evasion-Using-Science-wp.pdf)
[^fn4]: [Pierre-Marc Bureau. (2013, April 26). Linux/Cdorked.A: New Apache backdoor being used in the wild to serve Blackhole. Retrieved September 10, 2017.](https://www.welivesecurity.com/2013/04/26/linuxcdorked-new-apache-backdoor-in-the-wild-serves-blackhole/)
[^fn5]: [Tedesco, B. (2016, September 23). Security Alert Summary. Retrieved February 12, 2018.](https://www.carbonblack.com/2016/09/23/security-advisory-variants-well-known-adware-families-discovered-include-sophisticated-obfuscation-techniques-previously-associated-nation-state-attacks/)
[^fn6]: [White, J. (2017, March 10). Pulling Back the Curtains on EncodedCommand PowerShell Attacks. Retrieved February 12, 2018.](https://researchcenter.paloaltonetworks.com/2017/03/unit42-pulling-back-the-curtains-on-encodedcommand-powershell-attacks/)