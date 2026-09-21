---
mitre_data:
  id: T1048.003
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_unencrypted_non-c2_protocol
  name: Exfiltration Over Unencrypted Non-C2 Protocol
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Unencrypted Non-C2 Protocol (`T1048.003`)

Adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. The data may also be sent to an alternate network location from the main command and control server.[^fn1]

Adversaries may opt to obfuscate this data, without the use of encryption, within network protocols that are natively unencrypted (such as HTTP, FTP, or DNS). This may include custom or publicly available encoding/compression algorithms (such as base64) as well as embedding data within protocol headers and fields. 


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Alternative Protocol (T1048)|Exfiltration Over Alternative Protocol]]

# Tool(s)

- [[../Tools/Rclone|Rclone]]
- [[../Tools/BITSAdmin|BITSAdmin]]
- [[../Tools/ftp|ftp]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1048.003](https://attack.mitre.org/techniques/T1048/003)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [Cisco. (2022, August 16). copy - Cisco IOS Configuration Fundamentals Command Reference . Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/command/cf_command_ref/C_commands.html#wp1068167689)