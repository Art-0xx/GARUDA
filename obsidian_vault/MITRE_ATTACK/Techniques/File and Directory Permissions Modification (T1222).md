---
mitre_data:
  id: T1222
  linker_tags:
  - mitre/attack/linker/defense_impairment/file_and_directory_permissions_modification
  name: File and Directory Permissions Modification
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# File and Directory Permissions Modification (`T1222`)

Adversaries may modify file or directory permissions/attributes to evade access control lists (ACLs) and access protected files.[^fn2][^fn3] File and directory permissions are commonly managed by ACLs configured by the file or directory owner, or users with the appropriate permissions. File and directory ACL implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).

Modifications may include changing specific access rights, which may require taking ownership of a file or directory and/or elevated permissions depending on the file or directory’s existing permissions. This may enable malicious activity such as modifying, replacing, or deleting specific files or directories. Specific file and directory modifications may be a required step for many techniques, such as establishing Persistence via [Accessibility Features](https://attack.mitre.org/techniques/T1546/008), [Boot or Logon Initialization Scripts](https://attack.mitre.org/techniques/T1037), [Unix Shell Configuration Modification](https://attack.mitre.org/techniques/T1546/004), or tainting/hijacking other instrumental binary/configuration files via [Hijack Execution Flow](https://attack.mitre.org/techniques/T1574).

Adversaries may also change permissions of symbolic links. For example, malware (particularly ransomware) may modify symbolic links and associated settings to enable access to files from local shortcuts with remote paths.[^fn7][^fn4][^fn1][^fn6][^fn5] 


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Linux and Mac Permissions (T1222.002)|Linux and Mac Permissions]]
- [[../Techniques/Windows Permissions (T1222.001)|Windows Permissions]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1222](https://attack.mitre.org/techniques/T1222)

[^fn1]: [Falcon OverWatch Team. (2022, March 23). Falcon OverWatch Threat Hunting Contributes to Seamless Protection Against Novel BlackCat Attack. Retrieved May 5, 2022.](https://www.crowdstrike.com/blog/falcon-overwatch-contributes-to-blackcat-protection/)
[^fn2]: [Hybrid Analysis. (2018, June 12). c9b65b764985dfd7a11d3faf599c56b8.exe. Retrieved August 19, 2018.](https://www.hybrid-analysis.com/sample/ef0d2628823e8e0a0de3b08b8eacaf41cf284c086a948bdfd67f4e4373c14e4d?environmentId=100)
[^fn3]: [Hybrid Analysis. (2018, May 30). 2a8efbfadd798f6111340f7c1c956bee.dll. Retrieved August 19, 2018.](https://www.hybrid-analysis.com/sample/22dab012c3e20e3d9291bce14a2bfc448036d3b966c6e78167f4626f5f9e38d6?environmentId=110)
[^fn4]: [Kaspersky Global Research & Analysis Team (GReAT). (2022). A Bad Luck BlackCat. Retrieved May 5, 2022.](https://go.kaspersky.com/rs/802-IJN-240/images/TR_BlackCat_Report.pdf)
[^fn5]: [Microsoft. (2021, September 27). fsutil behavior. Retrieved January 14, 2022.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/fsutil-behavior)
[^fn6]: [Pereira, T. Huey, C. (2022, March 17). From BlackMatter to BlackCat: Analyzing two attacks from one affiliate. Retrieved May 5, 2022.](https://blog.talosintelligence.com/2022/03/from-blackmatter-to-blackcat-analyzing.html)
[^fn7]: [Symantec Threat Hunter Team. (2021, December 16). Noberus: Technical Analysis Shows Sophistication of New Rust-based Ransomware. Retrieved January 14, 2022.](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/noberus-blackcat-alphv-rust-ransomware)