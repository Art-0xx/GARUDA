---
mitre_data:
  id: T1486
  linker_tags:
  - mitre/attack/linker/impact/data_encrypted_for_impact
  name: Data Encrypted for Impact
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Data Encrypted for Impact (`T1486`)

Adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. They can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. This may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.[^fn8][^fn2][^fn9][^fn10]

In the case of ransomware, it is typical that common user files like Office documents, PDFs, images, videos, audio, text, and source code files will be encrypted (and often renamed and/or tagged with specific file markers). Adversaries may need to first employ other behaviors, such as [File and Directory Permissions Modification](https://attack.mitre.org/techniques/T1222) or [System Shutdown/Reboot](https://attack.mitre.org/techniques/T1529), in order to unlock and/or gain access to manipulate these files.[^fn1] In some cases, adversaries may encrypt critical system files, disk partitions, and the MBR.[^fn9] Adversaries may also encrypt virtual machines hosted on ESXi or other hypervisors.[^fn6] 

To maximize impact on the target organization, malware designed for encrypting data may have worm-like features to propagate across a network by leveraging other attack techniques like [Valid Accounts](https://attack.mitre.org/techniques/T1078), [OS Credential Dumping](https://attack.mitre.org/techniques/T1003), and [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002).[^fn2][^fn9] Encryption malware may also leverage [Internal Defacement](https://attack.mitre.org/techniques/T1491/001), such as changing victim wallpapers or ESXi server login messages, or otherwise intimidate victims by sending ransom notes or other messages to connected printers (known as "print bombing").[^fn7][^fn5]

In cloud environments, storage objects within compromised accounts may also be encrypted.[^fn3] For example, in AWS environments, adversaries may leverage services such as AWS’s Server-Side Encryption with Customer Provided Keys (SSE-C) to encrypt data.[^fn4]


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1486](https://attack.mitre.org/techniques/T1486)

[^fn1]: [Baskin, B. (2020, July 8). TAU Threat Discovery: Conti Ransomware. Retrieved February 17, 2021.](https://www.carbonblack.com/blog/tau-threat-discovery-conti-ransomware/)
[^fn2]: [Berry, A., Homan, J., and Eitzman, R. (2017, May 23). WannaCry Malware Profile. Retrieved March 15, 2019.](https://www.fireeye.com/blog/threat-research/2017/05/wannacry-malware-profile.html)
[^fn3]: [Gietzen, S. (n.d.). S3 Ransomware Part 1: Attack Vector. Retrieved April 14, 2021.](https://rhinosecuritylabs.com/aws/s3-ransomware-part-1-attack-vector/)
[^fn4]: [Halcyon RISE Team. (2025, January 13). Abusing AWS Native Services: Ransomware Encrypting S3 Buckets with SSE-C. Retrieved March 18, 2025.](https://www.halcyon.ai/blog/abusing-aws-native-services-ransomware-encrypting-s3-buckets-with-sse-c)
[^fn5]: [Jason Hill. (2023, February 8). VMware ESXi in the Line of Ransomware Fire. Retrieved March 26, 2025.](https://www.varonis.com/blog/vmware-esxi-in-the-line-of-ransomware-fire)
[^fn6]: [Michael Dawson. (2021, August 30). Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware. Retrieved March 26, 2025.](https://www.crowdstrike.com/en-us/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/)
[^fn7]: [NHS Digital. (2020, November 26). Egregor Ransomware The RaaS successor to Maze. Retrieved December 29, 2020.](https://digital.nhs.uk/cyber-alerts/2020/cc-3681#summary)
[^fn8]: [US-CERT. (2016, March 31). Alert (TA16-091A): Ransomware and Recent Variants. Retrieved March 15, 2019.](https://www.us-cert.gov/ncas/alerts/TA16-091A)
[^fn9]: [US-CERT. (2017, July 1). Alert (TA17-181A): Petya Ransomware. Retrieved March 15, 2019.](https://www.us-cert.gov/ncas/alerts/TA17-181A)
[^fn10]: [US-CERT. (2018, December 3). Alert (AA18-337A): SamSam Ransomware. Retrieved March 15, 2019.](https://www.us-cert.gov/ncas/alerts/AA18-337A)