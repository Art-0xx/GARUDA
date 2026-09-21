---
mitre_data:
  id: T1027.002
  linker_tags:
  - mitre/attack/linker/stealth/software_packing
  name: Software Packing
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Software Packing (`T1027.002`)

Adversaries may perform software packing or virtual machine software protection to conceal their code. Software packing is a method of compressing or encrypting an executable. Packing an executable changes the file signature in an attempt to avoid signature-based detection. Most decompression techniques decompress the executable code in memory. Virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. A virtual machine is then called to run this code.[^fn2] 

Utilities used to perform software packing are called packers. Example packers are MPRESS and UPX. A more comprehensive list of known packers is available, but adversaries may create their own packing techniques that do not leave the same artifacts as well-known packers to evade defenses.[^fn1]  


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tool(s)

- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.002](https://attack.mitre.org/techniques/T1027/002)

[^fn1]: [Alexandre D'Hondt. (n.d.). Awesome Executable Packing. Retrieved March 11, 2022.](https://github.com/dhondta/awesome-executable-packing)
[^fn2]: [Kafka, F. (2018, January). ESET's Guide to Deobfuscating and Devirtualizing FinFisher. Retrieved August 12, 2019.](https://www.welivesecurity.com/wp-content/uploads/2018/01/WP-FinFisher.pdf)