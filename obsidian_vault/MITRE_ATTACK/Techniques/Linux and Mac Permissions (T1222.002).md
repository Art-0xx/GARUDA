---
mitre_data:
  id: T1222.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/linux_and_mac_permissions
  name: Linux and Mac Permissions
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Linux and Mac Permissions (`T1222.002`)

Adversaries may modify file or directory permissions/attributes to evade access control lists (ACLs) and access protected files.[^fn1][^fn2] File and directory permissions are commonly managed by ACLs configured by the file or directory owner, or users with the appropriate permissions. File and directory ACL implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).

Most Linux and Linux-based platforms provide a standard set of permission groups (user, group, and other) and a standard set of permissions (read, write, and execute) that are applied to each group. While nuances of each platform’s permissions implementation may vary, most of the platforms provide two primary commands used to manipulate file and directory ACLs: <code>chown</code> (short for change owner), and <code>chmod</code> (short for change mode).

Adversarial may use these commands to make themselves the owner of files and directories or change the mode if current permissions allow it. They could subsequently lock others out of the file. Specific file and directory modifications may be a required step for many techniques, such as establishing Persistence via [Unix Shell Configuration Modification](https://attack.mitre.org/techniques/T1546/004) or tainting/hijacking other instrumental binary/configuration files via [Hijack Execution Flow](https://attack.mitre.org/techniques/T1574).[^fn3] 


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/File and Directory Permissions Modification (T1222)|File and Directory Permissions Modification]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1222.002](https://attack.mitre.org/techniques/T1222/002)

[^fn1]: [Hybrid Analysis. (2018, June 12). c9b65b764985dfd7a11d3faf599c56b8.exe. Retrieved August 19, 2018.](https://www.hybrid-analysis.com/sample/ef0d2628823e8e0a0de3b08b8eacaf41cf284c086a948bdfd67f4e4373c14e4d?environmentId=100)
[^fn2]: [Hybrid Analysis. (2018, May 30). 2a8efbfadd798f6111340f7c1c956bee.dll. Retrieved August 19, 2018.](https://www.hybrid-analysis.com/sample/22dab012c3e20e3d9291bce14a2bfc448036d3b966c6e78167f4626f5f9e38d6?environmentId=110)
[^fn3]: [Phil Stokes. (2021, February 16). 20 Common Tools & Techniques Used by macOS Threat Actors & Malware. Retrieved August 23, 2021.](https://labs.sentinelone.com/20-common-tools-techniques-used-by-macos-threat-actors-malware/)