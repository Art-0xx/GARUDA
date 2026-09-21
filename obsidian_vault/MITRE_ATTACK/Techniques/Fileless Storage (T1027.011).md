---
mitre_data:
  id: T1027.011
  linker_tags:
  - mitre/attack/linker/stealth/fileless_storage
  name: Fileless Storage
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Fileless Storage (`T1027.011`)

Adversaries may store data in "fileless" formats to conceal malicious activity from defenses. Fileless storage can be broadly defined as any format other than a file. Common examples of non-volatile fileless storage in Windows systems include the Windows Registry, event logs, or WMI repository.[^fn6][^fn5] Shared memory directories on Linux systems (`/dev/shm`, `/run/shm`, `/var/run`, and `/var/lock`) and volatile directories on Network Devices (`/tmp` and `/volatile`) may also be considered fileless storage, as files written to these directories are mapped directly to RAM and not stored on the disk.[^fn4][^fn8][^fn1][^fn2][^fn3].

Similar to fileless in-memory behaviors such as [Reflective Code Loading](https://attack.mitre.org/techniques/T1620) and [Process Injection](https://attack.mitre.org/techniques/T1055), fileless data storage may remain undetected by antivirus and other endpoint security tools that can only access specific file formats from disk storage. Leveraging fileless storage may also allow adversaries to bypass the protections offered by read-only file systems in Linux.[^fn7]

Adversaries may use fileless storage to conceal various types of stored data, including payloads/shellcode (potentially being used as part of [Persistence](https://attack.mitre.org/tactics/TA0003)) and collected data not yet exfiltrated from the victim (e.g., [Local Data Staging](https://attack.mitre.org/techniques/T1074/001)). Adversaries also often encrypt, encode, splice, or otherwise obfuscate this fileless data when stored. 

Some forms of fileless storage activity may indirectly create artifacts in the file system, but in central and otherwise difficult to inspect formats such as the WMI (e.g., `%SystemRoot%\System32\Wbem\Repository`) or Registry (e.g., `%SystemRoot%\System32\Config`) physical files.[^fn6] 


# Platform(s)

- Linux
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.011](https://attack.mitre.org/techniques/T1027/011)

[^fn1]: [ Nitzan Yaakov. (2024, June 4). Muhstik Malware Targets Message Queuing Services Applications. Retrieved September 24, 2024.](https://www.aquasec.com/blog/muhstik-malware-targets-message-queuing-services-applications/)
[^fn2]: [Batista, João.  Gi7w0rm. (2024, August 27). Retrieved June 5, 2025.](https://www.bitsight.com/blog/7777-botnet-insights-multi-target-botnet)
[^fn3]: [CISCO. (2021, September 14). Cisco Nexus 9000 Series NX-OS Fundamentals Configuration Guide, Release 7.x. Retrieved June 5, 2025.](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/7-x/fundamentals/configuration/guide/b_Cisco_Nexus_9000_Series_NX-OS_Fundamentals_Configuration_Guide_7x/b_Cisco_Nexus_9000_Series_NX-OS_Fundamentals_Configuration_Guide_7x_chapter_01000.html)
[^fn4]: [Elastic. (n.d.). Binary Executed from Shared Memory Directory. Retrieved September 24, 2024.](https://www.elastic.co/guide/en/security/7.17/prebuilt-rule-7-16-3-binary-executed-from-shared-memory-directory.html)
[^fn5]: [Legezo, D. (2022, May 4). A new secret stash for “fileless” malware. Retrieved March 23, 2023.](https://securelist.com/a-new-secret-stash-for-fileless-malware/106393/)
[^fn6]: [Microsoft. (2023, February 6). Fileless threats. Retrieved March 23, 2023.](https://learn.microsoft.com/microsoft-365/security/intelligence/fileless-threats)
[^fn7]: [Nicholas Lang. (2022, May 3). Fileless malware mitigation. Retrieved September 24, 2024.](https://sysdig.com/blog/containers-read-only-fileless-malware/)
[^fn8]: [Ori David. (2024, February 1). Frog4Shell — FritzFrog Botnet Adds One-Days to Its Arsenal. Retrieved September 24, 2024.](https://www.akamai.com/blog/security-research/fritzfrog-botnet-new-capabilities-log4shell)