---
mitre_data:
  id: T1555.001
  linker_tags:
  - mitre/attack/linker/credential_access/keychain
  name: Keychain
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Keychain (`T1555.001`)

Adversaries may acquire credentials from Keychain. Keychain (or Keychain Services) is the macOS credential management system that stores account names, passwords, private keys, certificates, sensitive application data, payment data, and secure notes. There are three types of Keychains: Login Keychain, System Keychain, and Local Items (iCloud) Keychain. The default Keychain is the Login Keychain, which stores user passwords and information. The System Keychain stores items accessed by the operating system, such as items shared among users on a host. The Local Items (iCloud) Keychain is used for items synced with Apple’s iCloud service. 

Keychains can be viewed and edited through the Keychain Access application or using the command-line utility <code>security</code>. Keychain files are located in <code>~/Library/Keychains/</code>, <code>/Library/Keychains/</code>, and <code>/Network/Library/Keychains/</code>.[^fn2][^fn5][^fn4]

Adversaries may gather user credentials from Keychain storage/memory. For example, the command <code>security dump-keychain –d</code> will dump all Login Keychain credentials from <code>~/Library/Keychains/login.keychain-db</code>. Adversaries may also directly read Login Keychain credentials from the <code>~/Library/Keychains/login.keychain</code> file. Both methods require a password, where the default password for the Login Keychain is the current user’s password to login to the macOS host.[^fn1][^fn3]  


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/LaZagne|LaZagne]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1555.001](https://attack.mitre.org/techniques/T1555/001)

[^fn1]: [Alex Rymdeko-Harvey, Steve Borosh. (2016, May 14). External to DA, the OS X Way. Retrieved September 12, 2024.](https://www.slideshare.net/slideshow/external-to-da-the-os-x-way/62021418)
[^fn2]: [Apple. (n.d.). Keychain Services. Retrieved April 11, 2022.](https://developer.apple.com/documentation/security/keychain_services)
[^fn3]: [Empire. (2018, March 8). Empire keychaindump_decrypt Module. Retrieved April 14, 2022.](https://github.com/EmpireProject/Empire/blob/08cbd274bef78243d7a8ed6443b8364acd1fc48b/lib/modules/python/collection/osx/keychaindump_decrypt.py)
[^fn4]: [Jan Schaumann. (2015, November 5). Using the OS X Keychain to store and retrieve passwords. Retrieved March 31, 2022.](https://www.netmeister.org/blog/keychain-passwords.html)
[^fn5]: [Yana Gourenko. (n.d.). A Deep Dive into Apple Keychain Decryption. Retrieved April 13, 2022.](https://support.passware.com/hc/en-us/articles/4573379868567-A-Deep-Dive-into-Apple-Keychain-Decryption)