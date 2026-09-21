---
mitre_data:
  id: T1048
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_alternative_protocol
  name: Exfiltration Over Alternative Protocol
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Alternative Protocol (`T1048`)

Adversaries may steal data by exfiltrating it over a different protocol than that of the existing command and control channel. The data may also be sent to an alternate network location from the main command and control server.  

Alternate protocols include FTP, SMTP, HTTP/S, DNS, SMB, or any other network protocol not being used as the main command and control channel. Adversaries may also opt to encrypt and/or obfuscate these alternate channels. 

[Exfiltration Over Alternative Protocol](https://attack.mitre.org/techniques/T1048) can be done using various common operating system utilities such as [Net](https://attack.mitre.org/software/S0039)/SMB or FTP.[^fn2] On macOS and Linux <code>curl</code> may be used to invoke protocols such as HTTP/S or FTP/S to exfiltrate data from a system.[^fn3]

Many IaaS and SaaS platforms (such as Microsoft Exchange, Microsoft SharePoint, GitHub, and AWS S3) support the direct download of files, emails, source code, and other sensitive information via the web console or [Cloud API](https://attack.mitre.org/techniques/T1059/009).


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Network Devices
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Exfiltration Over Symmetric Encrypted Non-C2 Protocol (T1048.001)|Exfiltration Over Symmetric Encrypted Non-C2 Protocol]]
- [[../Techniques/Exfiltration Over Asymmetric Encrypted Non-C2 Protocol (T1048.002)|Exfiltration Over Asymmetric Encrypted Non-C2 Protocol]]
- [[../Techniques/Exfiltration Over Unencrypted Non-C2 Protocol (T1048.003)|Exfiltration Over Unencrypted Non-C2 Protocol]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1048](https://attack.mitre.org/techniques/T1048)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Grunzweig, J. and Falcone, R.. (2016, October 4). OilRig Malware Campaign Updates Toolset and Expands Targets. Retrieved May 3, 2017.](http://researchcenter.paloaltonetworks.com/2016/10/unit42-oilrig-malware-campaign-updates-toolset-and-expands-targets/)
[^fn3]: [Phil Stokes. (2021, February 16). 20 Common Tools & Techniques Used by macOS Threat Actors & Malware. Retrieved August 23, 2021.](https://labs.sentinelone.com/20-common-tools-techniques-used-by-macos-threat-actors-malware/)