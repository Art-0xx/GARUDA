---
mitre_data:
  id: T1554
  linker_tags:
  - mitre/attack/linker/persistence/compromise_host_software_binary
  name: Compromise Host Software Binary
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Compromise Host Software Binary (`T1554`)

Adversaries may modify host software binaries to establish persistent access to systems. Software binaries/executables provide a wide range of system commands or services, programs, and libraries. Common software binaries are SSH clients, FTP clients, email clients, web browsers, and many other user or server applications.

Adversaries may establish persistence though modifications to host software binaries. For example, an adversary may replace or otherwise infect a legitimate application binary (or support files) with a backdoor. Since these binaries may be routinely executed by applications or the user, the adversary can leverage this for persistent access to the host. An adversary may also modify a software binary such as an SSH client in order to persistently collect credentials during logins (i.e., [Modify Authentication Process](https://attack.mitre.org/techniques/T1556)).[^fn1]

An adversary may also modify an existing binary by patching in malicious functionality (e.g., IAT Hooking/Entry point patching)[^fn2] prior to the binary’s legitimate execution. For example, an adversary may modify the entry point of a binary to point to malicious code patched in by the adversary before resuming normal execution flow.[^fn3]

After modifying a binary, an adversary may attempt to impair defenses by preventing it from updating (e.g., via the `yum-versionlock` command or `versionlock.list` file in Linux systems that use the yum package manager).[^fn1]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1554](https://attack.mitre.org/techniques/T1554)

[^fn1]: [ Punsaen Boonyakarn, Shawn Chew, Logeswaran Nadarajan, Mathew Potaczek, Jakub Jozwiak, and Alex Marvi. (2024, June 18). Cloaked and Covert: Uncovering UNC3886 Espionage Operations. Retrieved September 24, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/uncovering-unc3886-espionage-operations)
[^fn2]: [Or Chechik. (2022, October 31). Banking Trojan Techniques: How Financially Motivated Malware Became Infrastructure. Retrieved September 27, 2023.](https://unit42.paloaltonetworks.com/banking-trojan-techniques/#post-125550-_rm3d6xxbk52n)
[^fn3]: [Vladislav Hrčka. (2021, January 1). FontOnLake. Retrieved September 27, 2023.](https://web-assets.esetstatic.com/wls/2021/10/eset_fontonlake.pdf)