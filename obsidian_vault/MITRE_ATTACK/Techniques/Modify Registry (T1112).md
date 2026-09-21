---
mitre_data:
  id: T1112
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_registry
  - mitre/attack/linker/persistence/modify_registry
  name: Modify Registry
  related_tactics:
  - defense_impairment
  - persistence
tags:
- mitre/attack/technique
---



# Modify Registry (`T1112`)

Adversaries may interact with the Windows Registry as part of a variety of other techniques to aid in defense evasion, persistence, and execution.

Access to specific areas of the Registry depends on account permissions, with some keys requiring administrator-level access. The built-in Windows command-line utility [Reg](https://attack.mitre.org/software/S0075) may be used for local or remote Registry modification.[^fn5] Other tools, such as remote access tools, may also contain functionality to interact with the Registry through the Windows API.

The Registry may be modified in order to hide configuration information or malicious payloads via [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027).[^fn10][^fn3][^fn4][^fn1] The Registry may also be modified to impair defenses, such as by enabling macros for all Microsoft Office products, allowing privilege escalation without alerting the user, increasing the maximum number of allowed outbound requests, and/or modifying systems to store plaintext credentials in memory.[^fn2][^fn10]

The Registry of a remote system may be modified to aid in execution of files as part of lateral movement. It requires the remote Registry service to be running on the target system.[^fn6] Often [Valid Accounts](https://attack.mitre.org/techniques/T1078) are required, along with access to the remote system's [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002) for RPC communication.

Finally, Registry modifications may also include actions to hide keys, such as prepending key names with a null character, which will cause an error and/or be ignored when read via [Reg](https://attack.mitre.org/software/S0075) or other utilities using the Win32 API.[^fn8] Adversaries may abuse these pseudo-hidden keys to conceal payloads/commands used to maintain persistence.[^fn9][^fn7]


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Reg|Reg]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1112](https://attack.mitre.org/techniques/T1112)

[^fn1]: [CISA. (2018, March 16). Russian Government Cyber Activity Targeting Energy and Other Critical Infrastructure Sectors. Retrieved March 24, 2025.](https://www.cisa.gov/news-events/alerts/2018/03/15/russian-government-cyber-activity-targeting-energy-and-other-critical-infrastructure-sectors)
[^fn2]: [CISA. (2023, March 16). #StopRansomware: LockBit 3.0. Retrieved March 24, 2025.](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-075a)
[^fn3]: [Javier Yuste and Sergio Pastrana. (2021). Avaddon ransomware: an in-depth analysis and decryption of infected systems. Retrieved March 24, 2025.](https://arxiv.org/pdf/2102.04796)
[^fn4]: [Microsoft Defender Threat Intelligence. (2022, June 13). The many lives of BlackCat ransomware. Retrieved December 20, 2022.](https://www.microsoft.com/en-us/security/blog/2022/06/13/the-many-lives-of-blackcat-ransomware/)
[^fn5]: [Microsoft. (2012, April 17). Reg. Retrieved May 1, 2015.](https://technet.microsoft.com/en-us/library/cc732643.aspx)
[^fn6]: [Microsoft. (n.d.). Enable the Remote Registry Service. Retrieved May 1, 2015.](https://technet.microsoft.com/en-us/library/cc754820.aspx)
[^fn7]: [Reitz, B. (2017, July 14). Hiding Registry keys with PSReflect. Retrieved August 9, 2018.](https://posts.specterops.io/hiding-registry-keys-with-psreflect-b18ec5ac8353)
[^fn8]: [Russinovich, M. & Sharkey, K. (2006, January 10). Reghide. Retrieved August 9, 2018.](https://docs.microsoft.com/sysinternals/downloads/reghide)
[^fn9]: [Santos, R. (2014, August 1). POWELIKS: Malware Hides In Windows Registry. Retrieved August 9, 2018.](https://blog.trendmicro.com/trendlabs-security-intelligence/poweliks-malware-hides-in-windows-registry/)
[^fn10]: [Unit 42. (2019, February 22). New BabyShark Malware Targets U.S. National Security Think Tanks. Retrieved October 7, 2019.](https://unit42.paloaltonetworks.com/new-babyshark-malware-targets-u-s-national-security-think-tanks/)