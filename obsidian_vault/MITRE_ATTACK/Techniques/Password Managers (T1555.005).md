---
mitre_data:
  id: T1555.005
  linker_tags:
  - mitre/attack/linker/credential_access/password_managers
  name: Password Managers
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Password Managers (`T1555.005`)

Adversaries may acquire user credentials from third-party password managers.[^fn3] Password managers are applications designed to store user credentials, normally in an encrypted database. Credentials are typically accessible after a user provides a master password that unlocks the database. After the database is unlocked, these credentials may be copied to memory. These databases can be stored as files on disk.[^fn3]

Adversaries may acquire user credentials from password managers by extracting the master password and/or plain-text credentials from memory.[^fn2][^fn4] Adversaries may extract credentials from memory via [Exploitation for Credential Access](https://attack.mitre.org/techniques/T1212).[^fn5]
 Adversaries may also try brute forcing via [Password Guessing](https://attack.mitre.org/techniques/T1110/001) to obtain the master password of a password manager.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1555.005](https://attack.mitre.org/techniques/T1555/005)

[^fn1]: [Dahan, A. et al. (2019, December 11). DROPPING ANCHOR: FROM A TRICKBOT INFECTION TO THE DISCOVERY OF THE ANCHOR MALWARE. Retrieved September 10, 2020.](https://www.cybereason.com/blog/dropping-anchor-from-a-trickbot-infection-to-the-discovery-of-the-anchor-malware)
[^fn2]: [Dantzig, M. v., Schamper, E. (2019, December 19). Operation Wocao: Shining a light on one of China’s hidden hacking groups. Retrieved October 8, 2020.](https://www.fox-it.com/media/kadlze5c/201912_report_operation_wocao.pdf)
[^fn3]: [ise. (2019, February 19). Password Managers: Under the Hood of Secrets Management. Retrieved January 22, 2021.](https://www.ise.io/casestudies/password-manager-hacking/)
[^fn4]: [Lee, C., Schoreder, W. (n.d.). KeeThief. Retrieved February 8, 2021.](https://github.com/GhostPack/KeeThief)
[^fn5]: [National Vulnerability Database. (2019, October 9). CVE-2019-3610 Detail. Retrieved April 14, 2021.](https://nvd.nist.gov/vuln/detail/CVE-2019-3610)